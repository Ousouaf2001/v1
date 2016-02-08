
function MemberSetting() {
    var DefaultLanguage = document.getElementById("DefaultLanguage").value;
    var distance = document.getElementById("distance").value;
    var xday = document.getElementById("xday").value;

    localStorage.setItem("distance", distance);
    localStorage.setItem("DefaultLanguage", DefaultLanguage);
    localStorage.setItem("xday", xday);
    localStorage.setItem("xdayheader", xday);
    location.reload();
}

