const score = document.querySelector("div.score");
const scoreOne = document.querySelector("div.scoreOne")
const scoreTwo = document.querySelector("div.scoreTwo")
const one = document.querySelector("div.player.one");
const two = document.querySelector("div.player.two");
const game = document.querySelector("div.game");
const ball = document.querySelector("div.ball");
const width = 1000;
const height = 1000;
const ballRadius = 2.5;
let onePoint = 0;
let twoPoint = 0;

function initDiv(){
    score.style.width=width + 'px';
    game.style.height = height + 'px';
    game.style.width = width + 'px';
    one.style.left = '5%';
    two.style.left = '90%';
    one.style.top = '5%';
    two.style.top = '5%';
}

initDiv();
let playing = 1;
const velocity = [1,1]
const pos = [50, 50]
const onePos= [5,5]
let oneVelocity = 0
let twoVelocity = 0
const twoPos= [90,5]
let speed = 40;
function loop(){
    if (pos[0] >= 85 && pos[0] <= 85 + ballRadius && velocity[0] > 0){
        if (pos[1] > twoPos[1] && pos[1] <= twoPos[1] + 5){
            const ballX = pos[0] + ballRadius;
            const ballY = pos[1] + ballRadius;
            const playerX = twoPos[0];
            const playerY = twoPos[1];
            let vector = [ballX-playerX,ballY-playerY]
            const magnitude = Math.sqrt(vector[0]*vector[0] + vector[1]*vector[1])
            if (magnitude <= ballRadius)
            {
                velocity[0] = vector[0] / magnitude;
                velocity[1] = vector[1] / magnitude;
                
            }
        }else if (pos[1] >= twoPos[1] && pos[1] <= twoPos[1] + 20){
            velocity[0] *= -1;
        }
        else if (pos[1] < twoPos[1] && pos[1] >= twoPos[1] - 5){
            const ballX = pos[0] + ballRadius;
            const ballY = pos[1] + ballRadius;
            const playerX = twoPos[0];
            const playerY = twoPos[1];
            let vector = [playerX-ballX,playerY-ballY]
            const magnitude = Math.sqrt(vector[0]*vector[0] + vector[1]*vector[1])
            if (magnitude <= ballRadius)
            {
                velocity[0] = vector[0] / magnitude;
                velocity[1] = vector[1] / magnitude;
            }
        }
    }
    else if (pos[0] <= 10 && velocity[0] < 0){
        if (pos[1] < onePos[1] && onePos[1] - pos[1] > ballRadius){
            const ballX = pos[0] + ballRadius;
            const ballY = pos[1] + ballRadius;
            const playerX = onePos[0] + 5;
            const playerY = onePos[1];
            const diffX = ballX - playerX;
            const diffY = ballY - playerY;
            const delta = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
            if (delta <= ballRadius + 0.5)
            {
                velocity[0] = diffX;
                velocity[1] = diffY;
            }
        }else if (pos[1] - onePos[1] <= 20){
            velocity[0] *= -1;
        }
        else{
            const ballX = pos[0] + ballRadius;
            const ballY = pos[1] + ballRadius;
            const playerX = onePos[0] + 5;
            const playerY = onePos[1] + 20;
            const diffX = playerX - ballX;
            const diffY = playerY - ballY;
            const delta = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
            if (delta <= ballRadius + 0.5)
            {
                velocity[0] = diffX;
                velocity[1] = diffY;
            }
        }
    }
    if(pos[1] >= 95)
        velocity[1] *= -1
    if(pos[1] <= 0)
        velocity[1] *= -1

    if(pos[0] >= 95){
        speed = 40;
        pos[0] = 50
        scoreOne.textContent = ++onePoint
    }
    if(pos[0] <= 0)
    {
        speed = 40;
        pos[0] = 50
        velocity[1] = 1;
        scoreTwo.textContent = ++twoPoint
    }

    onePos[1] += oneVelocity;
    twoPos[1] += twoVelocity;
    pos[0] += velocity[0];
    pos[1] += velocity[1];
    one.style.top = onePos[1] + '%';
    two.style.top = twoPos[1] + '%';
    ball.style.left = pos[0] + '%';
    ball.style.top = pos[1] + '%';
    if (playing)
        setTimeout(loop, speed);
}   

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name == 's')
        oneVelocity = 5
    if (name == 'w')
        oneVelocity = -5
    if (name == 'ArrowUp')
        twoVelocity = -5
    if (name == 'ArrowDown')
        twoVelocity = 5
    
  }, false);
 
document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name == 's')
        oneVelocity = 0
    if (name == 'w')
        oneVelocity = 0
    if (name == 'ArrowUp')
        twoVelocity = 0
    if (name == 'ArrowDown')
        twoVelocity = 0
    
  }, false);

loop()