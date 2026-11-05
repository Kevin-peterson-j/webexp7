$(document).ready(function() {
  function computeBill() {
    let qColor = parseInt($("#qtyColor").val()) || 0;
    let qBrown = parseInt($("#qtyBrown").val()) || 0;
    let qMilky = parseInt($("#qtyMilky").val()) || 0;
    let qBlackForest = parseInt($("#qtyBlackForest").val()) || 0;

    let total = (qColor * 300) + (qBrown * 200) + (qMilky * 250) + (qBlackForest * 350);
    $("#totalBill").text("Rs." + total);
  }

  $("#btnOrder").click(function() {
    computeBill();
  });

  // Calculate default display totals on load
  computeBill();
});