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


.controller("weatherCtrl", function($http) {

  var self = this;

  self.searchQuery;

  var holder;
  var thang;
  // navigator.geolocation.getCurrentPosition(function (geopos) {
  //   var lat = geopos.coords.latitude;
  //   var long = geopos.coords.longitude;

    // api for forecast.io
    // var apikey = '409982af42c889e99a89fb0f56fa8d13';

    //var apikey = '9231b583bbcd9494';

    var ip = "http://api.wunderground.com/api/f0f91718263c9ba6/conditions/geolookup/q/autoip.json";

    //var weather = "http://api.wunderground.com/api/f0f91718263c9ba6/conditions/q/CA/San_Francisco.json"

    var url = "http://api.wunderground.com/api/f0f91718263c9ba6/conditions/forecast/q/";

    // var that = this;


    $http.get(ip)
    .then(function(res) {
      console.log("result from ip ", res);
      console.log(res.data);

      var lat = res.data.location.lat;
      console.log("lat", lat);

      var lon = res.data.location.lon;
      console.log("lon", lon);

      // console.log("url", url);

      self.weath = res.data.current_observation;
      console.log("self.weath", self.weath);
    })



    self.search = function() {

      var stationArray = [];

      $http.get(url + self.searchQuery + ".json")
        .then(function(res) {
          console.log("res", res);
          self.weath = res.data.current_observation;
          return res;
        })
         
          //adds search criteria to local storage
        .then(function(holder) {
          console.log("holder", holder);
          console.log(holder.data.current_observation.station_id);
          //var thang = holder.data.current_observation.station_id;

          stationArray = JSON.parse(localStorage.getItem("searchHistory"));
          thang = holder.data.current_observation.station_id;
          stationArray.push(thang);

          localStorage.setItem('searchHistory', JSON.stringify(stationArray));



          

        })

        

        

        






      // add searchHistory as an array
      // only add unique values

    }

  })



// home.doSearch = function () {
//    console.log("Search Dat Weather");
//    $http.get(url + 'conditions/forecast/q/' + home.search + '.json').then(function (response) {
//      console.log("searchData", response);
//    });
//  }





  
    