// create variable
var images = ["../img/camera.jpg" , 
			  "../img/camera_2.jpg" ,
			  "../img/camera_3.jpg"] ,  
images_2 = ["../img/i.jpg",
			"../img/i2.jpg",
			"../img/i3.jpg"],
num = 0 ,
el = document.querySelector("header #about_me #slider_1 img") , 
button_sl_1 = document.querySelector(".beack") , 
button_sl_2 = document.querySelector(".next") , 
bg = document.querySelector("#about_me");

//function start

button_sl_1.addEventListener("click",next);
button_sl_2.addEventListener("click",prev);

//function 

function next()
{
	num++;
	if(num >= images.length)
	{
		num = 0;
	}
	el.src = images[num];
	bg.style.background = "url("+ images_2[num] +")";
	bg.style.backgroundRepeat = "no-repeat";
	bg.style.backgroundPosition = "top right";
	bg.style.position = "relative";	
}

function prev()
{
	num--;
	if(num < 0)
	{
		num = images.length-1;
	}
	el.src = images[num];
	bg.style.background = "url("+ images_2[num] +")";
	bg.style.backgroundRepeat = "no-repeat";
	bg.style.backgroundPosition = "top right";
	bg.style.position = "relative";	
}



