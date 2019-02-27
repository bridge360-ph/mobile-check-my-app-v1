angular.module('cmsapp.addissueCtrl', [])
.controller('addissueCtrl', function($scope,$state, $stateParams,issueServices,
                                  $ionicLoading, $ionicPopup,$rootScope,$timeout,$cordovaCamera) {

    $scope.data={
      mandatary_agency:'',
      description:''
    };

    $rootScope.cameraimage64="";
    
    $scope.ready = false;
    $scope.images = [];

    $scope.submitted= false;
    $scope.selected = '';
    // $rootScope.loadingOn();
    var datatoschool ={
      user_id : localStorage.getItem('user_id')
    }

        


    $scope.autoload = function()
    {
          
           issueServices.get_service_category().then(function(response)
           {
             $scope.serviceCategory = response.data.response;
             console.log($scope.serviceCategory);
           });
           
             
      }     
    $scope.autoload();
     $scope.SelectedCountry = null;

 console.log($rootScope.app_school_id);
    $scope.addissue = function(form){
      $scope.submitted= true;
      // console.log($scope.cat);
      // console.log($scope.Item);
      // console.log($scope.it);
      if (form.$valid) {
        console.log($rootScope.app_school_id);
          var data = {
              user_id   : localStorage.getItem('user_id'),
              school_id : $rootScope.app_school_id,
              title     : $scope.data.description,
              service_category_id : $scope.SelectedCategory,
              service_item_id : $scope.SelectedServiceItem,
              // issue_type_id : $scope.SelectedIssueType,
              mandated_agency : $scope.data.mandatary_agency,
              image           : $rootScope.cameraimage64
            };
            console.log(data);
            $rootScope.loadingOn();
            issueServices.saveissue(data).then(function(response){
               $rootScope.loadingOff();
               if (response.data.success = 'true') {
                var alertPopup = $ionicPopup.alert({
                   title: 'success',
                   template: response.data.message,
                   cssClass:"messagePopup"
                 });
                 $timeout(function() {
                    alertPopup.close(); //close the popup after 3 seconds for some reason
                }, 2000);
                alertPopup.then(function(){
                  $state.go('app.listissues');
                })
              }
              else
              {
                 var alertPopup = $ionicPopup.alert({
                   title: 'success',
                   template: response.data.message,
                   cssClass:"messagePopup"
                 });
                   $timeout(function() {
                      alertPopup.close(); //close the popup after 3 seconds for some reason
                  }, 2000);
              }
              $rootScope.cameraimage64="";
            })
        }
    }


    $scope.afterCategory = function(SelectItem){
          console.log(SelectItem);
            $scope.SelectedCategory = SelectItem;
            console.log($scope.SelectedCategory);
            var data = 
            {
              category_id : $scope.SelectedCategory

            };
            console.log(data);
            issueServices.get_service_item(data).then(function(response)
           {
                   $scope.serviceItem = response.data.response;
                   console.log($scope.serviceItem);
            });
      
    }
    $scope.afterServiceItem = function(IssueType){
            console.log(IssueType);
            $scope.SelectedServiceItem = IssueType;

            var data = 
            {
              service_item_id : $scope.SelectedServiceItem
            };
            console.log(data);
            issueServices.get_issue_type(data).then(function(response)
            {
                   $scope.IssueType = response.data.response;
                    $rootScope.loadingOff();
                    console.log($scope.IssueType);
            });
      
    }
    $scope.afterIssueType = function(IssueType){
            console.log(IssueType);
            $scope.SelectedIssueType = IssueType;
      }
});