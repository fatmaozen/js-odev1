let isim=prompt("Adınızı girin.");
let myName=document.querySelector("#myName");
myName.innerHTML=`${isim}`;
let myClock=document.querySelector("#myClock");
function showTime(){
let tarih= new Date();
let gun= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi",];
let saat =tarih.getHours();
let dakika=tarih.getMinutes();
let saniye=tarih.getSeconds();
myClock.innerHTML=`${saat}:${dakika}:${saniye} ${gun[tarih.getDay()]}`;
setTimeout(showTime, 1000); 
}
showTime();