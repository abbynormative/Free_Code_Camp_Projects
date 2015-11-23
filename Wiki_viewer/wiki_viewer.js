'use strict';


angular.module('myApp', ['ngSanitize'])
  .controller('WikiViewer', function($scope,$sce, $http) {
    
    var searchString;
    var searchURL;
    var linktitles = [];
    $scope.name = "";
    $scope.name = $scope.name;
  // Whenever the button is clicked, this method is run.
  // It then stores the name in the searchString defined above.
  $scope.submitForm = function(name) {
    
    searchString = name.toLowerCase();
    searchString = searchString.replace(/ /g, '%20');
    
    fetch();
  };
  
function fetch(){
  $http({
    //returns list of 10 related pages
    url: 'https://en.wikipedia.org/w/api.php?format=json&callback=JSON_CALLBACK&action=query&list=search&srsearch='+ searchString + '&srwhat=text&srprop=snippet',
    method: 'jsonp'
}).success(function(response) {
   for(var i in response.query.search){
    //create linktitles in response object so you can make correct link for each article
   response.query.search[i]['linktitle'] = response.query.search[i].title.replace(/ /g, '_');
     //add '...' to snippet
     response.query.search[i]['snippet'] = response.query.search[i]['snippet'] + '...';
   }
    
    
    $scope.articles = response.query.search;
    
    console.log(response);
});
}    
    
});
