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

whiskiesListApp.controller('WhiskiesCtrl', function ($scope, $http, $window) {
    $http.get('whiskies/list').success(function(data) {
        $scope.data = data;
    });

    $scope.Delete = function(whisky){
        $http.delete('/whiskies/' + whisky.id
        ).success(function(data, status, headers, config) {
            $window.location.href = '/';
        }).error(function(data, status) {
            console.log('error:' + status);
        });
    }
});

whiskiesListApp.controller('WhiskiesNewCtrl', function ($scope, $http, $window) {
    $scope.Create = function() {
        $http.post('/whiskies', {'name': $scope.name, 'price': $scope.price}
        ).success(function(data, status, headers, config) {
            $window.location.href = '/';
        }).error(function(data, status) {
            console.log('error:' + status);
        });
    }
});

whiskiesListApp.controller('WhiskiesEditCtrl', function ($scope, $http, $window) {
    $http.get('detail').success(function(data) {
        $scope.data = data;
    }).error(function(data, status) {
        console.log('error:' + status);
    });

    $scope.Update = function(){
        $http.put('/whiskies/' + $scope.data.id, {'name': $scope.data.name, 'price': $scope.data.price}
        ).success(function(data, status, headers, config) {
            $window.location.href = '/';
        }).error(function(data, status) {
            console.log('error:' + status);
        });
    }
});