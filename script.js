const myslide = document.querySelectorAll('.myslide'),
      dot = document.querySelectorAll('.dot');
let counter = 1;

// Initialize the first slide
slidefun(counter);

// Set the timer for auto sliding
let timer = setInterval(autoSlide, 8000);

// Function to automatically move to the next slide
function autoSlide() {
  counter += 1;
  slidefun(counter);
}

// Function to move to the next or previous slide
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}

// Function to move to a specific slide
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}

// Function to reset the auto slide timer
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

// Function to display the current slide and update the dots
function slidefun(n) {
  let i;
  // Hide all slides
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  // Remove the active class from all dots
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' active', '');
  }
  // Reset counter if it exceeds the number of slides
  if (n > myslide.length) {
    counter = 1;
  }
  // Reset counter if it is less than 1
  if (n < 1) {
    counter = myslide.length;
  }
  // Display the current slide and set the corresponding dot as active
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}