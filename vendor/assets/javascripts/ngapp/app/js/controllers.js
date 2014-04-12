'use strict';

/* Controllers */
var whiskiesListApp = angular.module('whiskiesListApp', []);

whiskiesListApp.config(
    ["$httpProvider", 
        function($httpProvider) {
            $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        }
    ]
);

whiskiesListApp.controller('WhiskiesCtrl', function ($scope, $http) {

    $http.get('whiskies/list').success(function(data) {
        $scope.data = data;
    });

});

whiskiesListApp.controller('WhiskiesNewCtrl', function ($scope, $http, $window) {
    $scope.Create = function() {
        $http.post('/whiskies', {'name': $scope.name, 'price': $scope.price}
        ).success(function(data, status, headers, config) {
            $window.location.href = '/'
        }).error(function(data, status) {
            console.log('error:' + status);
        });
    }
});