angular.module('cmsapp.ContactsUsCtrl', [])

.controller('ContactsUsCtrl', function($scope, $stateParams,feedbackService,
                                    $ionicLoading,$rootScope,$ionicPopup,$state,$timeout) {
		$scope.show = false;
    //$scope.data.type_of_concern = 'Query';
    $scope.data=
    {
      user_name:'',
      email_id:'',
      subject:'',
      type_of_concern:'Query',
      message:'',
    }
		

    $scope.groups = [
  {
    "id": 1,
    "name": "Department of Education",
    
    "childItems": [
      {
        "childName": "Central Office",
        "grandChildren": [
          {
            "grandChildName": "Executive Committee",
            "id": 1
          },
          {
            "grandChildName": "Office of the Secretary",
            "id": 2
          },
          {
            "grandChildName": "Curriculum and Instruction",
            "id": 3
          },
          {
            "grandChildName": "Governance and Operations",
            "id": 4
          },
          {
            "grandChildName": "Finance and Administration",
            "id": 5
          },
          {
            "grandChildName": "Legal and Legislative Affairs",
            "id": 6
          },
          {
            "grandChildName": "Strategic Management",
            "id": 7
          }
        ]
      },
      {
        "childName": "Regional Offices",
        "grandChildren": [
          {
            "grandChildName": "Regional Offices (I to NCR)",
            "id": 8           
          }
        ]
      },
      {
        "childName": "Division Offices",
        "grandChildren": [
          {
            "grandChildName": "Region I",
            "id": 9
          },
          {
            "grandChildName": "Region II",
            "id": 10
          },
          {
            "grandChildName": "Region III",
            "id": 11
          },
          {
            "grandChildName": "Region IV-A (CALABARZON)",
            "id": 12
          },
          {
            "grandChildName": "Region IV-B (MIMAROPA)",
            "id": 13
          },
          {
            "grandChildName": "Region V",
            "id": 14
          },
          {
            "grandChildName": "Region VI",
            "id": 15
          },
          {
            "grandChildName": "Region VII",
            "id": 16
          },
          {
            "grandChildName": "Region VIII",
            "id": 17
          },
          {
            "grandChildName": "Region IX",
            "id": 18
          },
          {
            "grandChildName": "Region X",
            "id": 19
          },
          {
            "grandChildName": "Region XI",
            "id": 20
          },
          {
            "grandChildName": "Region XII",
            "id": 21
          },
          {
            "grandChildName": "Region XIII (CARAGA)",
            "id": 22
          },
          {
            "grandChildName": "CAR",
            "id": 23
          },
          {
            "grandChildName": "NCR",
            "id": 24
          },
          {
            "grandChildName": "ARMM",
            "id": 25
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Department of Public Works and Highways Central Office",
    
    "childItems": [
      {
        "childName": "DIRECTORY",
        "grandChildren": [
          {
            "grandChildName": "Key Officials",
            "id": 26
          },
          {
            "grandChildName": "NCR",
            "id": 27
          },
          {
            "grandChildName": "CAR",
            "id": 28
          },
          {
            "grandChildName": "Region I",
            "id": 29
          },
          {
            "grandChildName": "Region II",
            "id": 30
          },
          {
            "grandChildName": "Region III",
            "id": 31
          },
          {
            "grandChildName": "Region IV-A",
            "id": 32
          },
          {
            "grandChildName": "Region IV-B",
            "id": 33
          },
          {
            "grandChildName": "Region V",
            "id": 34
          },
          {
            "grandChildName": "Region VI",
            "id": 35
          },
          {
            "grandChildName": "Region VII",
            "id": 36
          },
          {
            "grandChildName": "Region VIII",
            "id": 37
          },
          {
            "grandChildName": "Region IX",
            "id": 38
          },
          {
            "grandChildName": "Region X",
            "id": 39
          },
          {
            "grandChildName": "Region XI",
            "id": 40
          },
          {
            "grandChildName": "Region XII",
            "id": 41
          },
          {
            "grandChildName": "Region XIII",
            "id": 42
          }
        ]
      }
    ]
  }
];
  
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
    // $ionicScrollDelegate.resize();
  }

  $scope.toggleSubGroup = function(item) {
    if ($scope.isSubGroupShown(item)) {
      $scope.shownChild = null;
    } else {
      $scope.shownChild = item;
    }
    // $ionicScrollDelegate.resize();
  }

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  }

  $scope.isSubGroupShown = function(item) {
    return $scope.shownChild === item;
  }









		$scope.init = function () 
		{

        $scope.groups2 = [];
        $scope.groups2 = 
        [
            { name: 'Department of Education', 
              id: 1, 
              items: 
                [
                  { subName: 'SubBubbles1', 
                    subId: 'Central Office:',
                    url:'http://www.deped.gov.ph/directory',
                    i:
                    [{
                      as:"s"
                    }]
                  }, 

                  { subName: 'SubBubbles2', 
                    subId: 'Regional Offices:',
                    url:'http://www.deped.gov.ph/directory/regional-offices'
                  },

                  { subName: 'SubBubbles2', 
                    subId: 'Division Offices:',
                    url:'http://www.deped.gov.ph/directory/division-offices'
                  }

              ]},

            { name: 'Department of Public Works and Highways Central Office', 
              id: 2, 
              items: 
                [{ subName: 'SubGrup1', 
                    url: 'http://www.dpwh.gov.ph/dpwh/directory/index'}
                ]}
        ];

  	};

    $scope.toggleGroup2 = function(group2) 
    {
      console.log(group2);
      if ($scope.isGroupShown2(group2)) 
      {
          $scope.shownGroup2 = null;
          console.log("if");
      }
      else
      {
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
  		$scope.feedback=function(form)
  		{

        console.log($scope.data.user_name);
        console.log($scope.data.email_id);
        console.log($scope.data.subject);
        console.log($scope.data.type_of_concern);
        console.log($scope.data.message);
  			$scope.submitted=true;
        console.log(form);
  			if(form.$valid)
  			{
           $rootScope.loadingOn();
  				var data = {
                user_id   : localStorage.getItem('user_id'),
                user_name:$scope.data.user_name,
                email_id:$scope.data.email_id,
                subject:$scope.data.subject,
                type_of_concern:$scope.data.type_of_concern,
                message:$scope.data.message
               
            };
            feedbackService.feedback(data).then(function(response){
              console.log(response);
             
                var alertPopup = $ionicPopup.alert({
                   title: response.data.success == 'true' ? 'Success' : 'Fail',
                   template: response.data.message,
                   cssClass:"messagePopup"
                 });
                 $timeout(function() {
                      alertPopup.close(); //close the popup after 3 seconds for some reason
                  }, 2000);

                  if (response.data.success == 'true') 
                  {
                      // alertPopup.then(function(){});
                       $timeout(function() {
                      $scope.data=
                      {
                          user_name:'',
                          email_id:'',
                          subject:'',
                          type_of_concern:'Query',
                          message:'',
                      }
                      $scope.submitted=false;
                      // $scope.reload();
                      }, 3000);
                  }
                   $rootScope.loadingOff();
            })
  			}
      }
      

      $scope.SwitchFuction = function (id) 
      {
        console.log("asd" + id);
        switch (id)
        {
            case 1:
                console.log("Executive Committee");
                $state.go('app.executivecommittee');
                break;
            case 2:
                console.log("Office of the Secretary");
                $state.go('app.officeofthesecretarygautam');
                break;
            case 3:
                console.log("Executive Committee");
                $state.go('app.curriculumandinstructiongautam');
                break;
            case 4:
                console.log("Office of the Secretary");
                $state.go('app.governanceandoperationsgautam');
                break;
            case 5:
                console.log("Executive Committee");
                $state.go('app.financeandadministrationgautam');
                break;
            case 6:
                console.log("Office of the Secretary");
                $state.go('app.legalandlegislativeaffairsgautam');
                break;
            case 7:
                console.log("Executive Committee");
                $state.go('app.strategicmanagementmayur');
                break;
            case 8:
                console.log("Office of the Secretary");
                $state.go('app.regionalofficesmayur');
                break;
            case 9:
                console.log("Executive Committee");
                $state.go('app.regionig');
                break;
            case 10:
                console.log("Office of the Secretary");
                $state.go('app.regioniig');
                break;
            case 11:
                console.log("Executive Committee");
                $state.go('app.regioniiig');
                break;
            case 12:
                console.log("Office of the Secretary");
                $state.go('app.regionivag');
                break;
            case 13:
                console.log("Executive Committee");
                $state.go('app.regionivbshreya');
                break;
            case 14:
                console.log("Office of the Secretary");
                $state.go('app.regionvshreya');
                break;
            case 15:
                console.log("Executive Committee");
                $state.go('app.regionvishreya');
                break;
            case 16:
                console.log("Office of the Secretary");
                $state.go('app.regionviishreya');
                break;
            case 17:
                console.log("Executive Committee");
                $state.go('app.regionviiishreya');
                break;
            case 18:
                console.log("Office of the Secretary");
                $state.go('app.regionixbhavika');
                break;
            case 19:
                console.log("Executive Committee");
                $state.go('app.regionxbhvaika');
                break;
            case 20:
                console.log("Office of the Secretary");
                $state.go('app.regionxibhavika');
                break;
            case 21:
                console.log("Executive Committee");
                $state.go('app.regionxiibhavika');
                break;
            case 22:
                console.log("Office of the Secretary");
                $state.go('app.regionxiiibhvaika');
                break;
            case 23:
                console.log("Executive Committee");
                $state.go('app.cardisha');
                break;
            case 24:
                console.log("Office of the Secretary");
                $state.go('app.ncrdisha');
                break;
            case 25:
                console.log("Executive Committee");
                $state.go('app.armmdisha');
                break;
            case 26:
                console.log("Office of the Secretary");
                $state.go('app.keyofficialsavani');
                break;
            case 27:
                console.log("Executive Committee");
                $state.go('app.ncravani');
                break;
            case 28:
                console.log("Office of the Secretary");
                $state.go('app.caravani');
                break;
            case 29:
                console.log("Executive Committee");
                $state.go('app.regionimegha');
                break;
            case 30:
                console.log("Office of the Secretary");
                $state.go('app.regioniimegha');
                break;
            case 31:
                console.log("Executive Committee");
                $state.go('app.regioniiimegha');
                break;
            case 32:
                console.log("Office of the Secretary");
                $state.go('app.regionivamegha');
                break;
            case 33:
                console.log("Executive Committee");
                $state.go('app.regionivbmegha');
                break;
            case 34:
                console.log("Office of the Secretary");
                $state.go('app.regionvbhagirath');
                break;
            case 35:
                console.log("Executive Committee");
                $state.go('app.regionvibhagirath');
                break;
            case 36:
                console.log("Office of the Secretary");
                $state.go('app.regionviibhagirath');
                break;
            case 37:
                console.log("Executive Committee");
                $state.go('app.regionviiibhagirath');
                break;
            case 38:
                console.log("Office of the Secretary");
                $state.go('app.regionixparas');
                break;
            case 39:
                console.log("Executive Committee");
                $state.go('app.regionxparas');
                break;
            case 40:
                console.log("Office of the Secretary");
                $state.go('app.regionxiparas');
                break;
            case 41:
                console.log("Executive Committee");
                $state.go('app.regionxiiparas');
                break;
            case 42:
                console.log("Office of the Secretary");
                $state.go('app.regionxiiiparas');
                break;

        }
      }
});