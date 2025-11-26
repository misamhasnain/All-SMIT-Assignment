function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("hide");
}



// PAGE LOADER REMOVE
window.onload = () => {
    document.querySelector(".loader").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
    }, 500);
};

// DARK MODE
document.getElementById("toggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// SEARCH FILTER
document.getElementById("search").addEventListener("input", e => {
    let value = e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        card.style.display =
            card.innerText.toLowerCase().includes(value) ? "block" : "none";
    });
});

// SIDEBAR ACTIVE SELECT
document.querySelectorAll(".sidebar ul li").forEach(li => {
    li.addEventListener("click", () => {
        document.querySelector(".sidebar ul li.active")?.classList.remove("active");
        li.classList.add("active");
    });
});

