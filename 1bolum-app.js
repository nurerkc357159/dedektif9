// Sayfa yüklendiğinde localStorage'dan ismi al ve göster
window.onload = function() {
    let kayıtlıAd = localStorage.getItem("kullanıcıAdı");
    if (kayıtlıAd) {
        ismiGöster(kayıtlıAd);
        document.getElementById("kullanıcıAdı").value = kayıtlıAd; // input'u da doldur
    }
};

function ismiKaydet() {
    let ad = document.getElementById("kullanıcıAdı").value;
    localStorage.setItem("kullanıcıAdı", ad); // Kalıcı olarak sakla
    ismiGöster(ad);
}

function ismiGöster(ad) {
    let isimAlanları = document.querySelectorAll(".herIsim");
    isimAlanları.forEach(function(el) {
        el.innerText = ad;
    });
}

function ismiSil() {
    localStorage.removeItem("kullanıcıAdı");
    ismiGöster(""); // Sayfadan da temizle
    document.getElementById("kullanıcıAdı").value = "";
}