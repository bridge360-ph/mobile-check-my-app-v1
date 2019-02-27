// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var mainUrl = 'http://webdemonstration.xyz/cmsapp/api/';

angular.module('cmsapp',[
	'ionic',
	'ngCordova',
	'ionic-modal-select',
	'ngStorage',
	'ui.bootstrap',
	'ngSanitize',
	'chart.js',
	'pdf',
	'ionic-monthpicker',
	'angular.filter',
	'ion-datetime-picker',
	'cmsapp.chatCtrl',
	'cmsapp.AppCtrl',
	'cmsapp.schoolCtrl',
	'cmsapp.listIssueCtrl',
	'cmsapp.viewIssueCtrl',
	'cmsapp.addSchoolCtrl',
	'cmsapp.needInfoCtrl',
	'cmsapp.chatMenuCtrl',
	'plgn.ionic-segment',
	'angucomplete-alt',
	'cmsapp.registrationCtrl',
	'cmsapp.loginservices',
	'cmsapp.schoolServices',
	'cmsapp.loginCtrl',
	'cmsapp.resetpasswordCtrl',
	'cmsapp.updateProfileCtrl',
	'cmsapp.addissueCtrl',
	'cmsapp.issueServices',
	'cmsapp.profileService',
	'cmsapp.mandatedlistCtrl',
	'cmsapp.mandatedlistServices',
	'cmsapp.firstCtrl',
	'cmsapp.collaboratorServices',
	'cmsapp.collaboratorlistCtrl',
	'cmsapp.viewmandateanalysisCtrl',
	'cmsapp.chatservices',
	'cmsapp.changepassCtrl',
	'cmsapp.identifyconcernedCtrl',
	'cmsapp.reviewinfoCtrl',
	'cmsapp.statementCtrl',
	'cmsapp.cooperationCtrl',
	'cmsapp.accessidentifiedCtrl',
	'cmsapp.analyzeissuedCtrl',
	'cmsapp.previewreportCtrl',
	'cmsapp.feedbackreportCtrl',
	'cmsapp.feedbacksupportCtrl',
	'cmsapp.sendreportCtrl',
	'cmsapp.reportstampedCtrl',
	'cmsapp.acknowledgeissueCtrl',
	'cmsapp.governmentagreeCtrl',
	'cmsapp.shareagreedsolutionCtrl',
	'cmsapp.witnessimplementationCtrl',
	'cmsapp.followupCtrl',
	'cmsapp.changestoryCtrl',
	'cmsapp.storyServices',
	'cmsapp.new',
	'cmsapp.getRatingService',
	'cmsapp.reportCtrl',
	'cmsapp.responsereportCtrl',
	'cmsapp.reportServices',
	'cmsapp.reportissuesService',

	'cmsapp.RequestinfoServices',
	'cmsapp.RequestinfoCtrl',
	
	'cmsapp.ContactsUsCtrl',
	'cmsapp.feedbackService'
])

.constant('Constants', {
    PDF_IMAGE: {
        resolve 		:'http://webdemonstration.xyz/cmsapp/assets/resolve_issue/',
        statement_forms	:'http://webdemonstration.xyz/cmsapp/assets/statement_forms/',
        template_pdf	:'http://webdemonstration.xyz/cmsapp/assets/template_pdf/',
        cooperation_forms:'http://webdemonstration.xyz/cmsapp/assets/cooperation_forms/',
        accessinfo 		:'http://webdemonstration.xyz/cmsapp/accessinfo/',
        feedback 		: 'http://webdemonstration.xyz/cmsapp/assets/feedback/',
        user_images		: 'http://webdemonstration.xyz/cmsapp/assets/user_images/',
        story_imageUrl	:'http://webdemonstration.xyz/cmsapp/assets/story_issue/'
    },

    API_URL: {
        login_url				: mainUrl + 'login',
        register_url			: mainUrl + 'register_user',
        reset_password_url 		: mainUrl + 'login/reset_password',
        change_password_url		: mainUrl + 'change_password',
        verifycode_url			: mainUrl + 'register_user/verify',
        deleteAccount_url		: mainUrl + 'register_user/delete',
        addschool_url			: mainUrl + 'school/add_school',
        getRegions_url			: mainUrl + 'general/get_regions',
        getDivisons_url			: mainUrl + 'general/get_division',
        getCities_url			: mainUrl + 'general/get_cities',
        view_school_url			: mainUrl + 'school/view_school',
        get_service_category_url: mainUrl + 'general/get_service_category',
        get_service_item_url	: mainUrl + 'general/get_service_item',
        get_issue_type_url		: mainUrl + 'general/get_issue_type',
        add_issue_url			: mainUrl + 'issue/add_issue',
        get_userProfile_url		: mainUrl + 'login/get_profile',
        updateprofile_url		: mainUrl + 'login/update_profile',
        view_school_by_users_url: mainUrl + 'school/view_school_by_users', //used two time one addissue and list school
		view_issue_by_school	: mainUrl + 'issue/view_issue',
		categoryWithItem_url 	: mainUrl + 'general/categoryWithItem',
		IssueTypeWithIssue_url	: mainUrl + 'general/IssueTypeWithIssue',
		send_invitation_url		: mainUrl + 'collaborator/send_invitation',
		invited_collaborator_url: mainUrl + 'collaborator/view_invited_collaborator',
		view_collaborator_url	: mainUrl + 'collaborator/view_collaborator',
		cancel_invitation_url	: mainUrl + 'collaborator/cancel_invitation',
		view_mandated_ana_url	: mainUrl + 'mandate/list_mandate',
		resend_verify_code_url  : mainUrl + 'register_user/resendVerification',
		list_message_url		: mainUrl + 'chat/list_message',
		view_message_url		: mainUrl + 'chat/view_message',
		send_message_url		: mainUrl + 'chat/send_message',
		resetpassword_data_url	: mainUrl + 'login/resetpassword_data',
		remove_school_url   	: mainUrl + 'school/remove_school',
		delete_message_url		: mainUrl + 'chat/delete_message',
		view_issue_details_url	: mainUrl + 'issue/view_issue_details',
		upload_engagedform_url	: mainUrl + 'solution_chaser/upload_engagedform',
		upload_cooperation_url	: mainUrl + 'solution_chaser/upload_cooperation',
		engagepeople_saved_url	: mainUrl + 'solution_chaser/engagepeople_savedata',
		save_accessinfo_url		: mainUrl + 'accsessinfo/save_accessinfo',
		save_feedback_url		: mainUrl + 'feedback/save_feedback',
		acknowledge_issue_url	: mainUrl + 'resolve_issue/acknowledge_issue',
		acknowledge_upload_url	: mainUrl + 'resolve_issue/acknowledge_upload',
		agree_on_issue_url		: mainUrl + 'resolve_issue/agree_on_issue',
		witness_implementation_url:mainUrl+ 'resolve_issue/witness_implementation',
		send_followup_url		: mainUrl + 'resolve_issue/send_followup',
		save_story_url			: mainUrl + 'story_issue/save_story',
		send_story_url			: mainUrl + 'story_issue/send_story',
		remove_issue_url		: mainUrl + 'issue/remove_issue',
		list_issuedata_url		: mainUrl + 'accsessinfo/list_issuedata',
		getRating_url			: mainUrl + 'rating/getRating',
		getRatingYear_url			: mainUrl + 'rating/getRatingWithMonth',
		receiver_token_url		: mainUrl + 'login/receiver_token',
		valid_user_url			: mainUrl + 'login/valid_user',
		logout_url				: mainUrl + 'login/logout',
		site_url    			: mainUrl + 'general/get_issue_type',
		reportsave_url    		: mainUrl + 'resolve_issue/acknowledge_form',
		responsereport_url    	: mainUrl + 'resolve_issue/followup',
		save_photo_url			: mainUrl + 'story_issue/save_photo',

		get_issue_service_item_id : mainUrl + 'general/get_issue',
		Requestinfo_url			: mainUrl + 'mandate/get_documents',
		feedback_url 			: mainUrl + 'user_feedback',

		get_all_user_list : mainUrl + 'general/get_all_user_list',

		mandate_save_specific_concern : mainUrl + 'mandate/save_specific_concern'
    },

    API_HEADERS: {
        content_type: 'application/x-www-form-urlencoded',
    }
})
.controller('mainCtrl',function($cordovaImagePicker,$scope,Login,$cordovaCamera,$ionicLoading,$state,Constants,$rootScope,$ionicPopup,$timeout){

	$rootScope.loadingOn = function(){
		$ionicLoading.show({
		          content: 'Loading',
		          animation: 'fade-in',
		          showBackdrop: true,
		          maxWidth: 200,
		          showDelay: 0
		        });
	}
	$rootScope.loadingOff = function(){
		$ionicLoading.hide();
	}

$rootScope.showPopup2 = function() {
		// $scope.data = {};
		$scope.myPopup = $ionicPopup.show({
		    cssClass: 'Choose options',
		    scope: $scope,
		    template: '<button ng-click="closePopup()" class="image-popup-cancel" <b>X</b></button><br><div class="popmessage" >Where do you wish to use your photo from? </div><br><div class="imagePopupButtons"><button ng-click="takePhoto2()" class="button popup-buttons-picture-type" <b>Camera</b></button>  <button ng-click="choosePhoto2()" class="button popup-buttons-picture-type" <b>Gallery</b></button></div>',
		});
	}

	$rootScope.takePhoto2 = function () {
   		
   			$rootScope.loadingOn();
    	var options = {
	        quality: $rootScope.DefaultImageQuality,
	        destinationType: Camera.DestinationType.DATA_URL,
	        sourceType: Camera.PictureSourceType.CAMERA,
	        allowEdit: false,
	        encodingType: Camera.EncodingType.JPEG,
	        popoverOptions: CameraPopoverOptions,
	        saveToPhotoAlbum: false,
	        correctOrientation: true
    	};
			
        $cordovaCamera.getPicture(options).then(function (imageData) {
			$rootScope.cameraimage = imageData;
			$rootScope.cameraimage642 =  "data:image/jpeg;base64," + imageData;

			
			$rootScope.closePopup();
		 setTimeout(function(){$rootScope.loadingOff();}, 500);
      }, function (err) {
    		// setTimeout(function(){$scope.closePopup();}, 500);
    		$rootScope.closePopup();
      });
   }
   
   /********** Choose Photo from Gallery ***************/              
	$rootScope.choosePhoto2 = function () {
   		
   		$rootScope.loadingOn();
      	var options = {
	        quality: $rootScope.DefaultImageQuality,
	        destinationType: Camera.DestinationType.DATA_URL,
	        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
	        allowEdit: false,
	        encodingType: Camera.EncodingType.JPEG,
	        popoverOptions: CameraPopoverOptions,
	        saveToPhotoAlbum: false,
	        correctOrientation: true
   		};

   		$cordovaCamera.getPicture(options).then(function (imageData) {
			$rootScope.cameraimage = imageData;
			$rootScope.cameraimage642 =  "data:image/jpeg;base64," + imageData;
			// console.log($scope.cameraimage64);
			
			$scope.IsImageUpdated = 1;
   			// $scope.myPopup.close();
   			$rootScope.closePopup();
   					setTimeout(function(){$rootScope.loadingOff();}, 500);
        	}, function (err) {  
        		setTimeout(function(){$rootScope.closePopup();}, 500);
        	}
        );
    }
 	$rootScope.showPopup = function() {
  // $scope.data = {};
		  $scope.myPopup = $ionicPopup.show({
		      cssClass: 'image-popup',
		      scope: $scope,
		      template: '<button ng-click="closePopup()" class="image-popup-cancel" <b>X</b></button><br><div class="popmessage" >Where do you wish to use your photo from? </div><br><div class="imagePopupButtons"><button ng-click="takePhoto()" class="button popup-buttons-picture-type" <b>Camera</b></button>  <button ng-click="choosePhoto()" class="button popup-buttons-picture-type" <b>Gallery</b></button></div>',
		  });
 	 };
	$rootScope.closePopup = function(){
			$scope.myPopup.close();
			$rootScope.loadingOff();
		};
	/********** Take Photo from camera ***************/   
   $rootScope.takePhoto = function () {
   		
   			$rootScope.loadingOn();
    	var options = {
	        quality: $rootScope.DefaultImageQuality,
	        destinationType: Camera.DestinationType.DATA_URL,
	        sourceType: Camera.PictureSourceType.CAMERA,
	        allowEdit: false,
	        encodingType: Camera.EncodingType.JPEG,
	        popoverOptions: CameraPopoverOptions,
	        saveToPhotoAlbum: false,
	        correctOrientation: true
    	};
			
        $cordovaCamera.getPicture(options).then(function (imageData) {
					$rootScope.cameraimage = imageData;
					$rootScope.cameraimage64 =  "data:image/jpeg;base64," + imageData;
			$rootScope.closePopup();
		 setTimeout(function(){$rootScope.loadingOff();}, 500);
      }, function (err) {
    		// setTimeout(function(){$scope.closePopup();}, 500);
    		$rootScope.closePopup();
      });
   }
   
   /********** Choose Photo from Gallery ***************/              
	$rootScope.choosePhoto = function () {
   		
   		$rootScope.loadingOn();
      	var options = {
	        quality: $rootScope.DefaultImageQuality,
	        destinationType: Camera.DestinationType.DATA_URL,
	        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
	        allowEdit: false,
	        encodingType: Camera.EncodingType.JPEG,
	        popoverOptions: CameraPopoverOptions,
	        saveToPhotoAlbum: false,
	        correctOrientation: true
   		};

   		$cordovaCamera.getPicture(options).then(function (imageData) {
			$rootScope.cameraimage = imageData;
			$rootScope.cameraimage64 =  "data:image/jpeg;base64," + imageData;
			console.log($rootScope.cameraimage64);
			
			$scope.IsImageUpdated = 1;
   			// $scope.myPopup.close();
   			$rootScope.closePopup();
   					setTimeout(function(){$rootScope.loadingOff();}, 500);
        	}, function (err) {  
        		setTimeout(function(){$rootScope.closePopup();}, 500);
        	}
        );
    }
    $rootScope.logout = function() 
    {
    	var data = {
    		user_id : localStorage.getItem('user_id')
    	}

var confirmPopup = $ionicPopup.confirm({
            title: 'Confirmation',
            template: 'Are You Sure You Want Logout ?',
            buttons: [{ 
              text: 'Ok',
               type: 'button-positive',
              onTap: function(e) {
              		Login.logout(data).then(function(response){	
						$ionicLoading.hide();
						var alertPopup = $ionicPopup.show({
					           title: response.success == 'true' ? 'Success' : 'Fail',
					           template: response.message,
					           //console.log(template)
					           cssClass:"messagePopup"
					         });
						localStorage.clear();
						 $timeout(function() {
			                alertPopup.close(); //close the popup after 3 seconds for some reason
			            }, 2000);
						if (response.success == 'true') {
							alertPopup.then(function(res) {
						 		$state.go('login');
							});
						 }
					});
              }

            }, {
              text: 'Cancel',
             type: 'button-danger',
              onTap: function(e) {
                  
              }
            }]
        });
        confirmPopup.then(function(res){
            if(res){

            }else{

            }
        });
    
		
    // 		Login.logout(data).then(function(response){
    // 			console.log(response);
				// localStorage.setItem('loggedin','')
				// localStorage.setItem('user_id','');
				// $state.go('login');
    // 		})
	}
})
.run(function($ionicPlatform,$location,$ionicHistory,$rootScope,$state,$cordovaNetwork,Login,$ionicPopup,$timeout) {
   window.addEventListener('native.keyboardshow', function(){
    document.body.classList.add('keyboard-open');
  });

	setTimeout(function() {
        // $cordovaSplashscreen.hide()
        // navigator.splashscreen.hide();
    }, 3000);
// $rootScope.$on('$locationChangeSuccess', function() {
//         if($rootScope.previousLocation == $location.path()) {
//             console.log("Back Button Pressed");
//         }
//         $rootScope.previousLocation = $rootScope.actualLocation;
//         $rootScope.actualLocation = $location.path();
//     });

$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

	if($rootScope.previousLocation == $location.path()) {
            console.log("Back Button Pressed");
          	console.log($location.path());
        }
    	
    	if (fromState.name == 'app.viewissue') {}
        // $state.go('tabs.contact');
  });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  	
  	var count=0;
      $ionicPlatform.registerBackButtonAction(function (event) {
       console.log($location.path());
       if ($location.path() === "/app/dashboard" || $location.path() === "/app/dashboard") {
         
		event.preventDefault();
     	var confirmPopup = $ionicPopup.confirm({
            title: 'Confirmation',
            template: 'Are You Sure You Want Exit ?',
            backdrop: 'static',
  			// keyboard: false,
            buttons: [{ 
              text: 'Exit',
               type: 'button-positive',
              onTap: function(e) {
              	// $scope.exitApp();
              	ionic.Platform.exitApp();
              }

            }, {
              text: 'Cancel',
             type: 'button-danger',
              onTap: function(e) {
                  
              }
            }]
        });
        // confirmPopup.then(function(res){
        //     if(res){

        //     }else{

        //     }
        // });
		console.log('back');
       } else {
         $ionicHistory.goBack();
       }

    //     if($location.path()=="/app/listissues"){
		  //   console.log('sda');
		  //   $state.go('app.listschools');
		  // }
    }, 100);

      if (localStorage.getItem('loggedin') == 'true') {
	      var data = {
	      	user_id 		: localStorage.getItem('user_id'),
			device_token 	: localStorage.getItem('device_token')
	      }
	      Login.valid_user(data).then(function(response){
	      	console.log(response);
	      	if (response.success =='false') {
	      		// $rootScope.logout();
	      	}
	      });
	}
	 FCMPlugin.subscribeToTopic('all');
      FCMPlugin.getToken(
		    function (token) {
		        // alert('Token: ' + token);
		        console.log('Token: ' + token);
					localStorage.setItem('device_token',token);			
		    },
		    function (err) {
		        // alert('error retrieving token: ' + token);
		        console.log('error retrieving token: ' + err);
		    }
		);

		FCMPlugin.onNotification(
		    function(data){
		        if(data.wasTapped){
		//Notification was received on device tray and tapped by the user.
		            console.log("Tapped: " +  JSON.stringify(data) );

		            var chatData =  JSON.stringify(data);
		            console.log(data.param1);
		            if (data.param1 != '') {
			            $state.go('app.viewchat',{sender_id:data.param2,receiver_id:data.param1});
			        }
		        }else{
		//Notification was received in foreground. Maybe the user needs to be notified.
		            console.log("Not tapped: " + JSON.stringify(data) );
		        }
		    },
		    function(msg){
		        // alert('onNotification callback successfully registered: ' + msg);
		        console.log('onNotification callback successfully registered: ' + msg);
		    },
		    function(err){
		        // alert('Error registering onNotification callback: ' + err);
		        console.log('Error registering onNotification callback: ' + err);
		    }
		);

  });
  	$rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      $rootScope.IsNetworkConntection = true;
    })
    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
       $rootScope.IsNetworkConntection = false;
    })
    var networkState = navigator.connection.type;
    console.log(networkState);
     // console.log($rootScope.IsNetworkConntection);
    // if(networkState=='unknown')
    // {
    //   $rootScope.IsNetworkConntection = false;
    //   var alertPopup = $ionicPopup.alert({
    //                title: 'Error',
    //                template: "No Internet Access",
    //                cssClass:"messagePopup"
    //              });

    //   			$rootScope.error = true;
    //              $timeout(function() {
    //                 alertPopup.close(); //close the popup after 3 seconds for some reason
    //                 $rootScope.loadingOff();
    //             }, 3000);
    // }else{
    //   $rootScope.IsNetworkConntection = true;
    //   $rootScope.error = false;
    //  }
    //  console.log($rootScope.IsNetworkConntection);

})
// My Change Bhagirath
.run(function($rootScope,$ionicPlatform) {
	$rootScope.appReady = {status:false};
	
	$ionicPlatform.ready(function() {
		console.log('ionic Ready');
		$rootScope.appReady.status = true;
		$rootScope.$apply();
		console.log('in app.js, appReady is '+$rootScope.appReady.status);
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

//My Change end
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider) {


$ionicConfigProvider.views.maxCache(0);
  $ionicConfigProvider.backButton.text('');
  $stateProvider

    .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'templates/menu.html',
	    controller: 'AppCtrl'
  	})

  	.state('app.search', {
    	url: '/search',
    	views: {
	      'menuContent': {
	        templateUrl: 'templates/search.html'
	      }
    	}
  	})
  	.state('home', {
    	url: '/home',
		templateUrl: 'templates/home.html',
		controller : 'firstCtrl',
		cache	   : false
 	})

	.state('login', {
	    url: '/login',
	    templateUrl: 'templates/login.html',
	    controller : 'loginCtrl',
	    cache	   :  false	      
	})
	.state('app.dashboard', {
	    url: '/dashboard',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/dashboard.html',
	        controller : 'dashboardCtrl'//In appController
	      }
	    }
	  })
	.state('app.schools', {
	    url: '/schools',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/school.html'
	      }
	    }
	  })
	.state('app.listschools', {
	    url: '/listschools',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/list-schools.html',
	        controller :'schoolCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('registration', {
	    url: '/registration',
	    templateUrl: 'templates/registration.html',
	    controller : 'registrationCtrl',
	    cache	   : false
	      
	  })
	// this is a reset password 
	.state('changepassword', {
	    url: '/changepassword',
	     	templateUrl: 'templates/change-password.html',
	        controller : 'changepassCtrl',
	        cache	   : false
	  })	
	.state('resetpassword', {
	    url: '/resetpassword',
	    templateUrl: 'templates/reset-password.html',
	    controller : 'resetpasswordCtrl',
	    cache	   : false
	     
	  })
	.state('verifycode', {
	    url: '/verifycode',
	    templateUrl: 'templates/verify-code.html',
	    controller : 'resetpasswordCtrl',
	    cache	   : false
	     
	  })
	//this is change password
	.state('app.resetchangepassword', {
	    url: '/resetchangepassword',	   
	    views: {
	      'menuContent': {
	    	templateUrl: 'templates/reset-change-password.html',
	    	controller : 'resetpasswordCtrl',
	    	cache	   : false
	     }
	 	}
	  })
	.state('app.editprofile', {
	    url: '/editprofile',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/edit-profile.html',
	        controller : 'updateProfileCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.viewprofile', {
	    url: '/viewprofile',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/view-profile.html',
	        controller : 'updateProfileCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.addschool', {
	    url: '/addschool',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/addschool.html',
	         controller:'addSchoolCtrl',
	         cache	   : false
	      }
	    }
	  })
	.state('app.searchschool', {
	    url: '/searchschool',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/search-school.html',
	        controller:'mandatedlistCtrl'
	      }
	    }
	  })
	.state('app.viewmandateanalysis', {
	    // url: '/viewmandateanalysis/:service_item_id/:issue_id',
	    url: '/viewmandateanalysis/:issue_id',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/view-mandate-analysis.html',
	        controller : 'viewmandateanalysisCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.policyquote', {
	    url: '/policyquote',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/policy-quote.html',
	        controller : 'policyquoteCtrlInViewMandate',
	        cache	   : false
	      }
	    }
	  })
	.state('app.maseranswer', {
	    url: '/maseranswer',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/maser-answer.html',
	        controller : 'maseranswerCtrlInViewMandate',
	        cache	   : false
	      }
	    }
	  })
	.state('app.ratings', {
	    url: '/ratings',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/ratings.html',
	        controller : 'dashboardCtrl'
	      }
	    }
	  })
	.state('app.listissues', {
	    url: '/listissues/:id',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/listissues.html',
	        controller:'listIssueCtrl',
	        cache: false
	      }
	    }
	  })
	.state('app.viewissue', {
	    url: '/viewissue/:issue_id',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/viewissue.html',
	        controller:'viewIssueCtrl',
	        cache: false
	      }
	    }
	  })
	.state('app.addissue', {
	    url: '/addissue',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/add-issue.html',
	        controller : 'addissueCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.identifyconcerned', {
	    url: '/identifyconcerned',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/identifyconcerned.html',
	        controller : 'identifyconcernedCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.statementform', {
	    url: '/statementform',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/statement-form.html',
	        controller : 'statementCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.confirmissue', {
	    url: '/confirmissue',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/head-confirm-issue.html',
	        controller : 'identifyconcernedCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.cooperationform', {
	    url: '/cooperationform',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cooperationform.html',
	        controller : 'cooperationCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.neededinfo', {
	    url: '/neededinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/needed-info.html',
	        controller : 'needInfoCtrl',
	        cache 	   : false
	      }
	    }
	  })
	.state('app.accessidentifiedinfo', {
	    url: '/accessidentifiedinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/access-identified-info.html',
	        controller : 'accessidentifiedCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.reviewinfo', {
	    url: '/reviewinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/review-information.html',
	        controller : 'reviewinfoCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.analyzeissued', {
	    url: '/analyzeissued',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/analyze-issued.html',
	        controller : 'analyzeissuedCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.delete', {
	    url: '/delete-account',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/delete.html',
	        controller : 'AppCtrl',
	        cache	   : false
	      }
	    }
	  })
	
	.state('app.feedbackreport', {
	    url: '/feedbackreport',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/feedback-report.html',
	        controller : 'feedbackreportCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.previewfeedbackreport', {
	    url: '/previewfeedbackreport',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/preview-feedback-report.html',
	        controller : 'previewreportCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.feedbacksupport', {
	    url: '/feedbacksupport',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/feedback-support.html',
	        controller : 'feedbacksupportCtrl'
	      }
	    }
	  })
	.state('app.sendreport', {
	    url: '/sendreport',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/send-report.html',
	        controller : 'sendreportCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.reportstamped', {
	    url: '/reportstamped',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/report-stamped.html',
	        controller : 'reportstampedCtrl',
	        cache		: false
	      }
	    }
	  })
	.state('app.acknowledgeissue', {
	    url: '/acknowledgeissue',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/acknowledge-issue.html',
	        controller : 'acknowledgeissueCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.report',{
		url: '/report',
		views:{
			'menuContent':{
				templateUrl:'templates/report.html',
				controller:'reportCtrl',
				cache : false
			}
		}
	})
	.state('app.responsereport',{
		url:'/responsereport',
		views:{
			'menuContent':{
				templateUrl:'templates/responsereport.html',
				controller:'responsereportCtrl',
				cache :false
			}
		}
	})
	.state('app.governmentagree', {
	    url: '/governmentagree',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/government-agree.html',
	        controller : 'governmentagreeCtrl',
	        cache		: false
	      }
	    }
	  })
	.state('app.shareagreedsolution', {
	    url: '/shareagreedsolution',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/share-agreed-solution.html',
	        controller : 'shareagreedsolutionCtrl',
	        cache		: false
	      }
	    }
	  })
	.state('app.followup', {
	    url: '/followup',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/follow-up.html',
	        controller : 'followupCtrl'
	      }
	    }
	  })
	.state('app.witnessimplementation', {
	    url: '/witnessimplementation',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/witness-implementation.html',
	        controller : 'witnessimplementationCtrl'
	      }
	    }
	  })
	.state('app.changestory', {
	    url: '/changestory',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/change-story.html',
	        controller : 'changestoryCtrl'
	      }
	    }
	  })
	.state('app.invitefriends', {
	    url: '/invitefriends',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/invite-friends.html',
	        controller : 'collaboratorCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.collaborations', {
	    url: '/collaborations',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/collaborations.html',
	        controller : 'collaboratorlistCtrl'
	      }
	    }
	  })
	.state('app.chat', {
	    url: '/chat',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/chat.html',
	        controller : 'chatMenuCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.viewchat', {
	    url: '/viewchat/:sender_id/:receiver_id',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/view-chat.html',
	        controller : 'chatCtrl',
	        cache	   : false
	      }
	    }
	  })

	.state('app.ContactsUs', {
	    url: '/ContactsUs',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/ContactsUs.html',
	        controller : 'ContactsUsCtrl',
	        cache	   : false
	      }
	    }
	  })

	.state('app.Requestinfo', {
	    url: '/Requestinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/Requestinfo.html',
	        controller : 'RequestinfoCtrl',
	        cache	   : false
	      }
	    }
		})
		.state('app.regionvbhagirath', {
	    url: '/RegionV',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionvbhagirath.html'
	       
	      }
	    }
		})
		
		.state('app.regionviibhagirath', {
	    url: '/RegionVII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionviibhagirath.html'
	       
	      }
	    }
	  })
		.state('app.keyofficialsavani', {
	    url: '/Key Officials',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/keyofficials_avani.html'
	       
	      }
	    }
	  })
		.state('app.ncravani', {
	    url: '/NCR',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/ncravani.html'
	       
	      }
	    }
	  })
	.state('app.caravani', {
	    url: '/CAR',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/caravani.html'
	       
	      }
	    }
	  })
	.state('app.regionimegha', {
	    url: '/RegionI',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionimegha.html'
	       
	      }
	    }
	  })
	.state('app.regioniimegha', {
	    url: '/RegionII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regioniimegha.html'
	       
	      }
	    }
	  })
	.state('app.regioniiimegha', {
	    url: '/RegionIII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regioniiimegha.html'
	       
	      }
	    }
	  })
	.state('app.regionivamegha', {
	    url: '/RegionIV-A',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionivamegha.html'
	       
	      }
	    }
	  })
	.state('app.regionivbmegha', {
	    url: '/RegionIV-B',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionivbmegha.html'
	       
	      }
	    }
	  })

	.state('app.regionvibhagirath', {
	    url: '/RegionVI',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionvibhagirath.html'
	       
	      }
	    }
	  })
	
	.state('app.regionviiibhagirath', {
	    url: '/RegionVIII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionviiibhagirath.html'
	       
	      }
	    }
	  })

	.state('app.regionixparas', {
	    url: '/RegionIX',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionixparas.html'
	       
	      }
	    }
	  })
	.state('app.regionxparas', {
	    url: '/RegionX',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionxparas.html'
	       
	      }
	    }
	  })
	.state('app.regionxiparas', {
	    url: '/RegionXI',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionxiparas.html'
	       
	      }
	    }
	  })
	.state('app.regionxiiparas', {
	    url: '/RegionXII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionxiiparas.html'
	       
	      }
	    }
	  })
	.state('app.regionxiiiparas', {
	    url: '/RegionXIII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionxiiiparas.html'
	       
	      }
	    }
	  })
	.state('app.officeofthesecretarygautam', {
	    url: '/RegionXIII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/officeofthesecretarygautam.html'
	       
	      }
	    }
	  })
	.state('app.curriculumandinstructiongautam', {
	    url: '/Curriculum and Instruction',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/curriculumandinstructiongautam.html'
	       
	      }
	    }
	  })
	.state('app.governanceandoperationsgautam', {
	    url: '/Governance and Operations',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/governanceandoperationsgautam.html'
	       
	      }
	    }
	  })
	.state('app.financeandadministrationgautam', {
	    url: '/Finance and Administration',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/financeandadministrationgautam.html'
	       
	      }
	    }
	  })
	.state('app.legalandlegislativeaffairsgautam', {
	    url: '/Legal and Legislative Affairs',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/legalandlegislativeaffairsgautam.html'
	       
	      }
	    }
	  })
	.state('app.strategicmanagementmayur', {
	    url: '/Strategic Management',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/strategicmanagementmayur.html'
	       
	      }
	    }
	  })
	.state('app.regionalofficesmayur', {
	    url: '/Regional Offices',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionalofficesmayur.html'
	       
	      }
	    }
	  })
	.state('app.regionig', {
	    url: '/Region I',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionig.html'
	       
	      }
	    }
	  })
	.state('app.regioniig', {
	    url: '/Region II',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regioniig.html'
	       
	      }
	    }
	  })
	.state('app.regioniiig', {
	    url: '/Region III',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regioniiig.html'
	       
	      }
	    }
	  })
	.state('app.regionivag', {
	    url: '/Region IV-A (CALABARZON)',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionivag.html'
	       
	      }
	    }
	  })
	.state('app.regionivbshreya', {
	    url: '/Region IV-B (MIMAROPA)',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionivbshreya.html'
	       
	      }
	    }
	  })
	.state('app.regionvshreya', {
	    url: '/Region V',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionvshreya.html'
	       
	      }
	    }
	  })
	.state('app.regionvishreya', {
	    url: '/Region VI',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionvishreya.html'
	       
	      }
	    }
	  })
	.state('app.regionviishreya', {
	    url: '/Region VII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionviishreya.html'
	       
	      }
	    }
	  })
	.state('app.regionviiishreya', {
	    url: '/Region VIII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionviiishreya.html'
	       
	      }
	    }
	  })
	.state('app.regionixbhavika', {
	    url: '/Region IX',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionixbhavika.html'
	       
	      }
	    }
	  })
	.state('app.regionxbhvaika', {
	    url: '/Region X',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionxbhvaika.html'
	       
	      }
	    }
	  })
	.state('app.regionxibhavika', {
	    url: '/Region XI',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionxibhavika.html'
	       
	      }
	    }
	  })
	.state('app.regionxiibhavika', {
	    url: '/Region XII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionxiibhavika.html'
	       
	      }
	    }
	  })
	.state('app.regionxiiibhvaika', {
	    url: '/Region XIII',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/regionxiiibhvaika.html'
	       
	      }
	    }
	  })
	.state('app.cardisha', {
	    url: '/CAR',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cardisha.html'
	       
	      }
	    }
	  })
	.state('app.ncrdisha', {
	    url: '/NCR',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/ncrdisha.html'
	       
	      }
	    }
	  })
	.state('app.armmdisha', {
	    url: '/ARMM',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/armmdisha.html'
	       
	      }
	    }
	  })
  	.state('app.executivecommittee', {
      url: '/executivecommittee',
      views: {
        'menuContent': {
          templateUrl: 'templates/executivecommittee.html'
        }
	}
			
    });
  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/home');
   $urlRouterProvider.otherwise(function($injector, $location, $rootScope,$ionicLoading){
    var state = $injector.get('$state');
    var $rootScope = $injector.get("$rootScope");
    var $ionicLoading = $injector.get("$ionicLoading");
       if(localStorage.getItem("loggedin") == 'true') {
		        state.go('app.dashboard');
		      }else{
		        state.go('home');
		      }
		    return $location.path();
		});
});