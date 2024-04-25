if ((window.outerHeight - window.innerHeight) > 150 || (window.outerWidth - window.innerWidth) > 100) {
    if (!csp_user() && !is_mobile()) {
        window.location.replace("/");
    }
}

window.onresize = function () {
    if ((window.outerHeight - window.innerHeight) > 100 || (window.outerWidth - window.innerWidth) > 20) {
        if (!csp_user() && !is_mobile()) {
            window.location.replace("/");
        }
    }
}

let y = 110
let i = 0
let l = [2, -1, 3, 2, 1, -2]
let k = [104, 116, 116, 112, 115, 58, 47, 47, 99, 115, 112, 46, 114, 105, 106, 110, 109, 117, 110, 46, 111, 114, 103]

document.onkeypress = function (e) {
    e = e || window.event
    y = y + l[i]
    if (e.which == y) {
        i++
    } else {
        y = 100
        i = 0
    }
    if (i == l.length) {
        let img = document.getElementById('imageimg')
        img.onclick = function () {window.location.replace(String.fromCharCode.apply(null, k))}
    } 
}

import { csp } from "./csp.js"
function csp_user() {
    if (localStorage.getItem(csp[0]) == csp[1]) {
        return true
    } else {
        return false
    }
}

function is_mobile() {
    return window.screenX === 0 && navigator.maxTouchPoints > 0 && screen.availWidth < 1000 ? true : false
}