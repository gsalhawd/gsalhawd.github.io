/* 
GSA WEB Proyect -- v2.0 
Author: Carlos Padilla (cpadlab) -- https://github.com/cpadlab
Proyect: https://github.com/gsalhawd/gsalhawd.github.io
*/
document.getElementById("hh-toggle-close").addEventListener("click",function(e){e.preventDefault(),$("#hidden-header").animate({opacity:0,top:"50%"},300,function(){document.getElementById("hidden-header").style.display="none"})}),document.getElementById("hnr-toggle").addEventListener("click",function(e){e.preventDefault(),document.getElementById("hidden-header").style.display="block",$("#hidden-header").animate({opacity:1,top:0},300)}),$(document).ready(function(){$.getJSON("../include/content/info.json",function(e){var t=e[2].mail,n=e[2].instagram,a=e[2].phone,o=e[2].facebook,i=e[2].location;$("#hhbn-mail").attr("href","mailto:"+t).text(t),$("#hhbn-phone").attr("href","tel:"+a),$("#hhbn-instagram").attr("href",n),$("#hhbn-facebook").attr("href",o),$("#fnm-mail").attr("href","mailto:"+t).text(t),$("#fnm-phone").attr("href","tel:"+a),$("#fnm-instagram").attr("href",n),$("#fnm-facebook").attr("href",o),$("#fnm-location").text(i)})});