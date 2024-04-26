/* 
GSA WEB Proyect -- v2.0 
Author: Carlos Padilla (cpadlab) -- https://github.com/cpadlab
Proyect: https://github.com/gsalhawd/gsalhawd.github.io
*/
import{createPost as n}from"../common/blog.js";$(document).ready(function(){$.getJSON("../include/content/info.json",function(n){$('meta[property="og:image"]').attr("content","/include/assets/banners/"+n[0].banner+".jpg"),$('meta[name="twitter:image"]').attr("content","/include/assets/banners/"+n[0].banner+".jpg")}),$.getJSON("../include/content/blog.json",function(t){t.forEach(t=>{n("blog-content",t.code,t.image,t.title,t.desc,t.date)})})});