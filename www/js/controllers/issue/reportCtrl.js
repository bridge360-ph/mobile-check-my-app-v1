angular.module('cmsapp.reportCtrl', [])
.controller('reportCtrl', function($scope,$state,$window,Constants, $stateParams,reportServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	$scope.isclick= false;
  var date = new Date();
  $scope.FromDate = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear() ;
	if ($rootScope.resolve !=null) {
		$scope.data2=
		{
			issuename:$rootScope.resolve.acknowledge_issueof,
			issuedata:$rootScope.resolve.acknowledge_school_in,
			otherdetail:$rootScope.resolve.issue_existed_for,
			schoolname:$rootScope.resolve.acknowledge_other_detail
		}

	}
	else{
	$scope.data2={
		issuename:"",
		issuedata:"",
		otherdetail:"",
		schoolname:""
	}
}
	$scope.click=function()
	{
		$scope.isclick = !$scope.isclick;
	}

	$scope.addreport = function(form){
      $scope.submitted= true;
      if (form.$valid) {
        console.log($rootScope.app_school_id);

          var data = {
              
              issue_id  :localStorage.getItem('issue_id'),
              acknowledge_issueof :$scope.data2.issuename,
              acknowledge_school_in:$scope.data2.schoolname,
              issue_existed_for : $scope.data2.issuedata,
              acknowledge_other_detail:$scope.data2.otherdetail,
              acknowledge_sign: $rootScope.cameraimage64

            };

            console.log(data);
            $rootScope.loadingOn();
            reportServices.save_report(data).then(function(response){
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