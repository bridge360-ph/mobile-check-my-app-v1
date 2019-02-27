angular.module('cmsapp.reportstampedCtrl', [])
.controller('reportstampedCtrl', function($scope,$state,Constants,$window, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	$rootScope.prevTab=3;
	$scope.autoload= function(){
		// $scope.$apply(function() {
			var data ={
			      issue_id : localStorage.getItem('issue_id') 
			    }
			    $rootScope.loadingOn();
		    issueServices.getIssue_details(data).then(function(response){
		      $rootScope.issueData    = response.data.response.issue_data;
		      $rootScope.engage       = response.data.response.engage;
		      $rootScope.feedback     = response.data.response.feedback;
		      $rootScope.issue_access = response.data.response.issue_access;
		      $rootScope.issue_story  = response.data.response.issue_story;
		      $rootScope.resolve      = response.data.response.resolve;
		      console.log($scope.issueData);

			if ($rootScope.feedback !=null) {
				if ($rootScope.feedback.stamp_report_file != '') {
					$scope.uploaded = 'ok';
					$scope.notupload= false;
					$scope.dlink = Constants.PDF_IMAGE['feedback']+$rootScope.feedback.stamp_report_file
				}else{
					$scope.notupload= true;
					$scope.uploaded = 'not';
				}
			}else{
					$scope.uploaded = 'ok';
					$scope.notupload= true;
			}
		    $rootScope.loadingOff();
		});
	}
	$scope.autoload();
		console.log($scope.notupload);
		console.log($scope.uploaded);
	$('.reportImg').bind("click" , function () {
        $('#fileinput').click();
        
    });

    $scope.clickme = function(){
		window.open( $scope.dlink, '_system','location=yes');	
	}

		function getBase64(file) {
			   var reader = new FileReader();
			   reader.readAsDataURL(file);
			   reader.onload = function () {
			     $scope.basedata = reader.result;
			   };
			   reader.onerror = function (error) {
			     console.log('Error: ', error);
			   };
			}

		   	$scope.onSelected = function(files) {
		     	console.log("files - " + files[0]);
				     if (files[0]) {
				     	getBase64(files[0]);
				     }
		 	}

		$scope.save = function() {
			$rootScope.loadingOn();
				var data = {
					issue_id 			: localStorage.getItem('issue_id'),
					stamp_report_file	:  $scope.basedata
				}
			console.log(data);
				issueServices.save_feedback(data).then(function(response){
					console.log(response);
					if (response.data.sucscess) {
						$scope.autoload();
					}
						var alertPopup = $ionicPopup.alert({
				           title: response.data.success == 'true' ? 'Success' : 'Fail',
				           template: response.data.message,
				           cssClass:"messagePopup"
				         });
						 $timeout(function() {
			                alertPopup.close(); //close the popup after 3 seconds for some reason
			            }, 2000);
					
					$rootScope.loadingOff();
				})
		}
});
