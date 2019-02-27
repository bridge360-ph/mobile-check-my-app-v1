angular.module('cmsapp.chatservices', [])
.factory('chatservices', function($http, $q, $rootScope, $ionicLoading, $ionicPopup,Constants){

  return{

    list_message: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['list_message_url'],
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
          data:data1})
      .success(function (response) {
          console.log(response);
          deffered.resolve(response);
      }).error(function (response) {
          console.log(response);
          deffered.resolve(response);
      });
      return deffered.promise;
  },
  view_messages: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['view_message_url'],
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
          data:data1})
      .success(function (response) {
          console.log(response);
          deffered.resolve(response);
      }).error(function (response) {
          console.log(response);
          deffered.resolve(response);
      });
      return deffered.promise;
  },
  get_all_user_list: function(data1){
    var deffered = $q.defer();
   $http({
       url:Constants.API_URL['get_all_user_list'],
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
       data:data1})
   .success(function (response) {
       deffered.resolve(response);
   }).error(function (response) {
       deffered.resolve(response);
   });
   return deffered.promise;
},
  send_message: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['send_message_url'],
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
          data:data1})
      .success(function (response) {
          console.log(response);
          deffered.resolve(response);
      }).error(function (response) {
          console.log(response);
          deffered.resolve(response);
      });
      return deffered.promise;
  },
    delete_message: function(tmp){
     // console.log("asdasd");
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['delete_message_url'],
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
          data:tmp})
      .success(function (response) {
          console.log(response);
          deffered.resolve(response);
      }).error(function (response) {
          console.log(response);
          deffered.resolve(response);
      });
      return deffered.promise;
  },
  receiver_token: function(tmp){
     // console.log("asdasd");
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['receiver_token_url'],
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
          data:tmp})
      .success(function (response) {
          console.log(response);
          deffered.resolve(response);
      }).error(function (response) {
          console.log(response);
          deffered.resolve(response);
      });
      return deffered.promise;
  }
}
});