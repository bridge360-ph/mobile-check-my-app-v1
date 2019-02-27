angular.module('cmsapp.mandatedlistCtrl', [])
.controller('mandatedlistCtrl', function($scope, $stateParams,
                                    $ionicLoading, $timeout,$ionicPopup,$state,mandatedlistServices) {
    
    $scope.isdisabled=true;
    $scope.hideshow = false;
    $scope.displaytextare = false;
    $scope.len=0;
    $scope.comment='';
    $scope.data1 = {
      comment : ''
    }
    $scope.items=function()
    {
      $scope.hideshow = true;
    }
    $scope.items2=function()
    {
      $scope.hideshow2 = true;
    }
    $scope.show=5;
    $scope.display=5;
    $scope.hide_more = true;
    $scope.loadNextPage = function()
    {
      
      $scope.show=$scope.show + 5 ;
      if ($scope.show >= $scope.len) {
        $scope.hide_more = false;
      }
    }
    $scope.groups2 = [];
    $scope.afterCategory= function(cat){
      // $scope.groups2 = $scope.groups[cat];
      console.log(cat);
      $scope.othercategoryid  = cat;
      
      var i;
      for (i = 0; i < $scope.groups.length; i++) {
        if (cat == $scope.groups[i].category_id) {
          $scope.groups2 = $scope.groups[i];
          break;
        }
      }
    }
    $scope.loadprevPage = function(){

    }
   $scope.groups = [];
    $scope.isdisabled=true;

    mandatedlistServices.get_service_category_byItem().then(function(response)
    {
             $scope.groups = response.data.response;
              angular.forEach($scope.groups, function(value, key){
                  $scope.len++; 
               });
    });
     
    $scope.$watchCollection('[service_item_id, issue_id]', function(newValues){
      
      if(typeof newValues[0] !== 'undefined' && typeof newValues[1] !== 'undefined')
      {
          $scope.isdisabled=false;
      }
    });
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
   $scope.get_service_id=function(service_id)
   {
      console.log(service_id);
      if(service_id == 0)
      {
        this.hideshow = false;
        $scope.displaytextare = true;
      }
      else
      {
        this.hideshow = true;
        $scope.displaytextare = false;
      }
      $scope.service_item_id = service_id; 
      
      var tmp = 
      {
        service_item_id : service_id
      };
      console.log(tmp);
      mandatedlistServices.get_issue_byId(tmp).then(function(response){
             $scope.groups3 = response.data.response;
             // angular.forEach($scope.groups1, function(value, key){
             //      $scope.len++; 
             //      // console.log($scope.len);
             //      // console.log('dsad');
             //   });
           });
   }
   $scope.get_issue_id=function(issue_id){
      console.log(issue_id);
      $scope.issue_id = issue_id;
   }
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
    console.log('toggleGroup');
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
    console.log('isGroupShown');
  };


  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup1 = function(group1) {
    if ($scope.isGroupShown1(group1)) {
      $scope.shownGroup1 = null;
    } else {
      $scope.shownGroup1 = group1;
    }
    console.log('toggleGroup1');
  };
  $scope.isGroupShown1 = function(group1) {
    return $scope.shownGroup1 === group1;
    console.log('isGroupShown1');
  };
  

    $scope.view_mandate = function(){
      // $state.go('app.viewmandateanalysis',{service_item_id:$scope.service_item_id,issue_id:$scope.issue_id});
      $state.go('app.viewmandateanalysis',{issue_id:$scope.issue_id});
    }

    $scope.send = function() 
    {
      console.log($scope.data1.comment);
      var data = {
        user_id : localStorage.getItem('user_id'),
        text : $scope.data1.comment
      }
      mandatedlistServices.sendothertext(data).then(function(response){
        console.log(response.data.status);
        if(response.data.status)
        {
          var alertPopup = $ionicPopup.alert({
            title: response.data.status == 'true' ? 'Success' : 'Fail',
            template: 'Comment save successfully',
            cssClass:"messagePopup"
          });
          $timeout(function() {
                  alertPopup.close(); //close the popup after 3 seconds for some reason
              }, 2000);
        }
      });
    }
});