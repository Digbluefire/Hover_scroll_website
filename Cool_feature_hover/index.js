//Store gallery element in a variable
const gallery = document.getElementById("gallery");

//Adds a listener in the window to check for mouse movements, grabs the mouses X and Y position from the event
window.onmousemove = e => {
    const mouseX = e.clientX,
          mouseY = e.clientY;

    // By dividing the X and Y position of the mouse by width and height respectively we can get the decimal value which is a representative of the ratio of the page that the mouse cursor currently is in.
    const xDecimal = mouseX / window.innerWidth,
          yDecimal = mouseY / window.innerHeight;   

    const maxX = gallery.offsetWidth - window.innerWidth,
          maxY = gallery.offsetHeight - window.innerHeight;

    // Multiply the decimal values by the height and width of the gallery, multiply by negative -1 so that the viewport moves in the right direction with the mouse
    const panX = gallery.offsetWidth * xDecimal * -1,
          panY = gallery.offsetHeight * yDecimal * -1;

    //Update the css to transform the galleries position by that number of pixels
    gallery.animate({transform: `translate(${panX}px, ${panY}px)`}, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
      })
}