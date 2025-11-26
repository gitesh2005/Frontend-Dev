$(".item[data-discount='true']").addClass("discount")

$(".item").on("click", function () {
  $(this).toggleClass("highlight")
  if ($(this).data("stock") === "no") alert("Out of stock")
})

$(".fav").on("click", function (e) {
  e.stopPropagation()
  $(this).toggleClass("selected")
})

$(".item").hover(
  function () { $(this).append(" - More details") },
  function () { $(this).text($(this).text().split(" -")[0]) }
)
