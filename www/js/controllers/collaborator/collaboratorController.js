angular.module('plgn.ionic-segment',[])
.directive('ionSegment', function() {
    return {
      restrict: 'E',
      require: "ngModel",
      transclude: true,
      replace: true,
      scope: {
        full: '@full'
      },
      template: '<ul id="ion-segment" ng-transclude></ul>',
      link: function($scope, $element, $attr, ngModelCtrl) {
        if ($scope.full == "true") {
          $element.find("li").addClass("full");
        }
        var segment = $element.find("li").eq(0).attr("value");
        $element.find("li").eq(0).addClass("active");

        ngModelCtrl.$setViewValue(segment);

      }
    }
  })
  .directive('ionSegmentButton', function() {
    return {
      restrict: 'E',
      require: "^ngModel",
      transclude: true,
      replace: true,
      template: '<li ng-transclude></li>',
      link: function($scope, $element, $attr, ngModelCtrl) {
        var clickingCallback = function() {

          $element.parent().find("li").removeClass("active");
          $element.addClass("active");
          var segment = $element.attr("value");
          ngModelCtrl.$setViewValue(segment);
        }

        $element.bind('click', clickingCallback);

      }
    }
  })
.controller('collaboratorCtrl', function($scope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state,
                                    collaboratorServices,$timeout) {
    
    $scope.data = {
      name : '',
      email_address:''
    }  
      $scope.send_invitation = function(form){
        $scope.submitted=true;
      if(form.$valid)
      {
        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
    
      var data ={
        user_id       :localStorage.getItem('user_id'),
        name          : $scope.data.name,
        email_address : $scope.data.email_address
      }
    
      collaboratorServices.send_invitationApi(data).then(function(response){
            
            var alertPopup = $ionicPopup.alert({
               title: response.data.success == 'true' ? 'Success' : 'Fail',
               template: response.data.message,
               cssClass:"messagePopup"
             });
            $timeout(function() {
                alertPopup.close(); //close the popup after 3 seconds for some reason
            }, 2000);
             $ionicLoading.hide();
              if (response.data.success == 'true') {        

                  alertPopup.then(function(res) {
                    $state.go('app.collaborations');
                  });
              }
        });
      }
    }
})