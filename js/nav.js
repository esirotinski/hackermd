(function(){
  var s=sessionStorage.nav;
  if(s){
    var e=document.createElement('div');
    e.innerHTML=s;
    document.body.insertBefore(e,document.body.firstChild);
  }else{
    fetch('nav.html').then(function(r){return r.text()}).then(function(h){
      sessionStorage.nav=h;
      var e=document.createElement('div');
      e.innerHTML=h;
      document.body.insertBefore(e,document.body.firstChild);
    });
  }
})();
