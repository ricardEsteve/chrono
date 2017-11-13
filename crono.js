window.onload=function(){
 
  view=document.getElementById("clock");
  
  document.cron.button1.onclick=active;
  document.cron.button2.onclick=pause;
  
  document.cron.button1.disabled=false;
  document.cron.button2.disabled=true;
  
  var swichOn=0;
  var cro=0;
  
  function active(){
    if(document.cron.button1.value=="Start"){
      start()
    }else{
      reStart()
    }
  }
  
  function pause(){
    if(swichOn==0){
      continuing()
    }else{
      stop()
    }
  }
  
 function start (){
   
   sta=new Date();
   theCrono=setInterval(time,10);
   swichOn=1;
   document.cron.button1.value="reStart";
   document.cron.button2.disabled=false;
 } 
  
  function time(){
    current= new Date();
    cro=current-sta;
    cr=new Date();
    cr.setTime(cro);
    cs=cr.getMilliseconds();
    cs=cs/10;
    cs=Math.round(cs);
    sg=cr.getSeconds();
    mn=cr.getMinutes();
    ho=cr.getHours()-1;
    if(cs<10){cs="0"+cs;}
    if(sg<10){sg="0"+sg;}
    if(mn<10){mn="0"+mn;}
    
      view.innerHTML=ho+" "+mn+" "+sg+" "+cs;

  }
  
  function stop(){
    clearInterval(theCrono);
    swichOn=0;
    document.cron.button2.value="continuing";
  }
  function continuing(){
    sta2=new Date();
    sta2=sta2.getTime();
    sta3=sta2-cro;
    sta=new Date();
    sta.setTime(sta3);
    theCrono=setInterval(time,10);
    swichOn=1;
    document.cron.button2.value="stop";
    document.cron.button1.disabled=false;
  }
  
  function reStart(){
    if(swichOn==1){
      clearInterval(theCrono);
      swichOn=0;
    }
    cro=0;
    view.innerHTML="0 00 00 00";
    document.cron.button1.value="Start";
    document.cron.button2.value="Stop";
    document.cron.button2.disabled=true;
  }
}