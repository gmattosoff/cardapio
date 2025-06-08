const breakfasts = Array.from(document.getElementsByClassName("Breakfast"));
const lunches = Array.from(document.getElementsByClassName("Lunch"));
const shakes = Array.from(document.getElementsByClassName("Shakes"));
const dinners = Array.from(document.getElementsByClassName("Dinner"));
const all = [...breakfasts, ...lunches, ...shakes, ...dinners];
const lis = Array.from(document.querySelectorAll("li"));
const c1 = document.getElementById("column1")

lis.forEach((li) => {
    li.addEventListener("click", function() {
        for (var i=0; i < all.length; i++) {
            if (li.id == all[i].className || li.id == "All") {
                all[i].style.display = "flex";
            } else {
                all[i].style.display = "none";
            };
        };
    });
});
