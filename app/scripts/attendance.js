"use strict";
angular.module("attendance",['ngMaterial','ui.router'])
 .config(['$locationProvider','$stateProvider','$urlRouterProvider',function($locationProvider,$stateProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/home");
        
        $stateProvider.state('studentForm',{
            url:"/studentForm",
            templateUrl: '/app/views/studentForm.html',
            controller:"studentFormCtrl"
        }).state("studentTable",{
            url:"/studentTable",
            templateUrl:'/app/views/studentTable.html',
            controller:"studentTableCtrl"
        }).state("error",{
            url:"/error",
            template:"<h1>page not found</h1>"
        }).state("home",{
            url:"/home",
            template:"<h1>Home page found</h1>"
        });
       
    }]);