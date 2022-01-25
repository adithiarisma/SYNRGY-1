let warna = ["#f8efc9", "#f8e1de", "#91b8e7"];
for (let i = 0; i <= 3; i++) {
  document.getElementById("kotak" + i).style.height = "200px";
  document.getElementById("kotak" + i).style.width = "200px";
  document.getElementById("kotak" + i).style.marginRight = "50px";
  document.getElementById("kotak" + i).style.marginBottom = "50px";
  document.getElementById("kotak" + i).style.backgroundColor = warna[i];
}
