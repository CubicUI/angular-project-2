"use strict";
angular.module("attendance",['ngMaterial','ui.router'])

    .config(['$locationProvider','$stateProvider','$urlRouterProvider',function($locationProvider,$stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        
        $stateProvider.state('studentForm',{
            url:"/studentForm",
            templateUrl: '/app/views/studentForm.html',
            controller:"studentFormCtrl"
        }).state("studentTable",{
            url:"/studentTable",
            templateUrl:'/app/views/studentTable.html',
            controller:"studentTableCtrl"
        });
       
    }]);