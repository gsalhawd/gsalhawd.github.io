/* 
GSA WEB Proyect -- v2.0 
Author: Carlos Padilla (cpadlab) -- https://github.com/cpadlab
Proyect: https://github.com/gsalhawd/gsalhawd.github.io
*/
export function createPost(e,t,n,a,d,i){var l=document.createElement("div");l.classList.add("post");var p=document.createElement("div");p.classList.add("bcp-banner"),p.style.backgroundImage="url(/include/assets/blog/"+n+".jpg)",l.appendChild(p);var r=document.createElement("div");r.classList.add("bcp-info");var c=document.createElement("span");c.textContent=i,r.appendChild(c);var s=document.createElement("h2");s.id="bcp-info-title",s.textContent=a,r.appendChild(s),s.addEventListener("click",function(e){e.preventDefault(),location.href="/post/?p="+t});var o=document.createElement("h3");o.id="bcp-info-desc",o.textContent=d,r.appendChild(o);var v=document.createElement("button");v.id="bcp-info-link",v.innerHTML='<i class="fa-solid fa-bookmark"></i> Leer m\xe1s...',r.appendChild(v),v.addEventListener("click",function(e){e.preventDefault(),location.href="/post/?p="+t}),l.appendChild(r),document.getElementById(e).appendChild(l)}