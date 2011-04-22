$(document).ready(function() {
  var siteId = '5StB';
  var title = CookieRead('title');
  var url = CookieRead('url');
  
  $('#page_title').text(title);
  $('#page_url').text(url);

  var div_iine = '<div id="nsc_iine" class="nsc_iine" siteId="' + siteId + 
                 '" targetUrl="' + encodeURIComponent(url)  + 
                 '" targetTitle="' + title + '"></div>';
  var div_cmt = '<div id="nsc_comments" class="nsc_comments" siteId="' + siteId +
                '" targetUrl="' + encodeURIComponent(url)  + 
                '" targetTitle="' + title + '"></div>';
  var buttons = $('#buttons');
  buttons.append(div_iine);
  buttons.append(div_cmt);
  $('head').append('<script type="text/javascript" src="http://ngi.s3.amazonaws.com/nsc-widgets.js"></script>');
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