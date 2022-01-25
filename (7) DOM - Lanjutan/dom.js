let warna = ["#f8efc9", "#f8e1de", "#91b8e7", "#ff4000", "#ff8000", "#00ff00", "#00ffbf", "#8000ff", "#ff00bf"];
for (let i = 0; i <= 9; i++) {
  document.getElementById("kotak" + i).style.height = "200px";
  document.getElementById("kotak" + i).style.width = "200px";
  document.getElementById("kotak" + i).style.marginRight = "50px";
  document.getElementById("kotak" + i).style.marginBottom = "50px";
  document.getElementById("kotak" + i).style.backgroundColor = warna[i];
  document.getElementById("kotak" + i).onmouseover = function() {
    mouseOver();
  };
  function mouseOver() {
    document.getElementById("kotak").style.backgroundColor = warna[i];
  }
}
