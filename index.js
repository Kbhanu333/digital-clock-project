//function getTime(){
    //let date = new Date();
    //let HH = date.getHours();
    //let MM = date.getMinutes();
    //let SS = date.getSeconds();


    //document.getElementById("HH").innerText = HH;
    //document.getElementById("MM").innerText = MM;
    //document.getElementById("SS").innerText = SS;

    

    //setTimeout(getTime, 1000);
//}

//getTime();






function time(){
    let ele =document.getElementById("aftrn")
    let message = document.getElementById("message");
    let lunchmess =document.getElementById("aftrnmessage");


    let time = new Date();
    let SS = time.getSeconds();
    let MM = time.getMinutes();
    let HH = time.getHours();

    let am_or_pm = document.getElementsByClassName("mrng")[0];
    
    if(HH >= 12){
      am_or_pm.innerHTML="PM";
    }
    else{
      am_or_pm.innerHTML="AM";
    }


  
    document.getElementById("hourss").innerHTML=HH;
    document.getElementById("minn").innerHTML =MM;
    document.getElementById("second").innerHTML =SS;

  if(HH>=10 && HH<12){
    ele.src ="certain.svg";
    message.innerText="GOOD MORNING!! WAKE UP !!"
    lunchmess.innerText="GRAB SOME HEALTHY BREAKFAST!!!"
  }
    
  if(HH>=12 && HH<16){
      ele.src ="eating.svg";
      message.innerText="GOOD AFTERNOON!! TAKE SOME SLEEP"
      lunchmess.innerText="LET'S HAVE SOME LUNCH !!"

  }

   if(HH>=16 && HH<20){
    ele.src="teaa.jpg";
    message.innerText="GOOD EVENING !!"
    lunchmess.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"

  }
   if(HH>=20){
    ele.src="sleeping.svg";
    message.innerText="GOOD NIGHT !!!"
    lunchmess.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
  }
  

   
  };

  
  setInterval(time,1000);


  function hoverclick(){
    
    let change = document.getElementsByClassName("timeset")[0]
    let change1 = change.options[change.selectedIndex].innerText
    document.getElementById("text1").innerText = change1 

    let change2 = document.getElementsByClassName("timeset")[1]
    let change3 = change2.options[change2.selectedIndex].innerText
    document.getElementById("text2").innerText = change3

    let change4 = document.getElementsByClassName("timeset")[2]
    let change5 = change4.options[change4.selectedIndex].innerText
    document.getElementById("text3").innerText = change5

    let change6 = document.getElementsByClassName("timeset")[3]
    let change7 = change6.options[change6.selectedIndex].innerText
    document.getElementById("text4").innerText = change7

 
  }