'use strict';

angular.module('myApp', ['ngSanitize'])
  .controller('CamperStories', function($scope,$sce, $http) {
    var pendingTask;

    if ($scope.search === undefined) {
      $scope.search = "";
      fetch();
    }

    $scope.change = function() {
      if (pendingTask) {
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

    function fetch() {
      $http.get("http://www.freecodecamp.com/news/hot")
        .success(function(response) {
        
          $scope.details = response;
          
          console.log($scope.details[0]);
        
        });

      
    }

   
  });