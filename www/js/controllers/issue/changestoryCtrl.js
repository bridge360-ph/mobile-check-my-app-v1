angular.module('cmsapp.changestoryCtrl', [])
.controller('changestoryCtrl', function($scope,$cordovaCamera,$state, $stateParams,storyServices,$ionicLoading, $ionicPopup,$rootScope,$timeout,Constants) {
	$scope.show=false;
	$rootScope.prevTab=5;
	// $scope.ready = false;
	$rootScope.cameraimage64 ='';
	$rootScope.cameraimage642 ='';
	$scope.images = [];
	$scope.showimage=function()
	{
		$scope.show = !$scope.show;
	}

	if ($rootScope.issue_story !=null) {
			
			if ($rootScope.issue_story.story_picture_one !='') {
				$scope.story1 = 'ok';
				$scope.imageurl = Constants.PDF_IMAGE['story_imageUrl']+$rootScope.issue_story.story_picture_one;
				console.log($scope.imageurl);
			}else{
				$scope.story1 = 'not';
			}
			if ($rootScope.issue_story.story_picture_two !='') {
				$scope.story2 = 'ok';
				$scope.imageurl2 = Constants.PDF_IMAGE['story_imageUrl']+$rootScope.issue_story.story_picture_two;
				console.log($scope.imageurl2);
			}else{
				$scope.story2 = 'not';
			}
		}else{
			$scope.story1 = 'not';
			$scope.story2 = 'not';
		}



	$scope.data= {
		'story':($rootScope.issue_story != null) ? $rootScope.issue_story.story_text : '',
		'needtoshow':true
	}
	$scope.send = function(){
		$rootScope.loadingOn();
		var data ={
			user_id		: localStorage.getItem('user_id'),
			story_id 	: $scope.story_id,
			// story_picture_one : $rootScope.cameraimage64,
			// story_picture_two : $rootScope.cameraimage642
		}
		storyServices.send_story(data).then(function(response){
			$rootScope.loadingOff();
			var alertPopup = $ionicPopup.alert({
                     title: response.data.success == 'true' ? 'Success' : 'Fail',
                     template: response.data.message,
                     cssClass:"messagePopup"
                   });

			 $timeout(function() {
                  alertPopup.close(); //close the popup after 3 seconds for some reason
              }, 3000);
			
		});
	}
	$scope.save = function(){
		$rootScope.loadingOn();
		if ($scope.data.story.length > 0 || $rootScope.cameraimage64 !=undefined || $rootScope.cameraimage642 !=undefined) {
			var data = {
				issue_id 	: localStorage.getItem('issue_id'),
				story_text 	: $scope.data.story
			}
			storyServices.save_story(data).then(function(response){
				console.log(response);
				if (response.data.success == 'true') {
					$scope.data.needtoshow = false;
					$scope.story_id =  response.data.story_id;
					console.log($rootScope.cameraimage64);
					if ($rootScope.cameraimage64 !='' || $rootScope.cameraimage642 !='') {
						console.log($rootScope.cameraimage64);
						$scope.uploadImage();
					}else{

						var alertPopup = $ionicPopup.alert({
	                     title: response.data.success == 'true' ? 'Success' : 'Fail',
	                     template: response.data.message,
	                     cssClass:"messagePopup"
	                   });

					 $timeout(function() {
		                  alertPopup.close(); //close the popup after 3 seconds for some reason
		              }, 3000);
					 $rootScope.loadingOff();
					}
				}else{
					var alertPopup = $ionicPopup.alert({
                     title: response.data.success == 'true' ? 'Success' : 'Fail',
                     template: response.data.message,
                     cssClass:"messagePopup"
                   });

				 $timeout(function() {
	                  alertPopup.close(); //close the popup after 3 seconds for some reason
	              }, 3000);
				 $rootScope.loadingOff();
				}
			});
		}
	}

	$scope.uploadImage = function(){

		var data = {
			issue_id 	: localStorage.getItem('issue_id'),
			// story_text 	: $scope.data.story,
			picture_one : ($rootScope.cameraimage64 !=undefined) ? $rootScope.cameraimage64 :'',
			picture_two : ($rootScope.cameraimage642 !=undefined) ? $rootScope.cameraimage642 :'',
		}
		
		storyServices.save_photo(data).then(function(response){
			console.log(response);

			if (response.data.success == 'true') {
				
				// $scope.story_id =  response.data.story_id;
			}

			var alertPopup = $ionicPopup.alert({
                     title: response.data.success == 'true' ? 'Success' : 'Fail',
                     template: response.data.message,
                     cssClass:"messagePopup"
                   });

			 $timeout(function() {
                  alertPopup.close(); //close the popup after 3 seconds for some reason
              }, 3000);
			 $rootScope.loadingOff();
		});
	}
});