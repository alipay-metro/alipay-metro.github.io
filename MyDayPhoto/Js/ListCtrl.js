app.controller('ListCtrl',function($scope, GetInfoList){
	var List=new GetInfoList();
	List.getList();
	console.log(List.infoList);
	$scope.infolist=List.infoList;
})