(function(){
	var drt = document.createElement("div");
	drt.innerHTML = "<a href='javascript:window.scrollTo(0,0);'>返回顶部</a>"
	drt.id = "div-return-top";
	document.body.insertBefore(drt,document.body.firstChild);
	var DX1_D = document.getElementsByName("DX1_D")[0];
	if(DX1_D){
		DX1_D.value = 10;
	}else{
		alert("没有找到投注点")
	}
})();