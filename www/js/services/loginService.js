angular.module('cmsapp.loginservices', [])
.factory('Registration', function($http, $q, $rootScope, $ionicLoading, $ionicPopup,Constants){

  return{

    RegisterUser: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['register_url'],
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
  }
}
})
.factory('Login', function($http, $q, $rootScope, $ionicLoading, $ionicPopup,Constants){

  return{

    LoginUser: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['login_url'],
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
   valid_user: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['valid_user_url'],
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
  logout: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['logout_url'],
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
  }
}
})
.factory('ResetPasswordService', function($http, $q, $rootScope, $ionicLoading, $ionicPopup,Constants){

  return{

    sendEmail: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['reset_password_url'],
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

     resetpassword_data: function(data1){
         var deffered = $q.defer();
        $http({
            url:Constants.API_URL['resetpassword_data_url'],
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
    }
  }
})
.factory('VerifyCodeService', function($http, $q, $rootScope, $ionicLoading, $ionicPopup,Constants){

  return{

    verify: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['verifycode_url'],
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
  resendcode: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['resend_verify_code_url'],
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
  }
}
})
.factory('ChangePwdService', function($http, $q, $rootScope, $ionicLoading, $ionicPopup,Constants){

  return{

    change: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['change_password_url'],
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
  }
}
})
// for delete Account permanentaly
.factory('deleteAccountService', function($http, $q, $rootScope, $ionicLoading, $ionicPopup,Constants){

  return{

    delete: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['deleteAccount_url'],
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
  }
}
})