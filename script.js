function tampilkanData() {
    document.getElementById("profile-name").innerText = localStorage.getItem("name") || "N/A";
    document.getElementById("profile-role").innerText = localStorage.getItem("role") || "N/A";
    document.getElementById("profile-availability").innerText = localStorage.getItem("availability") || "N/A";
    document.getElementById("profile-age").innerText = localStorage.getItem("age") || "N/A";
    document.getElementById("profile-location").innerText = localStorage.getItem("location") || "N/A";
    document.getElementById("profile-yoe").innerText = localStorage.getItem("yoe") || "N/A";
    document.getElementById("profile-email").innerText = localStorage.getItem("email") || "N/A";
}

window.onload = tampilkanData;

document.getElementById("edit-button").onclick = function () {
    document.getElementById("form-section").style.display = "block";

    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("role").value = localStorage.getItem("role") || "";
    document.getElementById("availability").value = localStorage.getItem("availability") || "";
    document.getElementById("age").value = localStorage.getItem("age") || "";
    document.getElementById("location").value = localStorage.getItem("location") || "";
    document.getElementById("yoe").value = localStorage.getItem("yoe") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
};

document.getElementById("edit-button").onclick = function () {
    document.getElementById("form-section").style.display = "block";

    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("role").value = localStorage.getItem("role") || "";
    document.getElementById("availability").value = localStorage.getItem("availability") || "";
    document.getElementById("age").value = localStorage.getItem("age") || "";
    document.getElementById("location").value = localStorage.getItem("location") || "";
    document.getElementById("yoe").value = localStorage.getItem("yoe") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
};

document.getElementById("profile-form").onsubmit = function (event) {
    event.preventDefault();

    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("role", document.getElementById("role").value);
    localStorage.setItem("availability", document.getElementById("availability").value);
    localStorage.setItem("age", document.getElementById("age").value);
    localStorage.setItem("location", document.getElementById("location").value);
    localStorage.setItem("yoe", document.getElementById("yoe").value);
    localStorage.setItem("email", document.getElementById("email").value);

    document.getElementById("profile-form").reset();
    tampilkanData();
    document.getElementById("form-section").style.display = "none";
};