'use strict';
 console.log('1');
var app = angular.module('search',[]);
 
app.controller('searchController',SearchController);
SearchController.inject =['$scope','searchservice'];

function SearchController($scope,searchservice){
   
    var sc = this;
    sc.appName = 'my first search';
    sc.search = search;

    function search(){
        console.log('in search of life');
        var criteria_search ={
                                name:'Pavan',
                                year:2017,
                                friends:['bunga','google','sp']
                            };
            searchservice.searchElastic(criteria_search);                
    };
};


 




