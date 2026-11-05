$(document).ready(function() {
  const glassColors = ["#1565c0", "#e65100", "#4a148c", "#00838f", "#2e7d32", "#455a64"];
  const bodyColors = ["#f44336", "#ffeb3b", "#ff9800", "#00e676", "#e91e63", "#76ff03"];

  let glassIndex = 4;
  let bodyIndex = 5;
  let currentTyreSize = 50;

  // 1. Change Glass Color
  $("#btnGlassColor").click(function() {
    glassIndex = (glassIndex + 1) % glassColors.length;
    $("#carGlass").css("border-bottom-color", glassColors[glassIndex]);
  });

  // 2. Change Body Color
  $("#btnBodyColor").click(function() {
    bodyIndex = (bodyIndex + 1) % bodyColors.length;
    $("#carBody").css("background-color", bodyColors[bodyIndex]);
  });

  // 3. Tyre Size Increase
  $("#btnTyreInc").click(function() {
    if (currentTyreSize < 75) {
      currentTyreSize += 5;
      $(".tyre").css({
        "width": currentTyreSize + "px",
        "height": currentTyreSize + "px"
      });
    }
  });

  // 4. Tyre Size Decrease
  $("#btnTyreDec").click(function() {
    if (currentTyreSize > 25) {
      currentTyreSize -= 5;
      $(".tyre").css({
        "width": currentTyreSize + "px",
        "height": currentTyreSize + "px"
      });
    }
  });

  // 5. Reset to original look
  $("#btnReset").click(function() {
    currentTyreSize = 50;
    glassIndex = 4;
    bodyIndex = 5;
    $("#carGlass").css("border-bottom-color", "#2e7d32");
    $("#carBody").css("background-color", "#76ff03");
    $(".tyre").css({
      "width": "50px",
      "height": "50px"
    });
  });
});