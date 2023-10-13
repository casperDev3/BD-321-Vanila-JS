

// start point
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("pongCanvas");
    const context = canvas.getContext("2d");

    const paddleWidth = 10;
    const paddleHeight = 100;
    const ballSize = 10;

    let xPaddle1 = 10;
    let yPaddle1 = canvas.height / 2 - paddleHeight / 2;
    let xPaddle2 = canvas.width - 20;
    let yPaddle2 = canvas.height / 2 - paddleHeight / 2;

    let xBall = canvas.width / 2;
    let yBall = canvas.height / 2;
    let ballSpeedX = 5;
    let ballSpeedY = 5;

    function draw() {
        // Очищаємо поле
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Малюємо платформи
        context.fillStyle = "white";
        context.fillRect(xPaddle1, yPaddle1, paddleWidth, paddleHeight);
        context.fillRect(xPaddle2, yPaddle2, paddleWidth, paddleHeight);

        // Малюємо м'яч
        context.beginPath();
        context.arc(xBall, yBall, ballSize, 0, Math.PI * 2);
        context.fill();

        // Оновлюємо позицію м'яча
        xBall += ballSpeedX;
        yBall += ballSpeedY;

        // Відбивання м'яча від платформ
        if (xBall < xPaddle1 + paddleWidth && yBall > yPaddle1 && yBall < yPaddle1 + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }

        if (xBall > xPaddle2 && yBall > yPaddle2 && yBall < yPaddle2 + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }

        // Перевірка на виход за межі ігрового поля
        if (xBall < 0 || xBall > canvas.width) {
            // Гравець втратив м'яч, ви можете додати обробку цього події
            // і ресет гри тут
        }

        // Анімація
        requestAnimationFrame(draw);
    }

    draw(); // Запускаємо гру
})