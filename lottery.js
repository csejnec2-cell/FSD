let score = 0;
function playLottery() {
    let [n1, n2, n3] = Array(3).fill(0).map(() => Math.floor(Math.random() * 10));

    document.getElementById("b1").innerText = n1;
    document.getElementById("b2").innerText = n2;
    document.getElementById("b3").innerText = n3;

    const message = document.getElementById("message");

    if (n1 === n2 && n2 === n3) {
        score += 10;
        message.innerText = "🎉 3 numbers match! +10 points";
        message.style.color = "green";
    } else if (n1 === n2 || n2 === n3 || n1 === n3) {
        score += 5;
        message.innerText = "✨ 2 numbers match! +5 points";
        message.style.color = "orange";
    } else {
        message.innerText = "Try again!";
        message.style.color = "red";
    }

    document.getElementById("score").innerText = score;
}

window.onload = playLottery;
