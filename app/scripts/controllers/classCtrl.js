"use strict";
angular.module("attendance").controller("classCtrl",["$scope","$http","classService",function($scope,$http,classService){
    var employeeListActive;
    var employeeListAll;
    //Calling service to get class list
    var employeeListPromise = employeeService.getEmployeeList();
    employeeListPromise.then(function(response){
        $scope.employeeListActive = response;
    });
    
    var employeeListPromise2 = employeeService.getEmployeeListAll();
    employeeListPromise.then(function(response){
        $scope.employeeListAll = response;
    });
    
    
}]);