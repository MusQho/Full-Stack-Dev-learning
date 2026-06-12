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

// alert(createStatuMessage(daysStudied));
// alert(createStatuMessage(10));

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

    if (visitorName === "") {
        alert("Nama tidak boleh kosong! Tolong isi terlebih dahulu.");
        return;
    }

    headingTitle.innerText = "Welcome to Alby's Tech Space!";
    headingTitle.classList.toggle("active-title");
    alert("Halo " + visitorName + ", pesan kamu berhasil terkirim!");
});

const developerProfile = {
    name: "MUH. DHUHA QOLBY TAQIYYA",
    role: "Full-Stack Web Developer",
    daysStudied: 41,
    isGraduateCSS: true
}

console.log(developerProfile.role);

const studyHistory = [
    { course: "HTML", duration: 15, isDone: true },
    { course: "CSS", duration: 14, isDone: true },
    { course: "JAVASCRIPT", duration: 15, isDone: false },
];

console.log(studyHistory[1].course);

const listContainer = document.getElementById("history-list");
for (let i = 0; i < studyHistory.length; i++) {
    listContainer.innerHTML += "<li>Modul: " + studyHistory[i].course + " (" + studyHistory[i].duration + " days)</li>";
}

// JSON = [
//     {"course": "HTML", "duration": 15, "isDone": true},
//     {"course": "CSS", "duration": 14, "isDone": true},
//     {"course": "JAVASCRIPT", "duration": 15, "isDone": false} 
// ]

const studyHistoryJSON = JSON.stringify(studyHistory);

console.log(studyHistoryJSON);

const dataKirimanServer = studyHistoryJSON;

const parsedData = JSON.parse(dataKirimanServer);
console.log(parsedData[0].course);

localStorage.setItem("localStudyData", studyHistoryJSON);

console.log("Data berhasil dikunci kedalam localStorage");

const ambilDataText = localStorage.getItem("localStudyData");
const bongkarTextData = JSON.parse(ambilDataText);
console.log(bongkarTextData[1].course);

const counterDisplay = document.getElementById("counter-display");
const incrementBtn = document.getElementById("increment-btn");

let currentData = localStorage.getItem("savedData");

if (currentData !== null) {
    currentData = Number(currentData);
}
else {
    currentData = 0;
}

incrementBtn.addEventListener("click", function () {
    currentData++
    counterDisplay.innerText = currentData;
    localStorage.setItem("savedData", currentData);
});


// console.log("Langkah 1: Menyalakan Pc");
// // setTimeout if you want call once
// setTimeout(function() {
//     console.log("Lngkah 2: Windows berhasil dimuat") // The text will appear last after the delay time is over.
// }, 2000); // don't forget put a comma before the time delay
// console.log("Langkah 3: Membuka VS code");

// function downloadModul(selesaiCallback) {
//     setTimeout(function () {
//         console.log("Proses: Modul JavaScript Berhasil Di-download."); //This text will appear first
//         selesaiCallback(); //parameters that will call downloadModul(function () {...});
//     }, 3000);
// }

// downloadModul(function () {
//     console.log("Selesai: Membuka materi bimbingan Day 52."); //This text will appear last
//     setTimeout(function () {
//         console.log("Proses Akhir: Mulai mengetik kode pemrograman.");
//     }, 2000);
// });

function cekKelulusanCSS() {
    // make a promise with "new" in front of it
    return new Promise(function (resolve, reject) {
        let lulus = true;

        if (lulus) {
            resolve("Selamat Alby, Anda lulus CSS"); //resolve used if the process is successful in this case if lulus = true
        }
        else {
            reject("Maaf Alby, Anda harus mengulang CSS"); //reject used if the process is unsuccessful in this case if lulus = false
            // for example: internet connection lost, file not found
        }
    });
}

cekKelulusanCSS()
    // if the status is resolved then it will be thrown at ".then"
    .then(function (pesanSukses) {
        console.log(pesanSukses); // it will display resolve("...")
    })
    // if the status is rejected then it will be thrown at ".catch"
    .catch(function (pesanGagal) {
        console.log(pesanGagal); //it will display reject("...")
    });

function downloadModulModern() {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve("Sukses 1: Modul JavaScript Berhasil Di-download.");
        }, 2000);
    });
}

function mulaiKetik() {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            let a = true;
            if (a) {
                resolve("Sukses 2: Mulai mengetik kode pemrograman modern.");
            }
            else {
                reject("Gagal: Keyboard error, tidak bisa mengetik");
            }
        }, 2000);
    });
}

// downloadModulModern()
//     .then(function(pesanSukses) {
//         console.log(pesanSukses);
//         return mulaiKetik(); // connecting 2 Promise
//     })
//     .then(function(pesanSukses) {
//         console.log(pesanSukses);
//     })
//     .catch(function(pesanGagal){ // it will run if second Promise false/rejected
//         console.log(pesanGagal);
//     });

async function eksekusiBelajar() {
    try {
        const hasil1 = await downloadModulModern();
        console.log(hasil1);
        const hasil2 = await mulaiKetik();
        console.log(hasil2);
    }
    catch (pesanGagal){
        console.log(pesanGagal); // this will take reject("Gagal: Keyboard error, tidak bisa mengetik");
    }
}
eksekusiBelajar();


async function ambilDataInternet() {
    try {
        const dataAsliDisplay = document.getElementById("api-title");

        const angkaAcak = Math.floor(Math.random() * 200) + 1;
        //Math.floor works for number becomes an integer
        //Math.random works for regenerate random number
        console.log(angkaAcak);
        const responMentah = await fetch(`https://jsonplaceholder.typicode.com/todos/${angkaAcak}`);
        const dataAsli = await responMentah.json();
        console.log("Judul tugas dari internet:", dataAsli.title);

        dataAsliDisplay.innerText = "Judul tugas dari internet: " + (dataAsli.title);
    }
    catch (error){
        console.log("Koneksi gagal:", error);

        document.getElementById("api-title").innerText = ("Gagal memuat data. Periksa koneksi internet Anda."); // The element must be called again because its scope is different.
    }
}

ambilDataInternet();