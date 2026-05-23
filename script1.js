function showPopup() {
  let popup = document.getElementById("popup");

  // slide in
  popup.style.right = "20px";

  // slide out after 3 seconds
  setTimeout(() => {
    popup.style.right = "-550px";
  }, 3000);
}

// repeat every 10 secondss
setInterval(showPopup, 10000); 