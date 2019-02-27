angular.module('cmsapp.RequestinfoCtrl', ['ionic-zoom-view'])

.controller('RequestinfoCtrl', function($scope, $stateParams,schoolServices,
                     				$ionicLoading,$ionicPopup,$state,$timeout,RequestinfoServices,Constants,$cordovaInAppBrowser,$cordovaPrinter) 
{
    	var data = 
    	{
    		issue_id : localStorage.issue_id,
    	}
    	
    	console.log(data);

    	RequestinfoServices.view_Requestinfo(data).then(function(response)
       	{
          console.log(response.data);

          $scope.story_imageUrl = Constants.PDF_IMAGE['story_imageUrl'];

          $scope.statement_forms= Constants.PDF_IMAGE['statement_forms'];
          $scope.resolve= Constants.PDF_IMAGE['resolve'];
          $scope.template_pdf= Constants.PDF_IMAGE['template_pdf'];
          $scope.cooperation_forms= Constants.PDF_IMAGE['cooperation_forms'];
          $scope.accessinfo= Constants.PDF_IMAGE['accessinfo'];
          $scope.feedback= Constants.PDF_IMAGE['feedback'];

          $scope.listData0 =response.data.response[0];
          $scope.listData1 =response.data.response[1];
          $scope.listData2 =response.data.response[2];
          $scope.listData3 =response.data.response[3];   
		});
    	//window.plugins.pdfviewer.showpdf('filename.pdf', 'Document Title', true);

    	$scope.openURL=function(url) 
    	{
    		console.log($scope.resolve+url);
        	// $cordovaPrinter.print($scope.resolve+url);
        	if($cordovaPrinter.isAvailable()) 
        	{
            	$cordovaPrinter.print($scope.resolve+url);
        	} 
        	else 
        	{
            	alert("Printing is not available on device");
        	}
    	}
})