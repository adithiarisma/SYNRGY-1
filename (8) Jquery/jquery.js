let warna = ["#f8efc9", "#f8e1de", "#91b8e7", "#ff4000", "#ff8000", "#00ff00", "#00ffbf", "#8000ff", "#ff00bf"];
$(document).ready(function() {
  for (let i = 0; i <= 9; i++) {
    $("#kotak" + i).css("width", "200px");
    $("#kotak" + i).css("height", "200px");
    $("#kotak" + i).css("margin-right", "50px");
    $("#kotak" + i).css("margin-bottom", "50px");
    $("#kotak" + i).css("background-color", warna[i]);

    $("#kotak" + i).on("mouseover", function() {
      $("#kotak").css("background-color", warna[i]);
    });
  }
});
