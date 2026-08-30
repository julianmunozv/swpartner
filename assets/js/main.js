/* SWPartner — mobile menu + home slider (no dependencies) */
(function () {
	"use strict";

	// ---- mobile menu ------------------------------------------------------
	var trigger = document.querySelector(".menu-trigger");
	var nav = document.getElementById("nav");

	if (trigger && nav) {
		trigger.addEventListener("click", function () {
			var open = nav.classList.toggle("is-open");
			trigger.setAttribute("aria-expanded", open ? "true" : "false");
		});
	}

	// ---- home slider ------------------------------------------------------
	var slider = document.getElementById("home-slider");
	if (!slider) return;

	var slides = Array.prototype.slice.call(slider.querySelectorAll(".slide"));
	if (slides.length < 2) return;

	var current = 0;
	var timer = null;
	var DURATION = 5000; // slider_speed 2500 + slider_duration 800, rounded up for readability

	function show(index) {
		current = (index + slides.length) % slides.length;
		slides.forEach(function (slide, i) {
			var active = i === current;
			slide.classList.toggle("is-active", active);
			slide.setAttribute("aria-hidden", active ? "false" : "true");
		});
	}

	function advance(step) {
		show(current + step);
		restart();
	}

	function restart() {
		window.clearInterval(timer);
		timer = window.setInterval(function () { show(current + 1); }, DURATION);
	}

	slider.addEventListener("click", function (event) {
		var prev = event.target.closest(".s-prev");
		var next = event.target.closest(".s-next");
		if (prev) { event.preventDefault(); advance(-1); }
		if (next) { event.preventDefault(); advance(1); }
	});

	document.addEventListener("keydown", function (event) {
		if (event.key === "ArrowLeft") advance(-1);
		if (event.key === "ArrowRight") advance(1);
	});

	show(0);
	restart();
})();
