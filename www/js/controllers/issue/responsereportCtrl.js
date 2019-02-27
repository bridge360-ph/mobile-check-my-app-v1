angular.module('cmsapp.responsereportCtrl', [])
.controller('responsereportCtrl', function($scope,$state,$window,Constants, 
	$stateParams,reportissuesService,$ionicLoading, $ionicPopup,$rootScope,$timeout) 
{
	if ($rootScope.resolve !=null) {
		$scope.data3=
		{
			date:$rootScope.resolve.followup_date,
			issue:$rootScope.resolve.followup_issue,
			school:$rootScope.resolve.followup_school
		}

	}
	else{
			$scope.data3={
			date:"",
			issue:"",
			school:""
			}
		}

	$scope.addresponsereport= function(form){
      $scope.submitted= true;
      if (form.$valid) {
        console.log($rootScope.app_school_id);

          var data = {
          	  issue_id  :localStorage.getItem('issue_id'),
              followup_date :$scope.data3.date,
              followup_issue :$scope.data3.issue,
              followup_school : $scope.data3.school
            };

            console.log(data);
            $rootScope.loadingOn();
            reportissuesService.save_report(data).then(function(response){
               console.log(response);
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
                // alertPopup.then(function(){
                //   $state.go('app.listissues');
                // })
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
              
            })
        }
    }
})