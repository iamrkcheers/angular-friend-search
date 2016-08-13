app.factory("factory",function($http,$q){
    var obj={
        getJson:function(){
            var d=$q.defer();
            $http.get("friends.json").success(function(data){d.resolve(data);}).error(function(error){d.reject(error)});
            return d.promise;
        }
    }
    return obj;
});