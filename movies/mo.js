let span = document.getElementsByClassName('aa');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 100;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		if(product_page<product.length){l = l + movePer;}
		
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}

// Material Select Initialization
$(document).ready(function() {
	$('.mdb-select').materialSelect();
	});

	  // JavaScript Document


	  


/*
	let span1 = document.getElementById("span1");
	let product1 = document.getElementsByClassName('product1')
	let product_page1 = Math.ceil(product.length/2);
	let k = 0;
	let movePer = 25.34;
	let maxMove = 503;
	// mobile_view	
	let mob_view1 = window.matchMedia("(max-width: 768px)");
	if (mob_view1.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover1 = ()=>{

		k = k + movePer
		if (product1 == 1){k = 0; }
		for(const i of product1)
		{
			if (k > maxMove){k = k- movePer;}
			i.style.left = '-' + k + '%';
		}

	}
	let left_mover1 = ()=>{
		k= k - movePer;
		if (k<=0){k = 0;}
		for(const i of product1){
			if (product_page1>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span1[1].onclick = ()=>{right_mover1();}
	span1[0].onclick = ()=>{left_mover1();}






	<a id="back" href="mo.html">Go back</a>
<a id="watch" href="Mortal.Kombat.2021.720p.WEB-DL.MyCima.TO.mp4">Watch now</a>
	  
*/



function hov(){
	this.z=document.getElementById("c3")
	this.x=document.getElementById("c2")
	this.z.style.visibility="visible"
	this.x.style.opacity="0.6"
	}
function dis(){
	this.z=document.getElementById("c3")
	this.x=document.getElementById("c2")
	this.z.style.visibility="hidden"
	this.x.style.opacity="1"
}


