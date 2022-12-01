const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];


const VELOCITY = 10;

const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

let xPosition = 500;
let yPosition = 300;

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp" && yPosition > 0){ // nesse caso ultilizamos a malha cartesiana para delimitar os limites iniciais da tela, o personagem não pode se mover para posições negativas de x
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown"){
        let y;
        y = innerHeight - 100;
        character.classList.add("turnDown");
        if(yPosition < y){
            yPosition += VELOCITY;
        }else{
            pass;
        }
        // para limitar a seta para baixo tinha que achar o tamanho atual da aba e limitar a partir dai, achei na internet a funcao InnerHeight, que retorna o valor atual da aba. Desse valor retirei 100px, que é o tamanho do personagem, então, desse jeito ele não vai sair do display
    }

    if(key === "ArrowLeft" && xPosition > 0){ //esse caso é parecido com o primeiro, o personagem não pode se mover para direções negativas de y, caso contrário, iria sair da tela
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight"){
        let x;
        x = innerWidth - 100;
        character.classList.add("turnRight");
        if(xPosition < x){
            xPosition += VELOCITY;
        }else{
            pass;
        }
    }
    // do mesmo modo da seta para baixo, tinha que pegar a função innerWidht e ajustar ao tamanho do personagem, desse jeito criei a variável x que recebe o valor atual da largura da tela e reduz 100px que é o tamanho do personagem

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});


