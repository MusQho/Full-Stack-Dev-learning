const developerName = "MUH. DHUHA QOLBY TAQIYYA";
const daysStudied = 26;

function createStatuMessage(hari) {
    if (hari >= 30) {
        return ("Luar biasa! Kamu sudah belajar lebih dari sebulan!");
    } else if (hari > 20) {
        return ("Keren, kamu sudah konsisten belajar lebih dari 20 hari!");
    } else {
        return ("Semangat! Terus lanjutkan belajarmu setiap hari!");
    }
}

alert(createStatuMessage(daysStudied));
alert(createStatuMessage(10));

for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke- " + i);
}

const skills = ["HTML", "CSS", "JAVASCRIPT", "PYTHON"];
for (let i = 0; i < skills.length; i++) {
    console.log("Keahlian Saya: " + skills[i])
};

const headingTitle = document.getElementById("name-title");
const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name-input");
submitButton.addEventListener("click", function (e) {
    // preventDefault is used to prevent page refresh.
    e.preventDefault();
    const visitorName = nameInput.value;
    headingTitle.innerText = "Welcome to Alby's Tech Space!";
    headingTitle.style.color = "#1d4ed8";
    headingTitle.style.fontSize = "3rem";
    headingTitle.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.4)";
    alert("Halo " + visitorName + ", pesan kamu berhasil terkirim!");
});