// -----Show/Hide Pssword-----

$(document).ready(function () {
  $("#show_hide_password a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password input").attr("type") == "text") {
      $("#show_hide_password input").attr("type", "password");
      $("#show_hide_password i").addClass("fa-eye-slash");
      $("#show_hide_password i").removeClass("fa-eye");
    } else if ($("#show_hide_password input").attr("type") == "password") {
      $("#show_hide_password input").attr("type", "text");
      $("#show_hide_password i").removeClass("fa-eye-slash");
      $("#show_hide_password i").addClass("fa-eye");
    }
  });
});

// -----Left Sidebar-----
$(document).on("click", "#sidebar li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// -----Left menu sidebar dp toggle-----

$(".sub-menu ul").hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this)
    .find(".right")
    .toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
});