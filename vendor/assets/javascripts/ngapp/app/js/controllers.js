'use strict';

/* Controllers */
var whiskiesListApp = angular.module('whiskiesListApp', []);

whiskiesListApp.controller('WhiskiesCtrl', function ($scope, $http) {

    $http.get('whiskies/list').success(function(data) {
        $scope.data = data;
    });

});