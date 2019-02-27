angular.module('cmsapp.mandatedlistServices', [])
.factory('mandatedlistServices', function($http, $q, $rootScope,Constants){

  return{
    get_service_category_byItem: function(){
     return $http({
          url:Constants.API_URL['categoryWithItem_url'],
          method: "POST",
          headers: {
                    'Content-Type': Constants.API_HEADERS['content_type']
                },
          transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        }
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
  get_issue_byId: function(data1){
     return $http({
          url:Constants.API_URL['IssueTypeWithIssue_url'],
          method: "POST",
          headers: {
                    'Content-Type': Constants.API_HEADERS['content_type']
                },
          transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        },
                        data : data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
  view_mandated_analysis: function(data1){
     return $http({
          url:Constants.API_URL['view_mandated_ana_url'],
          method: "POST",
          headers: {
                    'Content-Type': Constants.API_HEADERS['content_type']
                },
          transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        },
          data : data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
      sendothertext: function(data1){
        return $http({
            url:Constants.API_URL['mandate_save_specific_concern'],
            method: "POST",
            headers: {
                      'Content-Type': Constants.API_HEADERS['content_type']
                  },
            transformRequest: function(obj) {
                              var str = [];
                              for(var p in obj)
                                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                              return str.join("&");
                          },
            data : data1
            }).success(function (response) {
              console.log(response);
          }).error(function (response) {
              console.log(response);
          });
      }
  }
  
  
});