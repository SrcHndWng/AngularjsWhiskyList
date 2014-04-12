'use strict';

/* jasmine specs for controllers go here */

describe('AngularjsWhiskyList controllers', function() {

    beforeEach(module('whiskiesListApp'));

    describe('WhiskiesCtrl', function(){
        var scope, httpBackend;

        beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            httpBackend.when("GET", "whiskies/list").respond([
                {name:'Laphroaig Quarter Cask', price:49.99},
                {name:'Johnnie Walker Black', price:33.97},
                {name:'Canadian Club', price:19.99}
            ]);
            $controller('WhiskiesCtrl', {
                $scope: scope,
                $http: $http
            });
        }));

        it('should get "data" model', function () {
            httpBackend.flush();
            expect(scope.data.length).toBe(3);
            expect(scope.data[0].name).toBe('Laphroaig Quarter Cask');
            expect(scope.data[0].price).toBe(49.99);
        });
    });

});
