//window.onload = onTick();

function create_account(){  
var n=document.getElementById("n1").value; 
var n2=document.getElementById("n2").value;
var e=document.getElementById("e1").value;
var subject=document.getElementById("subject").value;

//var p=document.getElementById("p1").value;  
//var cp=document.getElementById("p2").value;  
//Code for password validation  
        var letters = /^[A-Za-z]+$/;  
        var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
//other validations required code  
if(n ==''||n2 == ''||e ==''|| subject == ''){  
alert("Enter each detail correctly");  
}  
else if(!letters.test(n))  
        {  
            alert('Name must contain alphabets only');  
        }  
else if (!email_val.test(e))  
        {  
            alert('Invalid email format please enter valid email');  
        }  

else{  
alert("Thank you for providing feedback... Redirecting to Oleksandra's LinkedIn");  
window.location="https://www.linkedin.com/in/orlovoleksandra/";  
}  
}  



//animation
window.addEventListener('load', () => {
var text = document.querySelector(".fancy");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";
for (let i =0; i < splitText.length; i ++){
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}


let char = 0;
let timer = setInterval(onTick, 300);


function onTick(){
  const span = text.querySelectorAll("span")[char];
  span.classList.add('fade');
  char++;
  if(char === splitText.length){
    complete();
    return;
  }
}


function complete(){
  clearInterval(timer);
  timer = null;
}
})


