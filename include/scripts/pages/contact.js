/* 
GSA WEB Proyect -- v2.0 
Author: Carlos Padilla (cpadlab) -- https://github.com/cpadlab
Proyect: https://github.com/gsalhawd/gsalhawd.github.io
*/
$(document).ready(function(){$.getJSON("../include/content/info.json",function(t){var e=t[0].banner;$('meta[property="og:image"]').attr("content","/include/assets/banners/"+e+".jpg"),$('meta[name="twitter:image"]').attr("content","/include/assets/banners/"+e+".jpg");var a=t[2].mail,n=t[2].instagram,r=t[2].phone,c=t[2].facebook;t[2].location,$("#ccl-phone").attr("href","mailto:"+a).text(a),$("#ccl-mailto").attr("href","tel:"+r).text(r),$("#ccl-ig").attr("href",n).text(n),$("#ccl-fcb").attr("href",c).text(c)})});