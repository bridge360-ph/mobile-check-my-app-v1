angular.module('cmsapp.governmentagreeCtrl', [])
.controller('governmentagreeCtrl', function($scope,$state,$state,$window,Constants, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {


	// $scope.monitory_value= $rootScope.resolve.monetary_value;
	// $scope.source_fund	= $rootScope.resolve.source_of_fund;
	$rootScope.prevTab=4;
	$scope.autoload= function(){
		// $scope.$apply(function() {
			$scope.choice ='';
						$scope.temp = {
							'monitory_value':'',
							'source_fund'	:''	
						}
						
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
		      console.log($rootScope.resolve);

				if ($rootScope.resolve !=null) {
					if ($rootScope.resolve.issue_agreed_by !='') {
						$scope.choice =$rootScope.resolve.issue_agreed_by;
						$scope.temp = {
							'monitory_value': $rootScope.resolve.monetary_value,
							'source_fund'	: $rootScope.resolve.source_of_fund	
						}
					}
					if ($rootScope.resolve.copy_of_agreement !='') {
						$scope.uploaded = 'ok';
						$scope.dlink = Constants.PDF_IMAGE['resolve']+$rootScope.resolve.copy_of_acknowledgment;
					}else{
						$scope.uploaded = 'not';
					}
				}
				$rootScope.loadingOff();
			});
		}
	
	$scope.autoload();
	
	$scope.clickme = function(){
		window.open( $scope.dlink, '_system','location=yes');	
	}

	$scope.basedata="";
	// console.log($scope.temp.monitory_value);
	$scope.save = function(choice) {
		console.log(choice);
		$rootScope.loadingOn();
		var data ={
			user_id					: localStorage.getItem('user_id'),
			issue_id 				: localStorage.getItem('issue_id'),
			issue_agreed_by			: choice,
			monetary_value			: $scope.temp.monitory_value,
			source_of_fund			: $scope.temp.source_fund,
			copy_of_agreement 		: $scope.basedata
		}
		console.log(data);
		issueServices.acknowledge_upload(data).then(function(response){
			console.log(response);
			if (response.data.success) {
				$scope.autoload();
			}
				var alertPopup = $ionicPopup.alert({
		           title: response.data.success == 'true' ? 'Success' : 'Fail',
		           template: response.data.message,
		           cssClass:"messagePopup"
		         });
				$rootScope.loadingOff();
				
				 $timeout(function() {
	                alertPopup.close(); //close the popup after 3 seconds for some reason
	            }, 2000);
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
