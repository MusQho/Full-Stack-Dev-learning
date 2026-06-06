const developerName = "MUH. DHUHA QOLBY TAQIYYA";
const daysStudied = 26;

function createStatuMessage(hari) {
    if (hari >= 30) {
        return("Luar biasa! Kamu sudah belajar lebih dari sebulan!");
    } else if (hari > 20) {
        return("Keren, kamu sudah konsisten belajar lebih dari 20 hari!");
    } else {
        return("Semangat! Terus lanjutkan belajarmu setiap hari!");
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