// Selecting the main container where mouse movement will be tracked
var main = document.querySelector("#main");

// Selecting the custom cursor element that will follow the mouse
var cursor = document.querySelector("#cursor");

// Selecting the image container where hover effects will happen
var imageDiv = document.querySelector("#image");

// Whenever mouse moves inside #main, animate the cursor to follow it smoothly
main.addEventListener("mousemove", function(dets) {
  gsap.to(cursor, {
    x: dets.x, // Move cursor to mouse's X position
    y: dets.y, // Move cursor to mouse's Y position
    duration: 0.6, // Smooth transition time
  });
});

// When mouse enters the image area, show "Meooww" and enlarge the cursor
imageDiv.addEventListener("mouseenter", function() {
  cursor.innerHTML = "Meooww"; // Show text inside cursor
  gsap.to(cursor, {
    scale: 4, // Make cursor 4x bigger
    backgroundColor: "#ffffff8a", // Slightly transparent white background
    duration: 0.3, // Quick animation
  });
});

// When mouse leaves the image area, reset cursor to normal
imageDiv.addEventListener("mouseleave", function() {
  cursor.innerHTML = ""; // Remove text
  gsap.to(cursor, {
    scale: 1, // Back to original size
    backgroundColor: "#fff", // Solid white background
    duration: 0.3, // Smooth transition
  });
});