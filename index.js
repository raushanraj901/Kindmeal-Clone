import { navbar , categoryItems} from "./navbar.js";
let n = document.getElementById("navbar");
let cItems = document.getElementById("items_category");
cItems.innerHTML = categoryItems();
n.innerHTML = navbar();