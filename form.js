$("#reg").on("submit", function (e) {
  e.preventDefault()

  let ok = true
  $(".err").removeClass("err")
  $("#msg").text("")

  const name = $("#name").val().trim()
  const email = $("#email").val().trim()
  const pass = $("#pass").val().trim()

  if (!name) { $("#name").addClass("err"); ok = false }
  if (!email || !email.includes("@")) { $("#email").addClass("err"); ok = false }
  if (pass.length < 8) { $("#pass").addClass("err"); ok = false }

  if (ok) $("#msg").text("Form Submitted Successfully")
})
