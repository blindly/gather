function makeUrl() {
  var input = document.getElementById("website");
  var target = document.getElementById("urlGo");

  var link = document.createElement("a");
  link.href = input.value;
  
  var hostname = link.hostname;
  var urlParts = hostname.replace('http://','').replace('www.','').replace('https://','').split(/[/?#]/);
  var domain = urlParts[0];

  whois = "https://www.whois.com/whois/";
  ezreport = "https://www.easycounter.com/report/";
  
  console.log( domain );

  if (input.value != "") {
    target.innerHTML = "<a target='_blank' href='" + input.value + "'>URL</a> | ";
    target.innerHTML += "<a target='_blank' href='" + whois + domain + "'>Whois</a> | ";
    target.innerHTML += "<a target='_blank' href='" + ezreport + domain + "'>Report</a>";
    
    

  } else
    target.innerHTML = "";
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
