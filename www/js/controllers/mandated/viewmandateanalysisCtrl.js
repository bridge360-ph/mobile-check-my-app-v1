angular.module('cmsapp.viewmandateanalysisCtrl', ["hm.readmore"])
.factory('truncate', function () {
  return function strip_tags(input, allowed) {
    allowed = (((allowed || '') + '')
      .toLowerCase()
      .match(/<[a-z][a-z0-9]*>/g) || [])
      .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
      commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '')
      .replace(tags, function($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
      });
  }
})
.filter('ellipsis', function () {
  return function (text, length) {
      if (text.length > length) {
          return text.substr(0, length) + "<a href='#'>...</a>";
      }
      return text;
  }
})
.controller('viewmandateanalysisCtrl', function($scope,$rootScope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state,
                                    mandatedlistServices,$filter,$sce,truncate) {
  	var data = {
        issue_id        : $stateParams.issue_id,
      };
      $scope.showHint = false;
      $scope.limit = 300;
      localStorage.setItem('issue_id',data.issue_id);
    
      $scope.data={};
       mandatedlistServices.view_mandated_analysis(data).then(function(response)
       {
             if(response.data.success == 'true')
             {
                $scope.isMandateExist=true;
                $scope.listData =response.data.response[0];
                $scope.listData.masers_answer = $sce.getTrustedResourceUrl(truncate($scope.listData.masers_answer, '<a><br>'));

                $scope.listData.masers_answer1 = $sce.getTrustedResourceUrl(truncate($scope.listData.masers_answerArray[0], '<a><br>'));

                $scope.listData.masers_answer2 = $sce.getTrustedResourceUrl(truncate($scope.listData.masers_answerArray[1], '<a><br>'));

                // $scope.listData.masers_answer =$scope.listData.masers_answer;
                // $scope.listData.masers_answer = $sce.trustAsHtml($scope.listData.masers_answer);
             }
             else
             {
                $scope.isMandateExist=false;
             }
           });
     
          $scope.htmlToPlaintext=function(text) {
            return text ? String(text).replace(/<[^>]+>/gm, '') : '';
          }
          $scope.backissue=function(){
            localStorage.setItem('issue_id',data.issue_id);
            $state.go('app.viewissue',{issue_id:$stateParams.issue_id});
          }

          $scope.shoiw = false;
          $scope.getinfo1=function(){
            $scope.shoiw = !$scope.shoiw;
          }

})
.controller('policyquoteCtrlInViewMandate', function($scope,$rootScope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state) {

		$scope.policy_quote = $rootScope.policy_quote;
})
.controller('maseranswerCtrlInViewMandate', function($scope,$rootScope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state) {

		$scope.masers_answer = $rootScope.masers_answer;
});





