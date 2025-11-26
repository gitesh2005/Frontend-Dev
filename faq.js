$(".q").on("click", function () {
  $(this).next(".a").slideToggle()
})

$(".q").on("dblclick", function () {
  $(".a").slideUp()
})

$(".q").hover(
  function () { $(this).css("color", "blue") },
  function () { $(this).css("color", "black") }
)

$("input").on("focus", function () {
  $(this).parent().prev(".q").css("background", "#eef")
})

$("input").on("blur", function () {
  $(this).parent().prev(".q").css("background", "")
})
