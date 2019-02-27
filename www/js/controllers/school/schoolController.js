angular.module('cmsapp.schoolCtrl', [])
// .filter('groupBy', function() {
//     return _.memoize(function(items, field) {
//             return _.groupBy(items, field);
//         });
// })
.controller('schoolCtrl', function($scope,$rootScope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state,issueServices,$timeout) {
   
  var datatoschool ={
      user_id : localStorage.getItem('user_id'),
      group_id : localStorage.getItem('group_id')
    }
    $scope.load = function(){
      $rootScope.loadingOn();
    issueServices.view_school(datatoschool).then(function(response){
             $rootScope.SchoolList = response.data.response;
             
           });
    $rootScope.loadingOff();
    }
  $scope.load();
    
    $scope.listIssue=function(school_id){
      $rootScope.schoolName = school_id.school_name;
      $rootScope.school_id = school_id.app_school_id;
      $state.go('app.listissues',{id: school_id.app_school_id});
    }

    $scope.delete_school = function(app_school_id){
      
      var confirmPopup = $ionicPopup.confirm({
       template: 'Are you sure you want to delete this school ?'
     });
     confirmPopup.then(function(res) {
       if(res) {

         $rootScope.loadingOn();
        var data ={
          school_id : app_school_id.app_school_id
        }
         issueServices.delete_school(data).then(function(response){
         
          if (response.data.success == 'true') {
              var index = $rootScope.SchoolList.indexOf(app_school_id);
         
              $rootScope.SchoolList.splice(index, 1);
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
       } else {
       }
     });


      // $rootScope.loadingOn();
      //  console.log(app_school_id.app_school_id);
      //   var data ={
      //     school_id : app_school_id.app_school_id
      //   }
        
      // issueServices.delete_school(data).then(function(res){
      //   // console.log(res);
      //   var index = $rootScope.SchoolList.indexOf(app_school_id);
      //     console.log(index);
      //     $rootScope.SchoolList.splice(index, 1);

      // });
    }
});