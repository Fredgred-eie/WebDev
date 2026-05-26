function showPopup() {
  let popup = document.getElementById("popup");

  // slide in
  popup.style.right = "20px";

  // slide out after 7 seconds
  setTimeout(() => {
    popup.style.right = "-550px";
  }, 7000);
}

// repeat every 60 secondss
setInterval(showPopup, 60000); 