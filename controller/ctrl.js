app.controller("ctrl",function($scope,factory){
    $scope.loadfrnd=function(){
        var p=factory.getJson();
        for(var i=1;i<=10;i++){console.log("Loop "+i);}
        function success(data){$scope.list=data;}
        function error(error){$scope.list=error;}
        p.then(success,error);
    }
});