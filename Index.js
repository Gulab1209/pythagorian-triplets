function pythagoras(){
var a=
parseFloat(document.getElementById("firstnumber").value)
var b=parseFloat(document.getElementById("secondnumber").value)
var c=
parseFloat(document.getElementById("thirdnumber").value)


function pythagorian(a,b,c){
    var x=Math.max(a,b,c)
    var y;
    var z;
    
    if(x==a){
        y=b;
        z=c;
    }
    else if(x==b){
        y=c;
        z=a;
    }
    else{
        y=a;
        z=b;
    }
    
    if(x*x==y*y+z*z){
        document.querySelector("h1").innerHTML=x +","+ y+"," +z+"," +" Are Pythagorian Triplets";
document.querySelector(".side3").innerHTML =x
    if(y>z){
        document.querySelector(".side2").innerHTML =y
 document.querySelector(".side1").innerHTML =z     
        
    }
    else{
        document.querySelector(".side2").innerHTML =z
 document.querySelector(".side1").innerHTML =y
    }
    }
    else{
     document.querySelector("h1").innerHTML=x +","+ y+"," +z+"," +" Are Not Pythagorian Triplets";
    }
}
pythagorian(a,b,c);
}
        
