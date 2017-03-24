angular.module("attendance").service("classService",['$http',function($http){
    this.classList = [];
    this.classListAll = [];
    this.classListId = [];
    var that = this;
    
    this.getClassListActive = function(){
        return $http({
            method:"GET",
            url:"/service/class"
        }).then(function(result){
            that.classList = result.data;
            return result.data
        });
    };
    
    this.getClassListAll = function(){
        return $http({
            method:"GET",
            url:"/service/class/all"
        }).then(function(result){
            that.classListAll = result.data;
            return result.data
        });
    };
    
    
    this.getClassListId = function(id){
        return $http({
            method:"GET",
            url:"/service/class/"+id
        }).then(function(result){
            that.classListId = result.data;
            return result.data
        });
    }
    
    this.postClass = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/class",
            data:dataParam
        }).then(function(result){
            return result.status;
        });
    };
    
    
}]);