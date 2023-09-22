let d=document;

let hh=d.getElementById('hh');
let mm=d.getElementById('mm');
let ss=d.getElementById('ss');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();


// 12 hours clock
hh.style.strokeDashoffset= 510-(510*h)/12;