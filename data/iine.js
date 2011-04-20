$(document).ready(function() {
  var siteId = '57DZ';
  var title = CookieRead('title');
  var url = CookieRead('url');
  document.getElementById('page_title').innerHTML = title;
  document.getElementById('page_url').innerHTML = url;

  var div_iine = '<div id="nsc_iine" class="nsc_iine" siteId="' + siteId + 
                 '" targetUrl="' + encodeURIComponent(url)  + 
                 '" targetTitle="' + title + '"></div>';
  var div_cmt = '<div id="nsc_comments" class="nsc_comments" siteId="' + siteId +
                '" targetUrl="' + encodeURIComponent(url)  + 
                '" targetTitle="' + title + '"></div>';
  var buttons = document.getElementById('buttons');
  buttons.innerHTML = div_iine + div_cmt;
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = 'http://ngi.s3.amazonaws.com/nsc-widgets.js';
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(s);
});

function CookieRead(kword) {
  if(typeof(kword) == "undefined") {
    return "";
  }
  kword = kword + "=";
  kdata = "";
  scookie = document.cookie + ";";
  start = scookie.indexOf(kword);
  if (start != -1){
    end = scookie.indexOf(";", start);
    kdata = decodeURIComponent(scookie.substring(start + kword.length, end));
  }
  return kdata;
}