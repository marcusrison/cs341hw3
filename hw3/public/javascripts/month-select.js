// Wait for the DOM to be ready
$(document).ready(function() {
    // Catch the month selection event
    $(".dropdown-menu li").click(function() {
      // Update the selected month text
      $("#selected-month").text("Orders for " + $(this).text());
    });
  });