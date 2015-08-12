app.service('GetInfoList',function(){
	function GetInfoListFn(){
	this.infoList=new Array();
	this.getDate=function(t){
		return new Date(parseInt(t)).toLocaleString();
	}
}
GetInfoListFn.prototype.getList=function(){
	var myKey="@alipay-metro";
	for(var i=0;i<localStorage.length;i++){
		var key=localStorage.key(i);
		if(key.indexOf(myKey)>0){
			var item=localStorage.getItem(key);
			item=item.split(",");
			var time=this.getDate(item[0]);
			var img=item[2]+","+item[3];
			var word=item[1];
			var itemObj={
				time:time,
				img:img,
				word:word
			}
			this.infoList.push(itemObj);
		}
	}
}
return GetInfoListFn;
});

