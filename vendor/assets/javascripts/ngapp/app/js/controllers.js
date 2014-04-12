'use strict';

/* Controllers */
var whiskiesListApp = angular.module('whiskiesListApp', []);

whiskiesListApp.config(
    ["$httpProvider", 
        function($httpProvider) {
            var meta = document.getElementsByTagName('meta');
            for (var item in meta) {
                if (meta[item].name == 'csrf-token') {
                    $httpProvider.defaults.headers.common['X-CSRF-Token'] = meta[item].content;
                    break;
                }
            }
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

whiskiesListApp.controller('WhiskiesEditCtrl', function ($scope, $http, $window, $element) {
    $http.get('detail').success(function(data) {
        $scope.data = data;
    }).error(function(data, status) {
        console.log('error:' + status);
    });

    $scope.Update = function(){
        $http.put('/whiskies/' + $scope.data.id, {'name': $scope.data.name, 'price': $scope.data.price}
        ).success(function(data, status, headers, config) {
            if(data.messages == undefined){
                $window.location.href = '/';
            }else{
                var msg = '';
                for(var i = 0; i < data.messages.length; i++){
                    msg += data.messages[i];
                    msg += "\n";
                }
                alert(msg);
            }
        }).error(function(data, status) {
            console.log('error:' + status);
        });
    }
});