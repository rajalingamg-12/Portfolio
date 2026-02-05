function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Form alert (optional)
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent! Thank you for contacting me.");
});
