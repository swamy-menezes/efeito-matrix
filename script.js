// Const
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const yPos = Array(cols).fill(0);

// CTX
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, w, h);

// Function

function drawMatrix() {

    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    yPos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) yPos[ind] = 0;
        else yPos[ind] = y + 20;
    });
}
setInterval(drawMatrix, 50);