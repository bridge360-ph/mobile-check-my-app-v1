angular.module('cmsapp.chatCtrl', ['ionic'])

// All this does is allow the message
// to be sent when you tap return
.directive('input', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&',
      'onFocus': '&',
      'onBlur': '&'
    },
    link: function(scope, element, attr) {
      element.bind('focus', function(e) {
        if (scope.onFocus) {
          $timeout(function() {
            scope.onFocus();
          });
        }
      });
      element.bind('blur', function(e) {
        if (scope.onBlur) {
          $timeout(function() {
            scope.onBlur();
          });
        }
      });
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
})
.directive('onLongPress', function($timeout) {
  return {
    restrict: 'A',
    link: function($scope, $elm, $attrs) {
      $elm.bind('touchstart', function(evt) {
        // Locally scoped variable that will keep track of the long press
        $scope.longPress = true;

        // We'll set a timeout for 600 ms for a long press
        $timeout(function() {
          if ($scope.longPress) {
            // If the touchend event hasn't fired,
            // apply the function given in on the element's on-long-press attribute
            $scope.$apply(function() {
              $scope.$eval($attrs.onLongPress)
            });
          }
        }, 600);
      });

      $elm.bind('touchend', function(evt) {
        // Prevent the onLongPress event from firing
        $scope.longPress = false;
        // If there is an on-touch-end function attached to this element, apply it
        if ($attrs.onTouchEnd) {
          $scope.$apply(function() {
            $scope.$eval($attrs.onTouchEnd)
          });
        }
      });
    }
  };
})

.controller('chatCtrl', function($scope,$interval,$state,$filter,$rootScope, $http,$timeout,$stateParams,$ionicPopup, $ionicScrollDelegate,chatservices,$localStorage) {

  $scope.hideTime = true;
  $scope.empty = false;
  $scope.sender = localStorage.getItem('user_id');
  
  if ($scope.sender == $stateParams.sender_id) {
    $scope.receiver = $stateParams.receiver_id
  }else{
    $scope.receiver = $stateParams.sender_id
  }
      var data = {
        sender_id : $stateParams.sender_id,
        receiver_id : $stateParams.receiver_id
      }
      chatservices.view_messages(data).then(function(res){
        $rootScope.chat_name = res.receivername;
        // console.log($scope.chat_name);
        
        if (res.message == null) {
          $scope.empty = true;
          $scope.chat=[]; 
        }else{
         $scope.chat = res.message;
         for (var i = $scope.chat.length - 1; i >= 0; i--) {
            a = $scope.chat[i].added_date.split(" ");
            date = a[0];
            time = a[1];  
            
            timedata = time.split(":");
            if (timedata[0] > 12) {
              timedata[0] = timedata[0] -12;
            }
            $scope.chat[i].cdate = timedata[0]+":"+timedata[1];
            $scope.chat[i].date = date;
            var formattedDate =$filter('date')(date,"dd/MM/yyyy"); 

            $scope.chat[i].time = time;
          }
        }
      }); 

$scope.calcDiff = function(firstDate, secondDate){
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays;
}
  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

      $scope.sendMessage = function() {

        var receiver_token_data ={
            receiver_id : $scope.receiver
        }
       

          alternate = !alternate;
          var d = new Date();
          d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
          t = d.split(":");

          if (typeof $scope.data.message != '' && $scope.data.message != undefined) {

              var chatMessage = {
                  sender_id : $scope.sender,
                  receiver_id : $scope.receiver,
                  message_text : $scope.data.message,
                  is_read : 'N',
                  is_sender_deleted : 'N',
                  is_receiver_deleted : 'N'
              }
              var message=$scope.data.message;
              chatservices.send_message(chatMessage).then(function(res){

                  $scope.last_message_id = res.message_id; 
                 
                    if (res.success =='true') {
                      // $scope.$apply(function(){
                         $scope.chat.push({
                        message_id:$scope.last_message_id,
                        sender_id: $scope.sender,
                        message_text: message,
                        cdate: t[0]+":"+t[1]
                        });
                      // });
                      $scope.empty = false;
                           chatservices.receiver_token(receiver_token_data).then(function(res){
                        
                                var device_token = res.device_token;
                          if (device_token !='') {
                         //Send notification to user
                            

                              $http({
                                method: "POST",
                                dataType: 'jsonp',
                                headers: {'Content-Type': 'application/json', 'Authorization': 'key=AIzaSyBu4JynSo6n7F7qvxV40JdoMUPPCHzuFVs'},
                                url: "https://fcm.googleapis.com/fcm/send",
                                data: JSON.stringify(
                                    {
                                      "notification":{
                                        "title":$rootScope.user_name,  //Any value
                                        "body": message,  //Any value
                                        "sound": "default", //If you want notification sound
                                        "click_action": "FCM_PLUGIN_ACTIVITY",  //Must be present for Android
                                        "icon": "ic_stat_cms_app",
                                        "iconColor": "grey"  //White icon Android resource
                                      },
                                      "data":{
                                        "param1":$stateParams.sender_id,  //Any data to be retrieved in the notification callback
                                        "param2":$stateParams.receiver_id
                                      },
                                      "to":device_token, //Topic or single device
                                      "priority":"high", //If not set, notification won't be delivered on completely closed iOS app
                                      "restricted_package_name":"" //Optional. Set for application filtering
                                    }
                                  )
                              }).success(function(data){
                                console.log("Success: " + JSON.stringify(data));
                              }).error(function(data){
                                console.log("Error: " + JSON.stringify(data));
                              });
                            }
                       }) 
                    }
              });
                       
        }

            

            delete $scope.data.message;
            $ionicScrollDelegate.scrollBottom(true);

          };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];

    $scope.itemOnLongPress = function(chatD) {

      $scope.remove = chatD;
      $scope.id=chatD.message_id;
		
       $scope.myPopup = $ionicPopup.show({
        cssClass: 'Choose options',
        scope: $scope,
        template: '<div class="popmessage" >Where do you delete message? </div><br><button ng-click="deletemsg()" class="popup-buttons-picture-type" <b>Delete</b></button>&nbsp;<button ng-click="closePopup()" class="image-popup-cancel" <b>Cancel</b></button> ',
    });
       $scope.closePopup = function(){
      // window.localStorage.setItem("isUploadingImage", "false");


      $scope.myPopup.close();
    };
     $scope.deletemsg= function(){

      var userid=localStorage.getItem('user_id');

      var tmp={'message_id' :$scope.id,'user_id' : userid}

        chatservices.delete_message(tmp).then(function(response){
             
               $scope.myPopup.close();             
          
            })
        index = $scope.chat.findIndex(x => x.message_id==$scope.id); //From object select single object index
			 // var index = $scope.chat.indexOf($scope.remove); from single array
			  $scope.chat.splice(index, 1);
        $scope.myPopup.close();
      }
    };
    
    $scope.itemOnTouchEnd = function(id) {
  
    }

    // $interval(function () {
    //    $state.go($state.current, {}, {reload: true});
    // }, 5000);
});