const developerName = "MUH. DHUHA QOLBY TAQIYYA";
const daysStudied = 26;
const welcomeMessage = "Halo, saya " + developerName + " dan saya sudah belajar selama " + daysStudied + " hari!";
alert(welcomeMessage);

if (daysStudied >= 30) {
    alert("Luar biasa! Kamu sudah belajar lebih dari sebulan!");
} else if (daysStudied > 20) {
    alert("Keren, kamu sudah konsisten belajar lebih dari 20 hari!");
} else {
    alert("Semangat! Terus lanjutkan belajarmu setiap hari!");
}