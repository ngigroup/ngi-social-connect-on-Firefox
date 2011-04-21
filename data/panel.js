self.on('message', function(info) {
  window.document.body.innerHTML = '';
  window.document.cookie = "url=" + encodeURIComponent(info.url) + ";";
  window.document.cookie = "title=" + encodeURIComponent(info.title) + ";";
  window.document.location.reload();
});