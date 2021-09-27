var signup=document.getElementById('signup')
var container=document.querySelector('.container')
var form=document.querySelector('.form')
var signin=document.querySelector('.sign-in-section')
var pass=document.querySelector('#password')
var btn=document.querySelector('#btnmain')

var headbtn=document.querySelector('#headbtn')

var container1=document.querySelector('.container2')
// var color=document.firstElementChild.lastElementChild

function clicked(){
    container.style.transform="rotateY(360deg)"
    signin.style.visibility="hidden",
    signin.style.opacity="0",
    container1.style.visibility="visible"
    
   

}
    


function clickedbtn(){
    let n=pass.value
    n=n.length
    if(n<4){
        alert("the password cannot be less than 4 letter")
    }
    else if(n>7){
        alert("the password cannot be more than 7 letter")
    }
}
function gotologin(){
    container1.style.transform="rotateY(360deg)"
    container1.style.visibility="hidden"
    signin.style.visibility="visible"
    signin.style.opacity="1"

}