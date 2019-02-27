angular.module('cmsapp.schoolServices', [])
.factory('schoolServices', function($http, $q, $rootScope, Constants){

  return{
    addschool: function(data1){
     return $http({
          url:Constants.API_URL['addschool_url'],
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
          data:data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
    getRegions: function(data1){
     return $http({
          url:Constants.API_URL['getRegions_url'],
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
          data:data1
      	  }).success(function (response) {
	          console.log(response);
	      }).error(function (response) {
	          console.log(response);
	      });
  		},
  getDivisons: function(data1){
     return $http({
          url:Constants.API_URL['getDivisons_url'],
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
          data:data1
      	  }).success(function (response) {
	          console.log(response);
	      }).error(function (response) {
	          console.log(response);
	      });
  		},
  getCities: function(data1){
     return $http({
          url:Constants.API_URL['getCities_url'],
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
          data:data1
      	  }).success(function (response) {
	          console.log(response);
	      }).error(function (response) {
	          console.log(response);
	      });
  		},
  getSchool: function(data1){
     return $http({
          url:Constants.API_URL['view_school_url'],
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
          data:data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      }
	}
});