angular.module('cmsapp.acknowledgeissueCtrl', [])
.controller('acknowledgeissueCtrl', function($scope,$state,$window,Constants, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	$scope.basedata="";
	$rootScope.prevTab=4;
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

				if ($rootScope.resolve !=null) {
					if ($rootScope.resolve.copy_of_acknowledgment != '') {
						$scope.uploaded = 'ok';
						$scope.dlink = Constants.PDF_IMAGE['resolve']+$rootScope.resolve.copy_of_acknowledgment;
					}
					$scope.choice =$rootScope.resolve.feedback_followup;
					$scope.choice2 =$rootScope.resolve.issue_acknowledgment_by;
				}else{
					$scope.uploaded = 'not';
					$scope.choice ='';
					$scope.choice2 ='';
				}
			$rootScope.loadingOff();
		    });
		// });
	}

	$scope.autoload();

	 $scope.clickme = function(){
		window.open( $scope.dlink, '_system','location=yes');	
	}


	$scope.save=function(ch1,ch2){
		$rootScope.loadingOn();
		var data = {
			user_id					: localStorage.getItem('user_id'),
			issue_id 				: localStorage.getItem('issue_id'),
			feedback_followup 		: ch1,
			issue_acknowledgment_by	: ch2,
			copy_of_acknowledgment	: $scope.basedata
		}
		
		issueServices.acknowledge_issue(data).then(function(response){
			console.log(response);
			$rootScope.loadingOff();

			var alertPopup = $ionicPopup.alert({
		           title: response.data.success == 'true' ? 'Success' : 'Fail',
		           template: response.data.message,
		           cssClass:"messagePopup"
		         });
				 $timeout(function() {
	                alertPopup.close(); //close the popup after 3 seconds for some reason
	            }, 2000);
			

			if (response.data.success) {
				$scope.autoload();
			}

		});
	}

	$('.reportImg').bind("click" , function () {
        $('#fileinput').click();
        
    });
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
})