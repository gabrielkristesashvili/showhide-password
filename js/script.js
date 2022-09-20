//      ----------------  Page Cursor  -------------------
document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
                t.style.top = n.clientY + "px",
                e.style.left = n.clientX + "px",
                e.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
}
function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
//      ------------------------------------------------

$(document).ready(function () {

        $('.far').on('click', function () {
                var passwordField = $('.password')
                var passwordFieldType = passwordField.attr('type')

                if (passwordFieldType == 'password') {
                        passwordField.attr('type', 'text')
                        $("i").last().removeClass("fa-eye");
                        $("i").last().addClass("fa-eye-slash");
                } else {
                        passwordField.attr('type', 'password')
                        $("i").last().removeClass("fa-eye-slash");
                        $("i").last().addClass("fa-eye");
                }
        });


});















