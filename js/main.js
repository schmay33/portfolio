const myImage = document.getElementById("myImage");

window.addEventListener("load", async () => {
	// const preloader = document.querySelector(".preloader");
	// const homepage = document.querySelector("#homepage");
	//after 2.5 seconds fade out the preloader
	// setTimeout(() => {
	// 	preloader.classList.add("preloader-fadeOut");
	// 	homepage.classList.add("fadeIn");
	// }, 2000);

	myImage.addEventListener("mouseover", () => {
		scaleImage(myImage);
	});
});

function scaleImage(img) {
    img.style.animation = "scale-animation 1s ease-in-out";
}
