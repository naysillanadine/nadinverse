window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").classList.add("hide"),650));
const glow=document.querySelector(".cursor-glow");document.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));
document.getElementById("theme").onclick=()=>{document.body.classList.toggle("light");document.getElementById("theme").textContent=document.body.classList.contains("light")?"☾":"☼"};
let clicks=0;document.getElementById("secretBtn").onclick=()=>{clicks++;if(clicks>=7){document.getElementById("secret").classList.add("show");clicks=0}};
function closeSecret(){document.getElementById("secret").classList.remove("show")}
function toast(t){let x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
document.getElementById("menu").onclick=()=>toast("Tip: gunakan menu navigasi di atas untuk menjelajah ✦");
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSecret()});
