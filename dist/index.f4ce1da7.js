AOS.init();const e=new Date("Dec 06, 2025 20:00:00"),o=document.getElementById("contador");function t(){let t=e-new Date;if(t<=0){o.innerHTML="O evento já começou! \uD83D\uDE80";return}let n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),a=Math.floor(t%36e5/6e4),s=Math.floor(t%6e4/1e3);o.innerHTML=`
    O maior evento de tecnologia do Brasil come\xe7a em 
    <strong>${n}d</strong>
    <strong>${r}h</strong>
    <strong>${a}m</strong>
    <strong>${s}s</strong>
  `}t(),setInterval(t,1e3);
//# sourceMappingURL=index.f4ce1da7.js.map
