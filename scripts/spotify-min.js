$(document).ready(function(){var e=document.getElementById("results-template").innerHTML,t=Handlebars.compile(e),n=document.getElementById("results"),u=function(e){$.ajax({url:"https://api.spotify.com/v1/search",data:{q:e,type:"album"},success:function(e){n.innerHTML=t(e)}})};document.getElementById("search-form").addEventListener("submit",function(e){e.preventDefault(),u(document.getElementById("query").value)},!1)});