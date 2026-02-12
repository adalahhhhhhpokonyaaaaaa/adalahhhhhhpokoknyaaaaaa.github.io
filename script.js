// script.js
let arrayData = [12, 45, 7, 23, 56, 89, 3, 44, 91, 15];
const container = document.getElementById("array-container");

// Fungsi menampilkan array ke layar
function displayArray() {
    container.innerHTML = "";
    arrayData.forEach((val) => {
        const div = document.createElement("div");
        div.className = "box";
        div.innerText = val;
        container.appendChild(div);
    });
}

// Fungsi utama Linear Search
async function startSearch() {
    const target = parseInt(document.getElementById("target").value);
    const boxes = document.querySelectorAll(".box");
    const msg = document.getElementById("message");
    
    msg.innerText = "Mencari...";
    resetColors(boxes);

    for (let i = 0; i < arrayData.length; i++) {
        boxes[i].classList.add("checking");
        
        // Jeda 500ms agar visualisasi terlihat
        await new Promise(resolve => setTimeout(resolve, 500));

        if (arrayData[i] === target) {
            boxes[i].classList.remove("checking");
            boxes[i].classList.add("found");
            msg.innerText = `Angka ${target} ditemukan di indeks ke-${i}!`;
            return; // Berhenti jika ketemu
        }
        
        boxes[i].classList.remove("checking");
        boxes[i].classList.add("not-found");
    }
    msg.innerText = "Maaf, angka tidak ditemukan.";
}

function resetColors(boxes) {
    boxes.forEach(box => box.className = "box");
}

function resetArray() {
    location.reload();
}

displayArray();
