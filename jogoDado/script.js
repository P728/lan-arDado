function lanceDado() {
    const img = document.getElementById("img");
    let valor = Math.floor(1 + Math.random() * 6);
    console.log(valor);
    img.setAttribute("src", "dice-" + valor + ".png")
}
function anim() {
    setTimeout(lanceDado, 500);
    const img = document.getElementById("img");
    img.setAttribute("src", "dice-roll.gif")
}