var $ = document.querySelector.bind(document)
var One = document.querySelectorAll(".caroOne>.caro>li")[0]
var Two = document.querySelectorAll(".caroTwo>.caro>li")[0] 
var Three = document.querySelectorAll(".caroThree>.caro>li")[0] 
var Four = document.querySelectorAll(".caroFour>.caro>li")[0] 
var Five = document.querySelectorAll(".caroFive>.caro>li")[0] 
var Six = document.querySelectorAll(".caroSix>.caro>li")[0]

var oneDote = document.querySelectorAll(".caroOne>.dote>li")

var twoDote = document.querySelectorAll(".caroTwo>.dote>li") 

var threeDote = document.querySelectorAll(".caroThree>.dote>li")

var fourDote = document.querySelectorAll(".caroFour>.dote>li")

var fiveDote = document.querySelectorAll(".caroFive>.dote>li")
 
var sixDote = document.querySelectorAll(".caroSix>.dote>li") 

var li0 = document.querySelectorAll('.recom-lay>li')[0]
var li1 = document.querySelectorAll('.recom-lay>li')[1]
var li2 = document.querySelectorAll('.recom-lay>li')[2]
var li3 = document.querySelectorAll('.recom-lay>li')[3]
var li4 = document.querySelectorAll('.recom-lay>li')[4]
var li5 = document.querySelectorAll('.recom-lay>li')[5]
$('.recommend').onmouseover = function(){
	$('.back').style.display = 'block'
	$('.forward').style.display = 'block'
}
$('.recommend').onmouseout = function(){
	$('.back').style.display = 'none'
	$('.forward').style.display = 'none'
}
$('.back').onclick = function(){
	if(One.style.marginLeft === "-100%"){
		One.style.marginLeft = "0%"
		oneDote[0].style.color = "#828181"
		oneDote[1].style.color = "#cecece"
	}else{
		One.style.marginLeft = "-100%"
		oneDote[1].style.color = "#828181"
		oneDote[0].style.color = "#cecece"
	}
	if(Five.style.marginLeft === "-100%"){
		Five.style.marginLeft = "0%"
		fiveDote[0].style.color = "#828181"
		fiveDote[1].style.color = "#cecece"
	}else{
		Five.style.marginLeft = "-100%"
		fiveDote[1].style.color = "#828181"
		fiveDote[0].style.color = "#cecece"
	}
	alert('hello')
	if(Six.style.marginLeft === "-100%"){
		Six.style.marginLeft = "0%"
		sixDote[0].style.color = "#828181"
		sixDote[1].style.color = "#cecece"
	}else{
		Six.style.marginLeft = "-100%"
		sixDote[1].style.color = "#828181"
		sixDote[0].style.color = "#cecece"
	}
}
$('.forward').onclick = function(){
	if(One.style.marginLeft === "-100%"){
		One.style.marginLeft = "0%"
		oneDote[0].style.color = "#828181"
		oneDote[1].style.color = "#cecece"
	}else{
		One.style.marginLeft = "-100%"
		oneDote[1].style.color = "#828181"
		oneDote[0].style.color = "#cecece"
	}
	if(Five.style.marginLeft === "-100%"){
		Five.style.marginLeft = "0%"
		fiveDote[0].style.color = "#828181"
		fiveDote[1].style.color = "#cecece"
	}else{
		Five.style.marginLeft = "-100%"
		fiveDote[1].style.color = "#828181"
		fiveDote[0].style.color = "#cecece"
	}
	if(Six.style.marginLeft === "-100%"){
		Six.style.marginLeft = "0%"
		sixDote[0].style.color = "#828181"
		sixDote[1].style.color = "#cecece"
	}else{
		Six.style.marginLeft = "-100%"
		sixDote[1].style.color = "#828181"
		sixDote[0].style.color = "#cecece"
	}
}
oneDote[0].onclick = function(){
	One.style.marginLeft = "0%"
	oneDote[0].style.color = "#828181"
	oneDote[1].style.color = "#cecece"
}
oneDote[1].onclick = function(){
	One.style.marginLeft = "-100%"
	oneDote[1].style.color = "#828181"
	oneDote[0].style.color = "#cecece"
}
twoDote[0].onclick = function(){
	Two.style.marginLeft = "0%"
	twoDote[0].style.color = "#828181"
	twoDote[1].style.color = "#cecece"
}
twoDote[1].onclick = function(){
	Two.style.marginLeft = "100%"
	twoDote[1].style.color = "#828181"
	twoDote[0].style.color = "#cecece"
	twoDote[2].style.color = "#cecece"
	twoDote[3].style.color = "#cecece"
}
twoDote[2].onclick = function(){
	Two.style.marginLeft = "-200%"
	twoDote[2].style.color = "#828181"
	twoDote[0].style.color = "#cecece"
	twoDote[1].style.color = "#cecece"
	twoDote[3].style.color = "#cecece"
}
twoDote[3].onclick = function(){
	Two.style.marginLeft = "-301%"
	twoDote[3].style.color = "#828181"
	twoDote[0].style.color = "#cecece"
	twoDote[1].style.color = "#cecece"
	twoDote[2].style.color = "#cecece"
}
threeDote[0].onclick = function(){
	Three.style.marginLeft = "0%"
	threeDote[0].style.color = "#828181"
	threeDote[1].style.color = "#cecece"
	threeDote[2].style.color = "#cecece"
	threeDote[3].style.color = "#cecece"
}
threeDote[1].onclick = function(){
	Three.style.marginLeft = "-100%"
	threeDote[1].style.color = "#828181"
	threeDote[0].style.color = "#cecece"
	threeDote[2].style.color = "#cecece"
	threeDote[3].style.color = "#cecece"
}
threeDote[2].onclick = function(){
	Three.style.marginLeft = "-200%"
	threeDote[2].style.color = "#828181"
	threeDote[0].style.color = "#cecece"
	threeDote[1].style.color = "#cecece"
	threeDote[3].style.color = "#cecece"
}
threeDote[3].onclick = function(){
	Three.style.marginLeft = "-301%"
	threeDote[3].style.color = "#828181"
	threeDote[0].style.color = "#cecece"
	threeDote[1].style.color = "#cecece"
	threeDote[2].style.color = "#cecece"
}
fourDote[0].onclick = function(){
	Four.style.marginLeft = "0%"
	fourDote[0].style.color = "#828181"
	fourDote[1].style.color = "#cecece"
	fourDote[2].style.color = "#cecece"
	fourDote[3].style.color = "#cecece"
}
fourDote[1].onclick = function(){
	Four.style.marginLeft = "-100%"
	fourDote[1].style.color = "#828181"
	fourDote[0].style.color = "#cecece"
	fourDote[2].style.color = "#cecece"
	fourDote[3].style.color = "#cecece"
}
fourDote[2].onclick = function(){
	Four.style.marginLeft = "-200%"
	fourDote[2].style.color = "#828181"
	fourDote[0].style.color = "#cecece"
	fourDote[1].style.color = "#cecece"
	fourDote[3].style.color = "#cecece"
}
fourDote[3].onclick = function(){
	Four.style.marginLeft = "-301%"
	fourDote[3].style.color = "#828181"
	fourDote[0].style.color = "#cecece"
	fourDote[1].style.color = "#cecece"
	fourDote[2].style.color = "#cecece"
}
fiveDote[0].onclick = function(){
	Five.style.marginLeft = "0%"
	fiveDote[0].style.color = "#828181"
	fiveDote[1].style.color = "#cecece"
}
fiveDote[1].onclick = function(){
	Five.style.marginLeft = "-100%"
	fiveDote[1].style.color = "#828181"
	fiveDote[0].style.color = "#cecece"
}
sixDote[0].onclick = function(){
	Six.style.marginLeft = "0%"
	sixDote[0].style.color = "#828181"
	sixDote[1].style.color = "#cecece"
}
sixDote[1].onclick = function(){
	Six.style.marginLeft = "-100%"
	sixDote[1].style.color = "#828181"
	sixDote[0].style.color = "#cecece"
}
li0.onclick = function(){
	$('.caroOne').style.display = "block"
	$('.caroTwo').style.display = "none"
	$('.caroThree').style.display = "none"
	$('.caroFour').style.display = "none"
	$('.caroFive').style.display = "none"
	$('.caroSix').style.display = "none"
	li0.style.color = "#31c27c"
	li1.style.color = "#000"
	li2.style.color = "#000"
	li3.style.color = "#000"
	li4.style.color = "#000"
	li5.style.color = "#000"
}
li1.onclick = function(){
	$('.caroOne').style.display = "none"
	$('.caroTwo').style.display = "block"
	$('.caroThree').style.display = "none"
	$('.caroFour').style.display = "none"
	$('.caroFive').style.display = "none"
	$('.caroSix').style.display = "none"
	li0.style.color = "#000"
	li1.style.color = "#31c27c"
	li2.style.color = "#000"
	li3.style.color = "#000"
	li4.style.color = "#000"
	li5.style.color = "#000"
}
li2.onclick = function(){
	$('.caroOne').style.display = "none"
	$('.caroTwo').style.display = "none"
	$('.caroThree').style.display = "block"
	$('.caroFour').style.display = "none"
	$('.caroFive').style.display = "none"
	$('.caroSix').style.display = "none"
	li0.style.color = "#000"
	li1.style.color = "#000"
	li2.style.color = "#31c27c"
	li3.style.color = "#000"
	li4.style.color = "#000"
	li5.style.color = "#000"
}
li3.onclick = function(){
	$('.caroOne').style.display = "none"
	$('.caroTwo').style.display = "none"
	$('.caroThree').style.display = "none"
	$('.caroFour').style.display = "block"
	$('.caroFive').style.display = "none"
	$('.caroSix').style.display = "none"
	li0.style.color = "#000"
	li1.style.color = "#000"
	li2.style.color = "#000"
	li3.style.color = "#31c27c"
	li4.style.color = "#000"
	li5.style.color = "#000"
}
li4.onclick = function(){
	$('.caroOne').style.display = "none"
	$('.caroTwo').style.display = "none"
	$('.caroThree').style.display = "none"
	$('.caroFour').style.display = "none"
	$('.caroFive').style.display = "block"
	$('.caroSix').style.display = "none"
	li0.style.color = "#000"
	li1.style.color = "#000"
	li2.style.color = "#000"
	li3.style.color = "#000"
	li4.style.color = "#31c27c"
	li5.style.color = "#000"
}
li5.onclick = function(){
	$('.caroOne').style.display = "none"
	$('.caroTwo').style.display = "none"
	$('.caroThree').style.display = "none"
	$('.caroFour').style.display = "none"
	$('.caroFive').style.display = "none"
	$('.caroSix').style.display = "block"
	li0.style.color = "#000"
	li1.style.color = "#000"
	li2.style.color = "#000"
	li3.style.color = "#000"
	li4.style.color = "#000"
	li5.style.color = "#31c27c"
}