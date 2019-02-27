
angular.module('cmsapp.viewIssueCtrl', [])
.controller('viewIssueCtrl', function($scope,mandatedlistServices,$state,$rootScope,$timeout,$stateParams,issueServices,$ionicPopup,$filter, $ionicScrollDelegate,$location) {

    $scope.startSC='startSC';
console.log($rootScope.app_school_id);
    if(localStorage.getItem('group') !=null){
      // $scope.startSC='';
      $scope.shownGroup2 = localStorage.getItem('group');
    }else{
      $scope.startSC='startSC';
    }
    console.log($stateParams.issue_id);  
    $scope.feed = null;
    localStorage.setItem('issue_id',$stateParams.issue_id);
    var data ={
      issue_id : $stateParams.issue_id 
    }
    $scope.stateToGo = 'app.previewfeedbackreport'; 
    $rootScope.loadingOn();
    issueServices.getIssue_details(data).then(function(response){
      $rootScope.issueData    = response.data.response.issue_data;
      $rootScope.engage       = response.data.response.engage;
      $rootScope.feedback     = response.data.response.feedback;
      $rootScope.issue_access = response.data.response.issue_access;
      $rootScope.issue_story  = response.data.response.issue_story;
      $rootScope.resolve      = response.data.response.resolve;
      $rootScope.issueids = response.data.response.issue_data.issue_id;
      $rootScope.serviceitemids = response.data.response.issue_data.service_item_id;  
    

      console.log($scope.issueData);
      $scope.feed = $rootScope.feedback;
       if ($scope.feed == null || $scope.feed.feedback_text =='') {
              $scope.stateToGo = 'app.feedbackreport'; 
            
        }else{
            console.log($rootScope.feedback);
            $scope.stateToGo = 'app.previewfeedbackreport';  
        }
        $scope.loadAccordian();
        if($rootScope.prevTab!="" && typeof $rootScope.prevTab!=='undefined')
        {
            var obj = $filter('filter')($scope.groups2, {id: $rootScope.prevTab}, true)[0];
            console.log(obj);
            $scope.toggleGroup2(obj);
            $scope.startSolutionChaser();
            $location.hash("group"+$rootScope.prevTab);
            $ionicScrollDelegate.$getByHandle('scroll').anchorScroll(false);
           // $location.hash("group"+$rootScope.prevTab);
        }
        $rootScope.loadingOff();
    });  
/*View issue accordion*/ 
  
   $scope.loadAccordian=function()
   {      
            

     $scope.groups2 = [];
  $scope.groups2 = [
    { name: 'Engage people', stars:(($rootScope.engage != null) ? $rootScope.engage.star :'0')+'/10 stars', id: 1, items: [{ subName: 'SubBubbles1', subId: 'Identify concerned or affected people.',state:'app.identifyconcerned' }, { subName: 'SubBubbles2', subId: 'Get School Head to confirm issue.',state:'app.confirmissue'}]},
    { name: 'Access information', stars:(($rootScope.issue_access != null) ? $rootScope.issue_access.star:'0')+'/15 stars', id: 2, items: [{ subName: 'SubGrup1', subId: 'Identify needed information',state:'app.neededinfo' }, { subName: 'SubGrup1', subId: 'Request and access identified information',state:'app.accessidentifiedinfo' },{ subName: 'SubGrup1', subId: 'Review information',state:'app.reviewinfo' },{ subName: 'SubGrup1', subId: 'Analyze issue based on information', state:'app.analyzeissued'}]},
    { name: 'Feedback', stars:(($rootScope.feedback != null) ? $rootScope.feedback.star:'0')+'/30 stars', id: 3, items: [{ subName: 'SubGrup1', subId: 'Write feedback report', state:$scope.stateToGo }, { subName: 'SubGrup1', subId: 'Get people to support feedback report', state:'app.feedbacksupport' }, { subName: 'SubGrup1', subId: 'Send report to school and mandated office', state:'app.sendreport' }, { subName: 'SubGrup1', subId: 'Get report stamped “Received”', state:'app.reportstamped' }]},
    { name: 'Resolve issue', stars:(($rootScope.resolve != null) ? $rootScope.resolve.star:'0')+'/105 stars', id: 4, items: [{ subName: 'SubGrup1', subId: 'Get government office to acknowledge issue.', state:'app.acknowledgeissue' }, { subName: 'SubGrup1', subId: 'Get government office to agree on a solution.', state:'app.governmentagree' }, { subName: 'SubGrup1', subId: 'Share agreed solution with concerned/affected people.', state:'app.shareagreedsolution' }, { subName: 'SubGrup1', subId: 'Follow up implementation of agreement.',state:'app.followup' }, { subName: 'SubGrup1', subId: 'Witness implementation of solution.', state:'app.witnessimplementation'}]},
    { name: 'Tell story of change', stars:'Bonus 50 stars', id: 5,state:'app.changestory'}, /*, items: [{ subName: 'SubGrup1', subId: 'Ca1' }, { subName: 'SubGrup1', subId: 'Cb2' }, { subName: 'SubGrup1', subId: 'Cc3' }]*/
  ];
  }
  $scope.viewmended=function(){
    
      console.log('hiiiiiii');

      var data = {
        service_item_id : $scope.serviceitemids,
        issue_id        :  $scope.issueids
       
      };
      console.log(data);
     
      localStorage.setItem('issue_id',data.issue_id);
      console.log(localStorage.issue_id);

      $state.go('app.viewmandateanalysis',{service_item_id:$scope.serviceitemids,issue_id:$scope.issueids});
    }
  
  
  /* 
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup2 = function(group2) {
    if ($scope.isGroupShown2(group2)) {
      $scope.shownGroup2 = null;
      console.log("if");
    }else{
      console.log("else");
      $scope.shownGroup2 = group2;
      localStorage.setItem('group',group2);
    }
  };
  $scope.isGroupShown2 = function(group2) {
    return $scope.shownGroup2 === group2;
    // return $scope.shownGroup2 === localStorage.getItem('group');
  };

  $scope.startSolutionChaser=function()
  {
    $scope.startSC="";
  }


$scope.removeIssue = function(){
   
    var confirmPopup = $ionicPopup.confirm({
       template: 'Are you sure you want to delete this issue ?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
          issueServices.remove_issue(data).then(function(response){
          console.log(response);
          
          var alertPopup = $ionicPopup.alert({
               title: response.data.success == 'true' ? 'Success' : 'Fail',
               template: response.data.message,
               cssClass:"messagePopup"
             });
            $timeout(function() {
                alertPopup.close(); //close the popup after 3 seconds for some reason
                if (response.data.success=='true') {
                  $state.go('app.listissues',{id:$rootScope.school_id});
                }
              }, 2000);

        })
       } else {
         console.log('You are not sure');
       }
     });
  }

  $scope.callnext = function(argument) {
    console.log(argument);
    $scope.text=0;
    if (argument.state == 'app.confirmissue') {
        if ($rootScope.engage == null) {
            $scope.text=1;
        }else{
            $state.go(argument.state);
        }
    }else if (argument.state == 'app.accessidentifiedinfo') {
        if ($rootScope.issue_access ==null) {
          $scope.text=1;
        }
        else{
          $state.go(argument.state);
        }
    }else if (argument.state =='app.reviewinfo') {
        if ($rootScope.issue_access == null) {
          $scope.text=1;
        }else if ($rootScope.issue_access.elapse_days =='0' && $rootScope.issue_access.accessed_info =='') {
          $scope.text=1;
        }
    }else if (argument.state =='app.analyzeissued') {
        if ($rootScope.issue_access == null) {
          $scope.text=1;
        }else if ($rootScope.issue_access.elapse_days =='0' && $rootScope.issue_access.accessed_info =='') {
          $scope.text=1;
        }else if ($rootScope.issue_access.is_info_useful =='') {
          $scope.text=1;
        }
    }else if (argument.state == 'app.feedbacksupport') {
          if ($rootScope.feedback == null) {
               $scope.text=1; 
          }
    }else if (argument.state == 'app.sendreport') {
        if ($rootScope.feedback == null) {
               $scope.text=1; 
          }else if ($rootScope.feedback.no_of_supports =='0' || $rootScope.feedback.no_of_supports =='') {
              $scope.text=1; 
          }
    }else if (argument.state == 'app.reportstamped') {
          if ($rootScope.feedback == null) {
               $scope.text=1; 
          }else if ($rootScope.feedback.no_of_supports =='0' || $rootScope.feedback.no_of_supports =='') {
              $scope.text=1; 
          }else if ($rootScope.feedback.report_sent_by =="") {
            $scope.text = 1;
          }
    }else if (argument.state == 'app.governmentagree') {
          if ($rootScope.resolve ==null) {
            $scope.text=1;
          }
    }else if (argument.state =='app.shareagreedsolution') {
        if ($rootScope.resolve ==null) {
            $scope.text=1;
          }else if ($rootScope.resolve.added_date =='') {
            $scope.text=1;
          }
    }else if (argument.state =='app.followup') {
        if ($rootScope.resolve ==null) {
            $scope.text=1;
          }else if ($rootScope.resolve.added_date =='') {
            $scope.text=1;
          }else if (($rootScope.resolve.number_of_people_agreed =='0' || $rootScope.resolve.number_of_people_agreed =='') && $rootScope.resolve.inform_concerned_people =='') {
            $scope.text=1;
          }
    }else if (argument.state =='app.witnessimplementation' ) {
           if ($rootScope.resolve ==null) {
            $scope.text=1;
          }else if ($rootScope.resolve.added_date =='') {
            $scope.text=1;
          }else if (($rootScope.resolve.number_of_people_agreed =='0' || $rootScope.resolve.number_of_people_agreed =='') && $rootScope.resolve.inform_concerned_people =='') {
            $scope.text=1;
          }else if (($rootScope.resolve.value_of_improved_service =='0' || $rootScope.resolve.value_of_improved_service =='') && $rootScope.resolve.source_of_fund =='' && $rootScope.resolve.photo_of_improved_service=='' && $rootScope.resolve.copy_of_acknowledgment=='') {
            $scope.text=1;
          }
    }
    // value_of_improved_service  source_of_fund  photo_of_improved_service copy_of_acknowledgment
    else{
      $state.go(argument.state);
    }

        if ($scope.text == 0) {
            $state.go(argument.state); 
        }else{
                  var alertPopup = $ionicPopup.alert({
                         template: 'Fill above form',
                         cssClass:"messagePopup"
                       });
                  $timeout(function() {
                      alertPopup.close(); //close the popup after 3 seconds for some reason
                  }, 2000);
        }

              
  }
  
});