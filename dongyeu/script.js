// Hiện thông điệp khi nhấn nút
function showMessage() {
    document.getElementById('hidden-message').style.display = 'block';
}

// Hiệu ứng trái tim rơi
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
    return {
        x: Math.random() * canvas.width,
        y: 0,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.5
    };
}

function drawHeart(heart) {
    ctx.beginPath();
    ctx.moveTo(heart.x, heart.y + heart.size / 4);
    ctx.bezierCurveTo(
        heart.x - heart.size / 2, heart.y - heart.size / 4,
        heart.x - heart.size, heart.y + heart.size / 2,
        heart.x, heart.y + heart.size
    );
    ctx.bezierCurveTo(
        heart.x + heart.size, heart.y + heart.size / 2,
        heart.x + heart.size / 2, heart.y - heart.size / 4,
        heart.x, heart.y + heart.size / 4
    );
    ctx.fillStyle = `rgba(255, 102, 102, ${heart.opacity})`;
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.1) hearts.push(createHeart());
    hearts = hearts.filter(heart => heart.y < canvas.height);
    hearts.forEach(heart => {
        heart.y += heart.speed;
        drawHeart(heart);
    });
    requestAnimationFrame(animate);
}

animate();