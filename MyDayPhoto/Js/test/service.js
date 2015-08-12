/**
 * Created by metrokobe on 15/7/27. ----- alipay
 */
app.factory('PhoneList',function($http,$q){
  function PhoneListFn(){
    this.list={};
  }
  PhoneListFn.prototype.query=function(){
    console.log(new $q.defer())
    return $http.get('mock/list.json')


  }
  return new PhoneListFn();
})
app.service('UserList',function($http,$q){
  function UserListFn(){
    this.list=[];
  }

  UserListFn.prototype.getList=function(){
    var $deferred=$q.defer();
    $http.get('mock/user.json').success(function(data){
        $deferred.resolve(data)
    }).error(function(){
        $deferred.reject();
    });
    return $deferred.promise;
  }
  return UserListFn;
})