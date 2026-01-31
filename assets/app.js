(function(){
  // Set year in footer
  var el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
})();
