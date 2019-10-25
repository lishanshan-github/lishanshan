
var url2 =decodeURIComponent(location.search.slice(10));
console.log(url2);
$.ajax({
	url:xiangqin.api+url2,
	dataType:'json',
	success:function(data){
		console.log(data.data);
		    var author=data.data.aladdin.author;
			var category=data.data.aladdin.category;
			if(category==null){
				document.getElementById("bookxq").innerHTML="";
				document.getElementById("autor-xg").innerText="作者为“"+url2+"”的作品，以及相关作品";
			}else{
				var bookimg=document.getElementById("bookimg");
				var cover=data.data.aladdin.cover;
				bookimg.src=cover;
				var bookname=document.getElementById("bookname");
				bookname.innerText=data.data.aladdin.title;
				var autor=document.getElementById("autor");
				autor.innerHTML="作者："+author+"&nbsp;&nbsp;&nbsp;&nbsp;"+category;
				var desc=document.getElementById("desc");
				var desctext=data.data.aladdin.desc;
				desc.innerText="简介："+desctext;
				}
			},
});

function Recommend(){
	$.ajax({
		url:xiangqin.api+url2,
		dataType:'json',
		success:function(data){
			var vm=new Vue({
						el:"#tuij",
						data:{
							index:data.data.data.length,
						},
						methods:{
							recom(){
								   var bookimg=document.getElementsByClassName("book_cover");
								   var bookname=document.getElementsByClassName("book_name");
								   var leix=document.getElementsByClassName("first_cate_name");
								   var author=document.getElementsByClassName("author_name");
								   for(i=0;i<this.index;i++){
									   bookimg[i].src=data.data.data[i].cover;
									   bookname[i].innerText=data.data.data[i].title;
									   leix[i].innerText=data.data.data[i].category;
									   author[i].innerText=data.data.data[i].author+"..";
									   for(let i=0;i<bookimg.length;i++){
									   	bookimg[i].onclick=function(){
									   		var bookname=data.data.data[i].title;
									   	    location.href="xiangQing.html?bookname="+bookname;
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

function  yuedu(){
		$.ajax({
		url:xiangqin.api+url2,
			success:function(data){
				var bid=data.data.data[0].bid;
				var cid=data.data.data[0].first_cid;
				var url=content.api1+bid+content.api2+cid+content.api3;
				location.href=url;
			},
		});
}
function  jianjie(){
	document.getElementById("desc").setAttribute("style","-webkit-line-clamp: 5")
}
