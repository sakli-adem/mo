let span1 = document.getElementsByClassName("zz");
	let product1 = document.getElementsByClassName('product1')
	let product_page1 = Math.ceil(product1.length/4);
	let lm = 0;
	let movePerr = 100;
	let maxMovee = 203;
	// mobile_view	
	let mob_view1 = window.matchMedia("(max-width: 768px)");
	if (mob_view1.matches)
	 {
	 	movePerr = 50.36;
	 	maxMovee = 504;
	 }

	let right_mover1 = ()=>{
		if(product_page1<product1.length){lm = lm + movePerr;}
		
		if (product1 == 1){lm = 0; }
		for(const ik of product1)
		{
			if (lm > maxMovee){l = lm - movePerr;}
			ik.style.left = '-' + lm + '%';
		}

	}
	let left_mover1 = ()=>{
		lm = lm - movePerr;
		if (l<=0){l = 0;}
		for(const im of product1){
			if (product_page1>1){
				im.style.left = '-' + l + '%';
			}
		}
	}
	span1[1].onclick = ()=>{right_mover1();}
	span1[0].onclick = ()=>{left_mover1();}

// Material Select Initialization
$(document).ready(function() {
	$('.mdb-select').materialSelect();
	});

	  // JavaScript Document







