$(document).ready(function() {
    // Catch Order button click event
    $("button").click(function() {
      var selectedTopping;
      if (document.getElementById("cherry").checked) {
          selectedTopping = "Cherry";
      } else if (document.getElementById("chocolate").checked) {
          selectedTopping = "Chocolate";
      } else {
          selectedTopping = "Plain"
      }
      var selectedQuantity = $("#cheesecake_quantity option:selected").val();
      var notes = $("textarea").val();
      if (notes.indexOf("vegan") !== -1) {
       alert("Warning: The cheesecakes contain dairy.");
      } else {
          $("section").remove();
          $("button").remove();
           $("main").append("<p>Thank you! Your order has been placed</p>" +
                     "<p>Topping: " + selectedTopping + "</p>" +
                     "<p>Quantity: " + selectedQuantity + "</p>" +
                     "<p>Notes: " + notes + "</p>");
    }
  });
  });