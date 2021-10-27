
function check(){
  var sum= document.getElementById("sum").value;
  document.getElementById("sum").value="";
  if(sum>=85){
    document.getElementById("grade").innerHTML="Excellent";
  }else if(sum>=75 && sum<85){
   document.getElementById("grade").innerHTML="Very good";
  }else if(sum>=50 && sum<75){
   document.getElementById("grade").innerHTML=" Good";
  }else{
   document.getElementById("grade").innerHTML=" Failing";
  }
}