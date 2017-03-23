"use strict";
angular.module("attendance").service("studentService",[function(){
    var _this=this;
    var studentArray=[];
    //function to add new element into the array
    this.addStudent=function(student){
        studentArray.push(angular.copy(student));
    };
    
    //function to get the student list
    this.getStudentList = function(){
        return studentArray;
    };
    
    this.studentModel={
        "firstName":"",
        "lastName":"",
        "gender":"",
        "address":"",
        "zip":"",
        "state":"",
        "city":"",
        "dob":"",
        "phone":"",
        "email":"",
        "gitUserName":""
    }
}]);