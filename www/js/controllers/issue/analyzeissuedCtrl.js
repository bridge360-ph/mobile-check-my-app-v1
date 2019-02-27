angular.module('cmsapp.analyzeissuedCtrl', [])
.controller('analyzeissuedCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	$rootScope.prevTab=2;
	$scope.learner={};
	$scope.step={};
	// $scope.stpe7_value='';
	$scope.data5 = {
		learner5_value 	: '',
		stpe7_value	   	:''
	}
	if ($rootScope.issue_access != null) {
		$scope.data ={
			'issue_exist_from'			: $rootScope.issue_access.issue_exist_from,
			'issue_exist_from_source'	: $rootScope.issue_access.issue_exist_from_source,
			'server_type'				: $rootScope.issue_access.server_type,
			'server_type_source'		: $rootScope.issue_access.server_type_source,
			'effect_on_learners'		: $rootScope.issue_access.effect_on_learners,
			'effect_on_learners_source'	: $rootScope.issue_access.effect_on_learners_source,
			'attention_received'		: $rootScope.issue_access.attention_received,
			'attention_received_source'	: $rootScope.issue_access.attention_received_source,
			'is_report_sent'			: $rootScope.issue_access.is_report_sent,
			'is_report_sent_source'		: $rootScope.issue_access.is_report_sent_source,
			'next_steps'				: $rootScope.issue_access.next_steps,
			'next_steps_source'			: $rootScope.issue_access.next_steps_source
		}


		$scope.load_people = $rootScope.issue_access.effect_on_learners.split(',');
		console.log($scope.load_people);
		angular.forEach($scope.load_people, function(value, key) {
			
				if (value == 'low grade') {
					$scope.learner[0] =true;					
				}else if(value == 'classes disrupted'){
					$scope.learner[1] =true;
				}else if(value == 'learners fail to attend classes'){
					$scope.learner[2] =true;
				}else if(value == 'low morale of teachers'){
					$scope.learner[3] =true;
				}else if(value == 'low morale of community'){
					$scope.learner[4] =true;
				}else{
					$scope.learner[5] =true;
					$scope.data5.learner5_value=value;
				}
		});

		$scope.load_next_steps = $rootScope.issue_access.next_steps.split(',');
		console.log($scope.load_next_steps);
		angular.forEach($scope.load_next_steps, function(value, key) {
			
				if (value == 'need more info') {
					$scope.step[0] =true;					
				}else if(value == 'pursue identified mandated agency'){
					$scope.step[1] =true;
				}else if(value == 'report to higher DepEd office'){
					$scope.step[2] =true;
				}else if(value == 'inquire with other agency'){
					$scope.step[3] =true;
				}else if(value == 'identify resources'){
					$scope.step[4] =true;
				}else if(value == 'file complaint'){
					$scope.step[5] =true;
				}else if(value == 'identify other stakeholders who can help'){
					$scope.step[6] =true;
				}else{
					$scope.step[7] =true;
					$scope.data5.stpe7_value= value;
				}
		});

	}else{
		$scope.data ={
			'issue_exist_from'			: '',
			'issue_exist_from_source'	: '',
			'server_type'				: '',
			'server_type_source'		: '',
			'effect_on_learners'		: '',
			'effect_on_learners_source'	: '',
			'attention_received'		: '',
			'attention_received_source'	: '',
			'is_report_sent'			: '',
			'is_report_sent_source'		: '',
			'next_steps'				: '',
			'next_steps_source'			: ''		
		}
	}

	$scope.save = function(issue_exist_from,server_type,is_report_sent,attention_received){

		// learner
		$rootScope.loadingOn();

		$scope.learners=[];
		  angular.forEach($scope.learner, function(value, key) {
		    if(value){
		      if (key == 0) {
		      		$scope.learners.push('low grade');
		      }else  if(key == 1){
		      		$scope.learners.push('classes disrupted');
		      }else  if(key == 2){
		      		$scope.learners.push('learners fail to attend classes');
		      }else  if(key == 3){
		      		$scope.learners.push('low morale of teachers');
		      }else  if(key == 4){
		      		$scope.learners.push('low morale of community');
		      }else if(key == 5){
		      		$scope.learners.push($scope.data5.learner5_value);
		      }
		    }
		});
		  console.log($scope.learners);
		  console.log($scope.data5.learner5_value);
		$scope.learnerData="";
		 angular.forEach($scope.learners, function(value, key) {
		 		$scope.learnerData += value+','; 
		 });
		$scope.finallearner =$scope.learnerData.substring(0, $scope.learnerData.length - 1);
		// console.log($scope.learners);		
		console.log('finallearner'+$scope.finallearner);

		$scope.steps=[];
		  angular.forEach($scope.step, function(value, key) {
		    if(value){
		      if (key == 0) {
		      		$scope.steps.push('need more info');
		      }else  if(key == 1){
		      		$scope.steps.push('pursue identified mandated agency');
		      }else  if(key == 2){
		      		$scope.steps.push('report to higher DepEd office');
		      }else  if(key == 3){
		      		$scope.steps.push('inquire with other agency');
		      }else  if(key == 4){
		      		$scope.steps.push('identify resources');
		      }else  if(key == 5){
		      		$scope.steps.push('file complaint');
		      }else  if(key == 6){
		      		$scope.steps.push('identify other stakeholders who can help');
		      }else{
		      		$scope.steps.push($scope.data5.stpe7_value);
		      }
		    }
		});

		$scope.tempchoice1="";
		 angular.forEach($scope.steps, function(value, key) {
		 		$scope.tempchoice1 += value+','; 
		 });
		$scope.finalstep =$scope.tempchoice1.substring(0, $scope.tempchoice1.length - 1);
		// console.log($scope.learners);		
		console.log('finalstep'+$scope.finalstep);

		var data = {
			issue_id					:  localStorage.getItem('issue_id'),
			issue_exist_from 			:  issue_exist_from,
			issue_exist_from_source		:  $scope.data.issue_exist_from_source,
			server_type 				:  server_type,
			server_type_source 			:  $scope.data.server_type_source,
			effect_on_learners 			:  $scope.finallearner,
			effect_on_learners_source 	:  $scope.data.effect_on_learners_source,
			attention_received 			:  attention_received,
			attention_received_source 	:  $scope.data.attention_received_source,
			is_report_sent 				:  is_report_sent,
			is_report_sent_source		:  $scope.data.is_report_sent_source,
			next_steps 					:  $scope.finalstep,
			next_steps_source			:  $scope.data.next_steps_source
		}

		console.log(data);
		issueServices.save_accessinfo(data).then(function(response){
				console.log(response);
				$rootScope.loadingOff();
				var alertPopup = $ionicPopup.alert({
		           title: response.data.success == 'true' ? 'Success' : 'Fail',
		           template: response.data.message,
		           cssClass:"messagePopup"
		         });
				 $timeout(function() {
	                alertPopup.close(); //close the popup after 3 seconds for some reason
	            }, 2000);
			
		});

	}
});