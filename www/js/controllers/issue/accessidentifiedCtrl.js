angular.module('cmsapp.accessidentifiedCtrl', [])
.controller('accessidentifiedCtrl', function($scope,Constants,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {


	$scope.access =$rootScope.issue_access;
	console.log($scope.access);
	console.log($rootScope.issue_access);
	$rootScope.prevTab=2;
	$rootScope.cameraimage64='';
	$scope.query1='';
	$scope.query2='';
	$scope.query3='';

		$scope.newItem ={
			'a1':'',
			'a2':'',
			'a3':'',
			'elapse_days':''
		}	
	if ($rootScope.issue_access != null) {
		if ($scope.access.accessed_info) {
			var data = $scope.access.accessed_info.split(',');
			// for (var i = data.length - 1; i >= 0; i--) {
			console.log(data[0]);
			console.log(data[1]);
			console.log(data[2]);
			// }
				// beis projectinspectionreport propertyinventory
			if (data[0]) {
				$scope.newItem.a1 ='Y';
				$scope.query1 ='beis'; 
			}
			if (data[1]) {
				$scope.newItem.a2 ='Y';
				$scope.query2 ='projectinspectionreport';
			}
			if (data[2]) {
				$scope.newItem.a3 ='Y';
				$scope.query3 ='propertyinventory';
			}
		}
		if ($rootScope.issue_access.relevent_photo !='') {
			$scope.uploaded = 'true';
			$scope.imageurl = Constants.PDF_IMAGE['accessinfo']+$rootScope.issue_access.relevent_photo
		}else{
			$scope.uploaded = 'false';
		}
	}else{
		$scope.newItem.a1 ='N';
		$scope.newItem.a2 ='N';
		$scope.newItem.a3 ='N';
		$scope.uploaded = 'false';
	}	
		$(".hideshow").hide();
		$scope.stateChanged = function(checkStatus){
			if (checkStatus) {
				console.log("checked");
				$(".hideshow").show();
				$scope.check=true;
			}else{
				$scope.check=false;
				$(".hideshow").hide();
			}

		}

		$scope.savedata=function(argument) {
			var x='';
			$rootScope.loadingOn();
			if ($scope.query1 !='') {
				x +=$scope.query1+",";
			}
			if($scope.query2 !=''){
				x += $scope.query2+",";
			}
			if ($scope.query3 !='') {
				x += $scope.query3+",";
			}

			console.log(x);
			$scope.final =x.substring(0, x.length - 1);
			// var x =$scope.query1+","+$scope.query2+","+$scope.query3;
			if ($scope.check) {
				$scope.poerson = $scope.newItem.elapse_days;
			}else{
				$scope.poerson = '';
			}
			var data ={
					issue_id		: localStorage.getItem('issue_id'),
					accessed_info 	: $scope.final,
					elapse_days 	: $scope.poerson,
					relevent_photo	: $rootScope.cameraimage64
				}
			console.log(data);
			
			issueServices.save_accessinfo(data).then(function(response) {
				console.log(response);
				var alertPopup = $ionicPopup.alert({
		           title: response.data.success == 'true' ? 'Success' : 'Fail',
		           template: response.data.message,
		           cssClass:"messagePopup"
		         });
				 $timeout(function() {
	                alertPopup.close(); //close the popup after 3 seconds for some reason
	            }, 2000);
			})
			$rootScope.loadingOff();
		}

		
		$scope.stateChanged1 = function(checkStatus){
			if (checkStatus) {
				console.log("checked");
				$scope.query1 ='beis'; 
			}else{
				$scope.query1 ='';
			}

		}
		$scope.stateChanged2 = function(checkStatus){
			if (checkStatus) {
				console.log("checked");
				$scope.query2 ='projectinspectionreport';
			}else{
				$scope.query2 ='';
			}

		}
		$scope.stateChanged3 = function(checkStatus){
			if (checkStatus) {
				console.log("checked");
				$scope.query3 ='propertyinventory';
			}else{
				$scope.query3 ='';
			}

		}


});
		
