angular.module('cmsapp.cooperationCtrl', [])
.directive('onFileChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.onFileChange);

      element.bind('change', function() {
        scope.$apply(function() {
          var files = element[0].files;
          if (files) {
            onChangeHandler(files);
          }
        });
      });

    }
  };
})	
.controller('cooperationCtrl', function($scope,$window,$state,Constants, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$('.downloadBtn').bind("click" , function () {
        $('#fileinput').click();
    });
	
	$scope.uploaded = 'not';
		
	$scope.clickme = function(){
		window.open( $scope.imageurl, '_system','location=yes');	
	}

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
		    
		      	$rootScope.loadingOff();
				if ($rootScope.engage !=null) {
					if ($rootScope.engage.signed_cooperation_form !='') {
						$scope.uploaded = 'ok';
						$scope.imageurl = Constants.PDF_IMAGE['cooperation_forms']+$rootScope.engage.signed_cooperation_form
					}
				}
			});
		}

		$scope.autoload();
		function getBase64(file) {
			   var reader = new FileReader();
			   reader.readAsDataURL(file);
			   reader.onload = function () {
					 $scope.saveUploadedData(reader.result);
			   };
			   reader.onerror = function (error) {
			     console.log('Error: ', error);
			   };
			}

		   	$scope.onFilesSelected = function(files) {
		     if (files[0]) {
		     $rootScope.loadingOn();
		     getBase64(files[0]);
			};
		}
			$scope.saveUploadedData = function(base64data){
				var data = {
					issue_id : localStorage.getItem('issue_id'),
			 signed_cooperation_form  : base64data
				}
				 issueServices.upload_cooperation(data).then(function(response){
				$scope.imageurl = Constants.PDF_IMAGE['cooperation_forms']+response.file;
					 $rootScope.loadingOff();
					 var alertPopup = $ionicPopup.alert({
							title: response.data.success == 'true' ? 'Success' : 'Fail',
							template: response.data.message,
							cssClass:"messagePopup"
						});

					 if (response.data.success) {
						 $scope.autoload();
					 }
		 $timeout(function() {
						alertPopup.close(); //close the popup after 3 seconds for some reason
			 }, 3000);


				 });
			
				}
});
