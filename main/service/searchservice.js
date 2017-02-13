'use strict';
var serviceApp = angular.module('search');
console.log('service file');
serviceApp.factory('searchservice',searchservice);
serviceApp.inject = ['$http','$location'];
function searchservice($http, $location){
    return{
        searchElastic:searchElastic
    };
    
    function searchElastic(criteria){
        console.log('schrondgers cat'+criteria.friends);
        console.log($location.absUrl());
        var req = {
                    method: 'POST',
                    url: $location.absUrl()+'getSearchResults',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    data: { criteria: criteria }
                    };
        console.log(req);
        return $http(req);
    };

}