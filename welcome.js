$(document).ready(function () {
  const h = new Date().getHours()
  if (h < 12) $("#greet").text("Good Morning")
  else if (h < 18) $("#greet").text("Good Afternoon")
  else $("#greet").text("Good Evening")

  $("#changeBtn").on("click", () => {
    $("#greet").text("Keep going, you're doing great!")
  })

  $("#toggleBtn").on("click", () => {
    $("#msg").toggle()
  })

  $("#greet").on("click", () => alert("Greeting clicked"))
})
