//toggle is-active on element #hamburger when clicked
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

//add event listener to hamburger
hamburger.addEventListener("click", function () {
	if (hamburger.classList.contains("is-active")) {
		hamburger.classList.remove("is-active");
		overlay.classList.remove("show");
		hamburger.setAttribute("aria-expanded", "false");
	} else {
		hamburger.classList.add("is-active");
		overlay.classList.add("show");
		hamburger.setAttribute("aria-expanded", "true");
	}
});

const options = document.getElementsByClassName("option");

// loop through options
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function (e) {
        const aOption = document.getElementsByClassName("active")[0];
		const el = e.target;
		if (!el.classList.contains("active")) {
			aOption.classList.remove("active");
			el.closest(".option").classList.add("active");
		}
	});
}
