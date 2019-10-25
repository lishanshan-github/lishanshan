$(".carousel").carousel({
				interval:3000
			})


function Recommend(){
	$.ajax({
		url:tuijian.api,
		dataType:'json',
		success:function(data){
			var vm=new Vue({
						el:"#tuij",
						data:{
							index:data.data.length,
						},
						methods:{
							recom(){
								for(i=0;i<this.index-1;i++){
									var imgsrc=document.getElementsByClassName("book_cover");
									var bookname=document.getElementsByClassName("bookname");
									var first_cate_name=document.getElementsByClassName("first_cate_name");
									var author_name=document.getElementsByClassName("author_name");
									for(i=0;i<imgsrc.length;i++){
										// console.log(data.data[i].bookname);
										imgsrc[i].src=data.data[i].book_cover;
										bookname[i].innerText=data.data[i].bookname;
										first_cate_name[i].innerText=data.data[i].first_cate_name;
										author_name[i].innerText=data.data[i].author_name+"  》》";
										for(let i=0;i<imgsrc.length;i++){
											imgsrc[i].onclick=function(){
												var bookname=data.data[i].bookname;
											    location.href="xiangQing.html?bookname="+bookname;
											}
										}
									}
								}
							}
						}
					});
				vm.recom();
			},
	});
}
Recommend();
function Search(){
	var search=document.getElementById("serch").value;
	var serchbig=document.getElementById("serchbig");
	serchbig.innerHTML="";
	$.ajax({
		url:sousuo.api+search,
		dataType:'json', 
		success:function(data){
			if(data.data==null){
				var li=document.createElement("li");
				li.innerText="未找到相关类容";
				serchbig.appendChild(li);
			}else{
			var len=data.data.length;
			for(let i=0;i<len;i++){
				var li=document.createElement("li");
				var ib=document.createElement("i");
				ib.className="iconfont icon-shu";
				li.className="serchli";
				ib.style.marginLeft=20+"px";
				li.innerText=data.data[i];
				serchbig.appendChild(li);
				li.appendChild(ib);
				serchbig.style.border="1px rgba(255,0,0,0.6) solid";
			  }
			}
			var serchli=document.getElementsByClassName("serchli");
			for(let i=0;i<serchli.length;i++){
				 serchli[i].onclick=function(){
					var bookname=serchli[i].innerText;
					location.href="xiangQing.html?bookname="+bookname;
				 }
			}
		},
	});
}
function Searchout(){
	setTimeout(function(){
		var serchbig=document.getElementById("serchbig");
		serchbig.innerHTML="";
		serchbig.style.border="1px white solid";
	},5000);
}

var lunboimg=document.getElementsByClassName("lunboimg");
var h4=document.getElementsByTagName("h4");
			for(let i=0;i<lunboimg.length;i++){
				 lunboimg[i].onclick=function(){
					 var bookname=h4[i].innerText;
					location.href="xiangQing.html?bookname="+bookname;
	 }
}

var vm3=new Vue({
	el:'#buttom',
	data:{
		bookname:['重生：傲世狂妃','傲世战尊','都市鬼谷医仙','都市全能系统','末世全能系统','战神升级系统','最强小农民'],
	},
	methods:{
		Recom(){
			var bookimg=document.getElementsByClassName("bookimg");
			var buttom_author=document.getElementsByClassName("buttom-autor");
			var bookxq=document.getElementsByClassName("bookxq");
			var buttom_desc=document.getElementsByClassName("buttom-dasc");
			for(let i=0;i<bookxq.length;i++){
				$.ajax({
					url:xiangqin.api+this.bookname[i],
					dataType:'json',
					success:function(data){
						bookimg[i].src=data.data.aladdin.cover;
						buttom_author[i].innerHTML="作者："+data.data.aladdin.author+"&nbsp;&nbsp;&nbsp;&nbsp;"+data.data.aladdin.category;
						buttom_desc[i].innerText="简介："+data.data.aladdin.desc;
						},
				});
			}
		}
	}
});
vm3.Recom();

var btnn=document.getElementsByClassName("btnn");
var bookname=document.getElementsByClassName("bookname2");
for(let i=0;i<btnn.length;i++){
	btnn[i].onclick=function(){		
	location.href="xiangQing.html?bookname="+bookname[i].innerText;
		}
}
function  jianjie(){
	document.getElementById("desc").setAttribute("style","-webkit-line-clamp: 5")
}

function loadXMLDoc()
			{   
				console.log("ss");
				var xmlhttp;
				if (window.XMLHttpRequest)
				{
					//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
					xmlhttp=new XMLHttpRequest();//创建对象
				}
				else
				{
					// IE6, IE5 浏览器执行代码
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//创建对象
				}
				xmlhttp.onreadystatechange=function()
				{
					//当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
					if (xmlhttp.readyState==4 && xmlhttp.status==200)
					{
						document.getElementById("tuij").innerHTML=xmlhttp.responseText;	
											
						var link = document.createElement("link");
						var src=document.createElement("script");
						src.src="../js/shouYe.js";
						link.rel = "stylesheet";
						link.type = "text/css";
						link.href = "../css/shouYe.css";
						document.getElementById("head").appendChild(link);
				        document.getElementById("head").appendChild(src);
                        document.getElementById("row").setAttribute("style","margin-left:174px");
                        document.getElementById("tuij").setAttribute("style","margin-left:154px");
 
					}
				}
				xmlhttp.open("GET","Boutique.html",true);//发送请求
					xmlhttp.send();//将请求发送到服务器
				}