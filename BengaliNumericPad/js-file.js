//document.getElementById("numberDiv").innerHTML="";
function printNumber(value)
{
 var str=document.getElementById("numberDiv").innerHTML;str+=value;
 document.getElementById("numberDiv").innerHTML=str;
 
}
function deleteNum()
{
 var str=document.getElementById("numberDiv").innerHTML;
 str=str.substring(0, str.length-1);
 document.getElementById("numberDiv").innerHTML=str;
}

function convert(a)
{
if(a=='১')return 1;
else if(a=='২')return 2;
else if(a=='৩')return 3;
else if(a=='৪')return 4;
else if(a=='৫')return 5;
else if(a=='৬')return 6;
else if(a=='৭')return 7;
else if(a=='৮')return 8;
else if(a=='৯')return 9;
else if(a=='০')return 0;
}
function benToEng(str)
{
var str1="";
for(var i=0;i<str.length;i++)
 str1+=convert(str[i]);
return str1; 
}
function createDiv()
{
var divTag=document.createElement("div");
divTag.id="callDialog";
divTag.className="modalDialog";
divTag.innerHTML="কল করা হচ্ছে" ;
document.body.appendChild(divTag);
}
function phoneCall()
{
var str=document.getElementById("numberDiv").innerHTML;
str=benToEng(str); /*English Equivalent Number*/
//alert(str);
/*Calling Code Goes Here*/
//Telephony object
var tel=navigator.mozTelephony;
//Mute or not
//console.log(tel.muted);
//speaker enabled
//console.log(tel.speakerEnabled);
//placing call
var call=tel.dial(str);
//createDiv();
//events for that call
call.onconnected=function(){
//call was connected
document.getElementById("callDialog").innerHTML="কথা বলুন";
};
call.ondisconnected=function(){
//call was disconnected
document.getElementById("callDialog").innerHTML="ধন্যবাদ ব্যবহার করার জন্য";
};
call.hungUp();
}
