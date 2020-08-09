var score = 0;
var Q1ans = document.getElementById("Q1-ans1");
var Q1ansb = Q1ans.nextElementSibling.innerHTML
function Q1(i) {
    var a = i.nextElementSibling.innerHTML
    if (Q1ansb === a) {
        score += 20;
    }
}
var Q2ans = document.getElementById("Q2-ans1");
var Q2ansb = Q2ans.nextElementSibling.innerHTML;
function Q2(i) {
    var a = i.nextElementSibling.innerHTML
    if (Q2ansb === a) {
        score += 20;
    }
}
var Q3ans = document.getElementById("Q3-ans1");
var Q3ansb = Q3ans.nextElementSibling.innerHTML;
function Q3(i) {
    var a = i.nextElementSibling.innerHTML
    if (Q3ansb === a) {
        score += 20;
    }
}
var Q4ans = document.getElementById("Q4-ans1");
var Q4ansb = Q4ans.nextElementSibling.innerHTML;
function Q4(i) {
    var a = i.nextElementSibling.innerHTML
    if (Q4ansb === a) {
        score += 20;
    }
}
var Q5ans = document.getElementById("Q5-ans1");
var Q5ansb = Q5ans.nextElementSibling.innerHTML;
function Q5(i) {
    var a = i.nextElementSibling.innerHTML
    if (Q5ansb === a) {
        score += 20;
    }
}
function back(j) {
    var a = j.parentNode;
    a.style.display = "none"
    var c = j.parentNode.previousElementSibling;
    c.style.display = "block"
}
function next(k) {
    var b = k.parentNode;
    b.style.display = "none";
    var c = k.parentNode.nextElementSibling;
    c.style.display = "block";
}
// var scorep = document.getElementById("score")
// console.log(scorep)
function finish() {
    var a = document.getElementById("score")
    var b = document.getElementById("remark");
    if (score == 20) {
        a.innerText = score;
        b.innerText = "FAIL"
        alert("You Have Scored 0 Fail")
    }else if (score == 20) {
        alert("You Have Scored 20 Fail")
    }else if (score == 40) {
        alert("You Have Scored 40 C-Grade")
    }else if (score == 60) {
        alert("You Have Scored 60 B-Grade")
    }else if (score == 80) {
        alert("You Have Scored 80 A-Grade")
    }else if (score == 100) {
        alert("You Have Scored 100 A++-Grade")
    }
}