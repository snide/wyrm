$( document ).ready(function() {
  // Shift nav in mobile when clicking the menu.
  $("[data-toggle='wy-nav-top']").click(function() {
    $("[data-toggle='wy-nav-shift']").toggleClass("shift");
    window.shifted = true;
  });
  // Close menu when you click a link.
  $(".wy-menu-vertical .current li").click(function() {
    $("[data-toggle='wy-nav-shift']").removeClass("shift");
  });
});
