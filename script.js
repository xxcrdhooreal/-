// script.js

// 1. VIDEO CONTROL: Otomatis memutar saat tab terlihat dan berhenti saat tab di-minimize/ditinggalkan
document.addEventListener('visibilitychange', () => {
    const video = document.getElementById('bg-video');
    if (document.hidden) {
        // Jika tab tidak aktif / ditinggalkan
        video.pause();
    } else {
        // Jika tab kembali dibuka
        video.play().catch(error => {
            console.log("Auto-play was prevented by browser.");
        });
    }
});

// 3. WATERMARK DINAMIS
document.getElementById('current-year').textContent = new Date().getFullYear();

// 2. SECURITY (ANTI-INSPECT) Custom Alert
function showAlert() {
    const alertBox = document.getElementById('custom-alert');
    if (alertBox) {
        alertBox.classList.remove('hidden');
    }
}

document.getElementById('close-alert').addEventListener('click', function() {
    document.getElementById('custom-alert').classList.add('hidden');
});

// Mematikan Klik Kanan (Context Menu)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showAlert();
});

// Mematikan Kombinasi Keyboard (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, F5, Ctrl+R)
document.onkeydown = function(e) {
    // Tombol F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        showAlert();
        return false;
    }
    
    // Ctrl+Shift+I (Membuka Inspect Element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
        e.preventDefault();
        showAlert();
        return false;
    }
    
    // Ctrl+Shift+J (Membuka Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
        e.preventDefault();
        showAlert();
        return false;
    }

    // Ctrl+Shift+C (Membuka Inspect Cursor)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
        e.preventDefault();
        showAlert();
        return false;
    }
    
    // Ctrl+U (Membuka Source Code)
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
        e.preventDefault();
        showAlert();
        return false;
    }
    
    // Tombol F5 (Refresh biasnaya diminta untuk dihilangkan walau bisa mematikan fungsi navigasi tapi kadang diminta spesifik oleh pembeli)
    // Jika tidak ingin diblok semua F5, Anda bisa membatasi sesuai kebutuhan, tapi mengikuti permintaan:
    if (e.key === 'F5' || e.keyCode === 116) {
        e.preventDefault();
        showAlert();
        return false;
    }

    // Ctrl+R (Refresh Manual)
    if (e.ctrlKey && (e.key === 'r' || e.key === 'R' || e.keyCode === 82)) {
        e.preventDefault();
        showAlert();
        return false;
    }
};

// Opsional Tambahan: Jika web di-inspect manual melalui menu browser
// dan user tidak sengaja masuk ke Console, kita bisa spamming console buffer
setInterval(function() {
    console.log("%cSTOP! DILARANG MENGINTIP KODE", "color: red; font-size: 50px; font-weight: bold;");
}, 1000);
