function dongho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var gionew = new Date().getHours();
    var phutnew = new Date().getMinutes();
    var giaynew = new Date().getSeconds();
    gio.innerHTML = gionew;
    phut.innerHTML = phutnew;
    giay.innerHTML = giaynew;
}
var demgio = setInterval(dongho, 1000);