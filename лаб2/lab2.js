function q(a, b, c) {
if (a == 0) return "Ошибка, а=0!";
var D = b * b - 4 * a * c;
var x1, x2;
if (D > 0) {
x1 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(3);
x2 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(3);
return "Дискриминант(D)=" + D + "\nКорни уравнения: x1=" + x1 + ",x2=" + x2;
} else if (D == 0) {
x1 = (-b / (2 * a)).toFixed(3);
return "Дискриминант(D)=" + D + "\nКорней уравнения: x1=" + x1;
} else if (D < 0) return "Дискриминант (D)=" + D + "\nКорни нет";
}
function js() {
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
var result = q(a, b, c);
document.getElementById("result").innerHTML = result;
}
