/* 
GSA WEB Proyect -- v2.0 
Author: Carlos Padilla (cpadlab) -- https://github.com/cpadlab
Proyect: https://github.com/gsalhawd/gsalhawd.github.io
*/
$(document).ready(function(){$.getJSON("../include/content/info.json",function(a){$("#castores .rc-info h1").text(a[1].castores),$("#lobatos .rc-info h1").text(a[1].lobatos),$("#rangers .rc-info h1").text(a[1].rangers),$("#rutas .rc-info h1").text(a[1].clan),$("#castores .rc-info p").html(a[5].castores_text),$("#lobatos .rc-info p").html(a[5].lobatos_text),$("#rangers .rc-info p").html(a[5].rangers_text),$("#rutas .rc-info p").html(a[5].clan_text),$("#kraal .rc-info p").html(a[5].kraal_text);var e=document.querySelectorAll(".rama-content .rm-image");$(e[0]).css("background-image","url(../include/assets/images/"+a[5].castores_image+".jpg"),$(e[1]).css("background-image","url(../include/assets/images/"+a[5].lobatos_image+".jpg"),$(e[2]).css("background-image","url(../include/assets/images/"+a[5].rangers_image+".jpg"),$(e[3]).css("background-image","url(../include/assets/images/"+a[5].clan_image+".jpg"),$(e[4]).css("background-image","url(../include/assets/images/"+a[5].kraal_image+".jpg")})});