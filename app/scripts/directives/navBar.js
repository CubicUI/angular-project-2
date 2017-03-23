"use strict";
angular.module("attendance").directive("navBar",[function(){
    return{
        restrict:"EA",
        //templateUrl:"/app/views/navBar.html",
        templateUrl:"/app/views/routingNav.html",
        controller:"navBarCtrl"
    }
}]);