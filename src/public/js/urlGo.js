function makeUrl() {
  var input = document.getElementById("website");
  var target = document.getElementById("urlGo");

  var link = document.createElement("link");
  link.href = input.value;

  whois = "https://whois.domaintools.com/";
  domain = link.hostname;

  if (url.value != "") {
    target.innerHTML = "<a target='_blank' href='" + input.value + "'>URL</a> | ";
    target.innerHTML += "<a target='_blank' href='" + whois + domain + "'>Whois</a>";

  } else
    goToUrl.innerHTML = "";
}

function getMap() {
  var input = document.getElementById("company");
  var target = document.getElementById("bingMap");

  var bing = "https://www.bing.com/maps/default.aspx?where1=";

  if (input.value != "")
    target.innerHTML = "<a target='_blank' href='" + bing + input.value + "'>Map</a>";
  else
    target.innerHTML = "";
}

function doReset() {
  var goToUrl = document.getElementById("urlGo");
  var map = document.getElementById("bingMap");
  map.innerHTML = "";
  goToUrl.innerHTML = "";
  
}
