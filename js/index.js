{
	let imgs=document.querySelectorAll(".display_right_top img");
	let yuandians=document.querySelectorAll(".yuandian li");
	var k=0;
	setInterval(function(){
		k++;
		
		if(k===imgs.length){
			k=0;
		}
		if(k<0){
			k=imgs.length-1
		}
		for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					yuandians[i].classList.remove("active");
				}
				imgs[k].classList.add("active");
				yuandians[k].classList.add("active");	
	}, 5000);
}
{
	let imgs=document.querySelectorAll(".guanyu_item_top img");
	var t;
	let flag=true;
	imgs.forEach(function(ele,index){
	let t=setInterval(move, 1200);
	function move(){
		// for(let i=0;i<imgs.length;i++){
		// 	imgs[i].style.transform="rotate(360deg) ";
		// 	imgs[i].style.transition="all 1s";	

		// 	}
			if(flag===true){
				for(var i=0;i<imgs.length;i++){
			// imgs[i].style.transition="all 1s";	
			imgs[i].style.transform="rotate(360deg)";}
			flag=false;
			}else{
				for(var i=0;i<imgs.length;i++){
			// imgs[i].style.transition="all 1s";	
			imgs[i].style.transform="rotate(0deg)";
			flag=true;
		}
			}
			
	}
		ele.onmouseover=function(){
			
			clearInterval(t);
			ele.style.transition="all 1s";	
			ele.style.transform="scale(1.1, 1.1)";
			
		}
		ele.onmouseleave=function(){
			ele.style.transform=" ";
			t=setInterval(move, 1200);
			
			
			
		}


	})
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend",function(){
			flag=false;
		
			
			
					
			

			
	
		});
	})
	    
}
{
	// let h3s=document.querySelectorAll(".life h3");
	// console.log(h3s);
	// let pos=[{m:5,speed:20},{m:5,speed:20},{m:5,speed:20}];
	// h3s.forEach(function(ele,index){
	// 	setInterval(function(){
		

		
	// 		pos[index].m+=10;
			
	// 		if(pos[index].m>120){
	// 			pos[index].m=-15;
	// 		}
	// 		ele.style.marginLeft=pos[index].m+"px";
			
		
	// 	},500)
	// })
}
{
	// let h3s=document.querySelectorAll(".prize_content");
	// console.log(h3s);
	// let pos=[{m:5,speed:20},{m:5,speed:20},{m:5,speed:20}];
	// h3s.forEach(function(ele,index){
	// 	setInterval(function(){
		

		
	// 		pos[index].m+=10;
			
	// 		if(pos[index].m>20){
	// 			pos[index].m=-15;
	// 		}
	// 		ele.style.marginLeft=pos[index].m+"px";
			
		
	// 	},500)
	// })
}
