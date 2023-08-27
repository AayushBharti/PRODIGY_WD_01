const hamb = document.querySelector(".hamb");
const navList = document.querySelector(".menu-overlay");

hamb.addEventListener("click", function() {
	navList.classList.toggle("active");
	hamb.classList.toggle("click");
}
) 
