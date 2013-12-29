// Script event actual fixed movil
var num=95;$(window).bind("scroll",function(){$(window).scrollTop()>num?$(".eventActual").addClass("fixed"):$(".eventActual").removeClass("fixed")});