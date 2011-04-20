const widgets = require("widget");
const data = require('self').data;
var panels = require("panel");
var tabs = require("tabs");

var main = panels.Panel({
  width: 318,
  height: 312,
  contentURL: data.url("main.html")
});

widgets.Widget({
  id: "show-nsc-btn",
  label: "nsc",
  contentURL: "http://www.socialgraphmarketing.net/common/favicon.ico",
  panel: main
});

var iinew = widgets.Widget({
  id: "show-iine-btn",
  label: "iine",
  contentURL: "http://www.socialgraphmarketing.net/common/favicon.ico",
  panel: panels.Panel({
          width: 310,
          height: 150,
          contentScriptFile: data.url('panel.js'),
          contentScriptWhen: "ready",
          contentURL: data.url("iine.html"),
          onShow : function() {
              this.postMessage({url:tabs.activeTab.url,title:tabs.activeTab.title});
          }
        })
});



