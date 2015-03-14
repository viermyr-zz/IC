// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.controller('MainCtrl', function($scope){
  // DEFINE VARIABLES
  var doorOpened = true;

  // Called when "DENY FACE" button is clicked
  $scope.closeApp = function() {
    alert("Close the application");
    
  };

  // Called when "OPEN DOOR" button is clicked
  $scope.openDoor = function() {
    if(doorOpened)
      alert("Door open");
  };

  // Called when "TALK" button is clicked
  $scope.establishCommunication = function() {
    alert("Start communication with the visitor");

  };
});


