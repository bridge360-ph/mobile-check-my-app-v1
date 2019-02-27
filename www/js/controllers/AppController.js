angular.module('cmsapp.AppCtrl', ['ionic-monthpicker'])

.controller('AppCtrl', function($scope,$rootScope,$state, $ionicModal, $timeout
              ,$ionicPopup,$ionicLoading,deleteAccountService,MonthPicker) 
{

  
  $scope.delete_account = function(){

		 var confirmPopup = $ionicPopup.confirm({
            title: 'Confirmation',
            template: 'Are You Sure You Want Delete Account Permanently ?',
            buttons: [{ 
              text: 'Delete',
               type: 'button-positive',
              onTap: function(e) {
              	$scope.delete();
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
	}  
	$scope.delete=function(){
		var tmp = {
			user_id : localStorage.getItem('user_id')
		};
		
		deleteAccountService.delete(tmp).then(function(response){	
			$ionicLoading.hide();
			var alertPopup = $ionicPopup.alert({
		           title: response.success == 'true' ? 'Success' : 'Fail',
		           template: response.message,
		           cssClass:"messagePopup"
		         });
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
	
})

.controller('dashboardCtrl', function($scope,profileService,$rootScope,$state, $ionicModal, $timeout
							,$window,$ionicPopup,$ionicLoading,deleteAccountService,getRatingService, $filter,$cordovaInAppBrowser) {
	
 $scope.options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true 
      }
    }]
  }
};
    var date = new Date();
    $scope.current = date.getFullYear();
    var start = $scope.current - 10;  // Minus 10 years from current year 
    var end = $scope.current;  // Plus 10 years to current year
    $scope.yearArray = [];
    $scope.yearmonth = [];
    $scope.monthArray = [];
    var mo = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    

    for(var i=0;i<=mo.length-1;i++)
    {
      var array = {id:i+1,name:mo[i]}
        $scope.monthArray.push(array);
       
    }
  
    for(var i=start;i<=end;i++)
    {
        $scope.yearmonth.push(i);
    }
    for(var i=start;i<=end;i++)
    {
        $scope.yearArray.push(i);
    }
    $scope.series = ['Series A'];
		
       
    var date = new Date();
    $scope.datetimeValue = $filter('date')(new Date(), 'dd/MM/yyyy');
    $scope.datetimeValuedate = $filter('date')(new Date(), 'dd/MM/yyyy');

    $scope.call_rating = function(dateto,value){
    
      if(value == 1)
      {
        $scope.datetimeValuedate = $filter('date')(dateto, 'dd/MM/yyyy');
      }
      else if(value == 3)
      {
        $scope.datetimeValueyear = dateto;
      }
      else
      {
        $scope.datetimeValue = $filter('date')(dateto, 'dd/MM/yyyy');
      }
      
      $scope.load(value);
    }


  $scope.load = function(vdata){

    $scope.data = {
      month:'',
      year:'',
      user_id:localStorage.getItem('user_id')
    }
    
    if(vdata == 1)
    {
      $scope.datedata = $scope.datetimeValuedate.split('/');
      $scope.data.month = $scope.datedata[1];
      $scope.data.year = $scope.datedata[2];
    }
    
    else
    {
      $scope.datedata = $scope.datetimeValue.split('/');
      
      $scope.data.month = $scope.datedata[1];
      $scope.data.year = $scope.datedata[2];
    }
    // $scope.datedata = $scope.datetimeValue.split('/');
   

    var dateone = $scope.datedata[0];
    var monthone = $scope.datedata[1];
    var yearone = $scope.datedata[2];
    
    var d = dateone.substring(0,1);
    
    if(d == 0)
    {
      dateone = dateone.substring(1,2);
    
    }
    // if (!$rootScope.IsNetworkConntection) {
        $rootScope.loadingOn();
        getRatingService.getRating($scope.data).then(function(response){
        
        	$scope.resData = response.data.date_wise_rating;
        
        	$scope.labels1=[];
        	$scope.data1=[]; 
          for (var i = 0; i < $scope.resData.length; i++) 
          {
            $scope.sample = $scope.resData[i].date.split('-');
            if(vdata == 1)
            {
                if(dateone == $scope.sample[0] && monthone == $scope.sample[1] && yearone == $scope.sample[2])
                {
                
                  $scope.labels1.push($scope.resData[i].date);
                  $scope.data1.push($scope.resData[i].rating);
                }
                
            }
            else if(vdata == 2)
            {
              if(monthone == $scope.sample[1] && yearone == $scope.sample[2])
              {
              
                $scope.labels1.push($scope.resData[i].date);
                $scope.data1.push($scope.resData[i].rating);
              }
              
            }
        	}
        
          $rootScope.loadingOff();
        })
      // }
  }

  $scope.selectyear = function(Select)
  {
    if(Select != undefined)
    {
      $scope.call_rating_year(Select);
    }
    else
    {
    }
  }
  $scope.call_rating_year = function(Select)
  {
    $scope.labels1=[];
    $scope.data1=[]; 
    $scope.data12 = {
      year:Select,
      user_id:localStorage.getItem('user_id')
    }
    getRatingService.getRatingYear($scope.data12).then(function(response){
      $scope.resData = response.data.month_wise_rating;
    
      for (var i = 0; i < $scope.resData.length; i++) 
      {
        $scope.labels1.push($scope.resData[i].month);
        $scope.data1.push($scope.resData[i].rating);
      }
    })
  }

  $scope.selectmonth = function(Select,value,find)
    {
     
      if(Select != undefined)
      {
        if(Select.length == 1)
        {
            Select = 0+Select;
        }
        if(find == 'month')
        {
          $scope.monthfind = Select;
        }
        else if(find == 'year')
        {
          $scope.yearfind = Select;
        }
        if($scope.monthfind != undefined &&  $scope.yearfind != undefined)
        {
          
          $scope.call_rating_month($scope.monthfind,$scope.yearfind);
        }
        else
        {
        }
      }
      else
      {
      }
    }

    $scope.call_rating_month = function(month,year)
    {
      $scope.labels1=[];
      $scope.data1=[]; 
      $scope.datamonth = {
        month:month,
        year:year,
        user_id:localStorage.getItem('user_id')
      }
      getRatingService.getRating($scope.datamonth).then(function(response){
        $scope.resData = response.data.date_wise_rating;
      
        $scope.labels1=[];
        $scope.data1=[]; 
        $scope.resData = response.data.date_wise_rating;
      
        for (var i = 0; i < $scope.resData.length; i++) 
        {
          $scope.labels1.push($scope.resData[i].date);
          $scope.data1.push($scope.resData[i].rating);
        }

      })
    }


  $scope.load(2);
  $scope.weburl = function()
  {
    $cordovaInAppBrowser.open('http://www.checkmyschool.org/', '_blank').then(function(event) {
    }).catch(function(event) {});
  }
  $scope.videourl = function()
  {
    $cordovaInAppBrowser.open($scope.app_video, '_blank').then(function(event) {
    }).catch(function(event) {}); 
  }
  $scope.load_profile = function(){
      var dataTosend = {
        user_id : localStorage.getItem('user_id')
      } 
      profileService.getProfile(dataTosend).then(function(response){
        $scope.data = response.data.response;
        $scope.app_video = response.data.app_video;
      })
  }

  $scope.load_profile();
 
  $scope.button=function(btn){
          if (btn == 1) {
              $rootScope.buttonDisabled = false; //true
          }else{
            $rootScope.buttonDisabled = false;
          }
  }
});