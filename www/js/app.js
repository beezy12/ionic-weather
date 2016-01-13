// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller("weatherCtrl", function($http, $scope) {

  var self = this;


  // navigator.geolocation.getCurrentPosition(function (geopos) {
  //   var lat = geopos.coords.latitude;
  //   var long = geopos.coords.longitude;

    // api for forecast.io
    // var apikey = '409982af42c889e99a89fb0f56fa8d13';

    //var apikey = '9231b583bbcd9494';

    //var ip = "http://api.wunderground.com/api/f0f91718263c9ba6/conditions/geolookup/q/autoip.json";

    //var weather = "http://api.wunderground.com/api/f0f91718263c9ba6/conditions/q/CA/San_Francisco.json"

    //var url = "http://api.wunderground.com/api/f0f91718263c9ba6/geolookup/q/37.776289,-122.395234.json";

    // var that = this;


    $http.get("http://api.wunderground.com/api/f0f91718263c9ba6/forecast/conditions/geolookup/q/autoip.json")
    .then(function(res) {
      console.log("result from ip ", res);
      console.log(res.data);

      var lat = res.data.location.lat;
      console.log("lat", lat);

      var lon = res.data.location.lon;
      console.log("lon", lon);

      self.weath = res.data.current_observation;
      console.log("self.weath", self.weath);



        // $http.get("http://api.wunderground.com/api/f0f91718263c9ba6/conditions/q/" + lat + lon + ".json")
        // .then(function(weath) {
        //   console.log("weath", weath);


    })
  //});
  })
  //weather.temp = "--"





// .config(function($stateProvider, $urlRouterProvider) {

//   $stateProvider

//   .state('root', {
//     url:'/',
//     template:'<h1>HELLLLLOOOOOO</h1>'
//   });

//   $urlRouterProvider.otherwise('/')



// })
    