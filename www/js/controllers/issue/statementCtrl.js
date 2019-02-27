angular.module('cmsapp.statementCtrl', [])
.controller('statementCtrl', function($scope,$cordovaPrinter,$state, InvoiceService,$stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

    $scope.shownow = false;
    $scope.data={
      "issuetitle":"",
      "name":"",
      "telephone":"",
      "email":"",
      "comment":""
    };

    $scope.data2={
      "issuetitle":"",
      "name":"",
      "telephone":"",
      "email":"",
      "comment":""
    };
    $scope.print = function() {
      if($scope.data.issuetitle=="")
      {
          $scope.data.issuetitle=$rootScope.issueData.title;
      }
    var template="<html><h1>Statement form</h1><br><p> We are concerned with and affected by this issue of "+$scope.data.issuetitle+" in "+$rootScope.schoolName+".</p><br>Name : "+$scope.data.name+"<br>Telephone : "+$scope.data.telephone+"<br>Email : "+$scope.data.email+"<br>Comment : "+$scope.data.comment+"</html>";

    if ($scope.data2.name !='') {
      var template1 ="<html><p> We are concerned with and affected by this issue of "+$scope.data.issuetitle+" in "+$rootScope.schoolName+".</p><br>Name : "+$scope.data2.name+"<br>Telephone : "+$scope.data2.telephone+"<br>Email : "+$scope.data2.email+"<br>Comment : "+$scope.data2.comment+"</html>";      

      template = template + template1;
    }
        if($cordovaPrinter.isAvailable()) {
            $cordovaPrinter.print(template);
        } else {
            alert("Printing is not available on device");
        }
    }

    $scope.next =function(){
      $scope.shownow = true;
    }
})   