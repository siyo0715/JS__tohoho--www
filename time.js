// 動かない時計

dd = new Date();
document.write(dd.toLocaleString());


//動く

window.onload = function() {
  setInterval(function() {
    var dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  }, 1000);
}