angular.module('cmsapp.listIssueCtrl', [])
.controller('listIssueCtrl', function($scope,$state, $stateParams,issueServices, $rootScope,$filter) {

  $scope.data={};

//group_id : localStorage.getItem('group_id')
$scope.is_school =true;
  $scope.load=function(){
    var data ={
      school_id : $scope.data.school_id
    }
        console.log($scope.data.school_id);
      issueServices.get_issue_by_school(data).then(function(res){
        console.log(res);
        $scope.issues = res.data.response;
       
         // for (var i = $scope.issues.length - 1; i >= 0; i--) {
         //   $scope.issues[i]
         // }
         function compare(a,b) {
             return new Date(b.added_date) - new Date(a.added_date);
          }

        $scope.issues.sort(compare);
        
         var j=1,k=1;
         for (var i = 0; i < $scope.issues.length ; i++) {
            a = $scope.issues[i].added_date.split(" ");
           // date = a[0];
           $scope.issues[i].date1 = a[0];
           $scope.issues[i].groupid=k;
            j++;
            if(j>3)
            {
              j=1;
              k++;
            }
         }
        
      });
        $rootScope.loadingOff();
    }


    $scope.issue_detail = function(details){
      console.log(details);
      $rootScope.issue_image = details.image;
      $rootScope.issue_name = details.title;
      $state.go('app.viewissue',{'issue_id':details.issue_id});
    }

  if($stateParams.id=="")
  {
    $rootScope.school_id='';
    $rootScope.loadingOn();
    var datatoschool ={
      user_id : localStorage.getItem('user_id'),
      group_id : localStorage.getItem('group_id')
    }
   console.log('inside stateParams'); 
    issueServices.view_school(datatoschool).then(function(response){
      console.log(response);
        if (response.data.success == "false") {
          $rootScope.loadingOff();
          $scope.is_school =false;
        }else{

            $rootScope.SchoolList = response.data.response;
            console.log($rootScope.app_school_id);
            console.log($rootScope.schoolName);
            if ($rootScope.app_school_id !='undefined') {
                $scope.data.school_id = $rootScope.app_school_id;
                $rootScope.schoolName = $rootScope.schoolName;                
            }else{

            $scope.data.school_id=$rootScope.SchoolList[0].app_school_id;
            $rootScope.schoolName=$rootScope.SchoolList[0].school_name;
            console.log($rootScope.schoolName);
            $rootScope.app_school_id = $rootScope.SchoolList[0].app_school_id;
            
            }
            $scope.load();
          }
    });
  }
  else
  {
      $rootScope.loadingOn();
      $scope.data.school_id=$stateParams.id;
      $rootScope.app_school_id = $stateParams.id;
      $scope.load();
  }
  
  
  
  $scope.changeSchool=function(newValue, oldValue)
  {
      $scope.data.school_id=newValue.app_school_id;
      $rootScope.app_school_id = newValue.app_school_id;
      $rootScope.schoolName=newValue.school_name;
      console.log(newValue);
      // console.log($scope.data);
      
     var data2 ={
          school_id : $scope.data.school_id
        }

      issueServices.get_issue_by_school(data2).then(function(res){
        console.log(res);
        $scope.issues = res.data.response;
         var j=1,k=1;
         for (var i = $scope.issues.length - 1; i >= 0; i--) {
          a = $scope.issues[i].added_date.split(" ");
          $scope.issues[i].groupid=k;
          j++;
          if(j>3)
          {
            j=1;
            k++;
          }
        // date = a[0];
        $scope.issues[i].date1 = a[0];
       }
       console.log($scope.issues);
    });

  }

})
.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});