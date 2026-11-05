$(document).ready(function() {
  $("#btnEvaluate").click(function() {
    let amount = parseFloat($("#totalAmount").val());
    let pRent = parseFloat($("#pRent").val()) || 0;
    let pAcc = parseFloat($("#pAccessories").val()) || 0;
    let pEmg = parseFloat($("#pEmergency").val()) || 0;
    let pSav = parseFloat($("#pSaving").val()) || 0;

    let totalPercentage = pRent + pAcc + pEmg + pSav;

    // Validate positive balance and 100% total
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to manage.");
      $("#displayResults").hide();
      return;
    }

    if (totalPercentage !== 100) {
      alert("Unable to divide the amount! The total sum of percentages is " + totalPercentage + "%. It must equal exactly 100%.");
      $("#displayResults").hide();
      return;
    }

    // Calculate split values
    let rentVal = (amount * pRent) / 100;
    let accVal = (amount * pAcc) / 100;
    let emgVal = (amount * pEmg) / 100;
    let savVal = (amount * pSav) / 100;

    // Update result boxes
    $("#valRent").text("Rs." + rentVal.toFixed(0));
    $("#valAccessories").text("Rs." + accVal.toFixed(0));
    $("#valEmergency").text("Rs." + emgVal.toFixed(0));
    $("#valSaving").text("Rs." + savVal.toFixed(0));

    // Reveal results
    $("#displayResults").fadeIn(300).css("display", "flex");
  });
});