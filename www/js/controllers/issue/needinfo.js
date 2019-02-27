angular.module('cmsapp.needInfoCtrl', [])
.controller('needInfoCtrl', function($scope,$timeout, $stateParams,issueServices,$rootScope,$ionicPopup) {
      $scope.selection = [];
      $rootScope.prevTab=2;
     
    
     // $scope.options = [{ name: "a", id: 1 }, { name: "b", id: 2 }];
    // $scope.selectedOption = $scope.options[1];
    if ($rootScope.issue_access == null) {
      $rootScope.issue_access = {};
    }
     
     issueServices.list_issuedata().then(function(res)
     {
      console.log(res);

      $scope.records = res.data.response;
      $scope.output=($rootScope.issue_access != null) ? $rootScope.issue_access.data_id : '';
     })

    $scope.test={'other':($rootScope.issue_access != null) ? $rootScope.issue_access.other_data : ''}

    // $scope.records = [{
    //     id: 1,
    //     value: "One",
    // }, {
    //     id: 2,
    //     value: "Two",
    // }, {
    //     id: 3,
    //     value: "Three",
    // }];   

    var data =[];

    $scope.selectedOption = function(select){
        console.log(select);
        $scope.selectedOp = select;
        console.log($scope.selectedOp); 
    }
      // $scope.Products = [{id:1,name:"Apple"}, {id:2,name:"Banana"}, {id:3,name:"Carrort"}, {id:4,name:"Dart"}];
      console.log($scope.test.other);
      $scope.save = function(){
$rootScope.loadingOn();
          // console.log($scope.test.other);
          
        // if ($scope.test.other !="" && typeof $scope.test.other != 'undefined') {
        //   $scope.output.undefined.push($scope.test.other);
        // }
            var data ={
              issue_id    : localStorage.getItem('issue_id'),
              data_id     : $scope.selectedOp,
              other_data  : $scope.test.other
          }
          console.log(data);
          issueServices.save_accessinfo(data).then(function(response){
              console.log(response);
              
              $rootScope.issue_access.other_data = $scope.test.other;
              $rootScope.issue_access.data_id = $scope.selectedOp;
              
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
     
});