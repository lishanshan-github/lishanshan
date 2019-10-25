const data={
	obj:{
		a:10,b:1,
		arr:[1,2,3]
	}
}
let value=data.obj;
Object.defineProperty(data,'obj',{
	get(){
		//读取对象属性时执行，必须有返回值，读取结果
		// console.log("读取");
		return value;//返回值，当值在外面更改，返回值不变 17行
	},
	set(newvalue){
		//对对象进行写操作执行，重新赋值
		if(newvalue==value){
			return;
		}
		value=newvalue;
		render();
	}
})

function defineProperty(data,key,value){
	Object.defineProperty(data,key,{
		get(){
			//读取对象属性时执行，必须有返回值，读取结果
			// console.log("读取");
			return value;//返回值，当值在外面更改，返回值不变 17行
		},
		set(newvalue){
			//对对象进行写操作执行，重新赋值
			if(newvalue==value){
				return value;
			}
			value=newvalue;
			render();
		}
		})
}


function observer(data){  
	if(typeof data==='object'){
		defineProperty(data,key,data[key]);
	}
}


function render(){
	console.log('渲染');
}

observer();
data.obj=90;
console.log(data.obj);