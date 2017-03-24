"use strict";
angular.module("attendance").controller("classCtrl",["$scope","$http","classService",function($scope,$http,classService){
    $scope.classFormModel = {
        title:"",
        active:""
    }
    
    $scope.classListActive;
    $scope.classListAll;
    $scope.classListId;
    
    //Calling service to get class list
    var classListPromise = classService.getClassListActive();
    var classListPromise2 = classService.getClassListAll();
    var classListPromise3 = classService.getClassListId(2);
    
    classListPromise.then(function(response){
        $scope.classListActive = response;
    });
    
    
    classListPromise2.then(function(response){
        $scope.classListAll = response;
    });
    
    classListPromise3.then(function(response){
        $scope.classListId = response;
    });
    
    var sampleTest={
        "title":"test123",
        "active":1
    }
    var classPost = classService.postClass($scope.classFormModel);
    classPost.then(function(response){
        alert("success");
    })
    $scope.classSubmit=function(){
        console.log($scope.classListActive);
        console.log($scope.classListAll);
        console.log($scope.classListId);
    }
    $scope.testPromises=function(){
        console.log($scope.classListActive);
        console.log($scope.classListAll);
        console.log($scope.classListId);
    }
    
    
}]);