app.controller('PhoneCtrl', function($scope,$stateParams,PhoneList){
	PhoneList.query().success(function(data){
		$scope.phoneList=data;
	});
	console.log(PhoneList);
	$scope.watchAction=function (newValue, oldValue, scope){
		console.log('in');
		for(var i=0;i<$scope.phoneList.length;i++){
			if($scope.phoneList[i].check==true){
				console.log($scope.phoneList[i].info);
			}
		}
		
	}

	$scope.$watch('phoneList',$scope.watchAction,true);

})
app.controller('phoneInfoCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
	$scope.id=$stateParams.id;
}])
app.controller('TestCtrl',function($scope){
	this.number={
		appleNum:0,
		orangeNum:0
	}
	this.discount=0;
	this.allprice=0;

	//this.text="nnnnhdajsdajsgd，是都市报哥仨规定阿哥华盛顿干哈的";

	this.expanders=[
		{


			text:'黄毒啊的叫阿爽的大叔高低贵贱大家精神的话解释个黄金时代噶速度阿说古道今挥洒广东省'
		},
		{
			title:'互打死打伤表达什么呢',
			text:'读噶速度办大事本年度 v 阿萨德被女 dasd把那速度那舍不得买那本书的蒙巴萨面对巴萨目的'
		},
		{
			title: 'ashdghasdgjahdgh',
			text: '读噶速度办大dasdhabnasbd广大还是觉得感觉阿萨德刚回家啊的 觉得啥的'
		}
	]
	$scope.all=0;
	this.subtotal=this.allprice-this.discount;
	this.allPrice=function(){
		this.allprice=this.number.appleNum*5+this.number.orangeNum*10;
		$scope.all=this.number.appleNum*5+this.number.orangeNum*10;
		console.log('price----->'+this.allprice)
		return this.allprice;
	}
	var self=this;
	$scope.$watch('all',function(newValue,oldValue,scope){
		self.discount=newValue > 100 ? 10 :0;
		console.log(self.discount)
		console.log(oldValue)
	})

	//this.watch('allprice',function(newValue,oldValue,scope){
	//	self.discount=newValue > 100 ? 10 :0;
	//	console.log(self.discount)
	//	console.log(oldValue);
	//})


})

app.controller('FormCtrl',function($scope,UserList){
	this.username="";
	this.checkRes=false;
	this.dialogCloseValue=true;
	this.showDialog=function(){
		this.dialogCloseValue=false;
	}
	this.checkUsername=function(){
		//service ajax $http check username

		if(this.username != 'metro'){
			this.checkRes=true;
		}else{
			this.checkRes=false;
		}
	}


	this.dialogClose=function(){
		this.dialogCloseValue=true;
	}
	this.time=new Date();
	var userList=new UserList();
	userList.getList().then(function(data){
		console.log('$q --- SUCC');
		console.log(data);
	},function(){
		console.log('$q --- ERR');
	})
})














