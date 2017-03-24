angular.module("attendance").service("employeeService",['$http',function($http){
    this.employeeList = [];
    var that = this;
    
    this.getEmployeeList = function(){
        return $http({
            method:"GET",
            url:"/service/class"
        }).then(function(result){
            that.employeeList = result.data;
            return result.data
        });
    };
    
    this.getEmployeeListAll = function(){
        return $http({
            method:"GET",
            url:"/service/class/all"
        }).then(function(result){
            that.employeeList = result.data;
            return result.data
        });
    };
    
    this.getEmployeeListId = function(id){
        return $http({
            method:"GET",
            url:"/service/class/"+id
        }).then(function(result){
            that.employeeList = result.data;
            return result.data
        });
    }
    this.postEmployee = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/class",
            data:dataParam
        }).then(function(result){
            return result.status;
        });
    };
    
    
}]);