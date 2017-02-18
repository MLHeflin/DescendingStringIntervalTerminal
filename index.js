var counterAsterisk = function(){
 var myAsterisk = Array(11).join("*").split("");

 var loop = setInterval(function(){
   if(myAsterisk.length==1){
     clearInterval(loop);
   }else{
    myAsterisk.pop();
    console.log(myAsterisk.join(""));
   }
  },1000);
};
counterAsterisk();
