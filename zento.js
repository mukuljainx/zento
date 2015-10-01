var strip = document.getElementById('bottom_strip');

var k=0,j=0,r=0;
var addressx;

function pic_click(x)
{
	address = "./i" + x + "/";
	dispImg(address);
	strip.style.display = "inline";
	addressx = address;
	return false;
}


var img =
			[
				"1.jpg",
				"2.jpg",
				"3.jpg",
				"4.jpg",
				"5.jpg",
				"6.jpg"
			];


function dispImg(zz)
	{

	
	width = screen.width*.96;
	var nunmber_of_imgs = parseInt(width/100);
	
	for(var i=0; i<=nunmber_of_imgs; i++)
	{
	
		strip.innerHTML += '<img src="' + address + img[i] + '" onclick=\'return show(this.id,address);\' id="' +i+'"\" />';
	}
	i=0;
	return false;
}	



function img_next()
{
	// window.alert(addressx);
	if(j != img.length -1)
	{
		j++;
		k++;
	
		show(j,addressx);
	}
	return false;
}

function img_prev()
{
	if(j != 0)
	{
		j--;
		show(j,addressx);
	}
	return false;
}


function show(i,address)
{
	
	document.getElementById('overlay').style.display = 'block';
	window.alert(address);
	imgs = document.getElementById('img_container');
	imgs.style.display = "block";
	// window.alert('jh');
	var d = new Image();
	d.src = img[i];
	// window.alert('jhx');	
	imgs.innerHTML = '<img src="' + address +  img[i] +'" class="animated fadeIn"  img_height="' + parseInt(0.85*d.height) + '" /><br /><br /><div id="close_btn	" onclick\="return close();\"><a href=\"\"onclick=\"return close(); \"><i class="fa fa-times fa-2x"></i></a></div>';
	

	document.getElementById('left').style.display = "inline";
	document.getElementById('right').style.display = "inline";

	center_img(i);
	j= i;
	// window.alert(j);
	return false;
}


function center_img(i)
{
	var img_height = document.getElementById('img_container');
	var images = new Image();
	images.src = img[i];
	var width = 70;
	var height = 70;
	img_height.style.width = width + "%";
	img_height.style.height = height + "%";
	
										
	return false;
}


function close(){

	document.getElementById('img_container').style.display="none";
	document.getElementById('overlay').style.display="none";
	return false;