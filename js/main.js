const arrowLinks = document.getElementsByClassName("arrow-link");

//loop through all the arrow links and apply on hover event
for (let i = 0; i < arrowLinks.length; i++) {
  arrowLinks[i].addEventListener("mouseover", function() {
    //this.style.color = "#ffc107";
  });
  arrowLinks[i].addEventListener("mouseout", function() {
    //this.style.color = "inherit";
  });
}