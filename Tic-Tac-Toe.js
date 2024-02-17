let turn = 'X'
let gameover = false;


const changeturn =()=>{
    return turn == 'X'?'O':'X'
}

const checkwinner = ()=>{
    let box = document.getElementsByClassName('boxtext');
const winingcombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [8,5,2],
    [0,4,8],
    [2,4,6]
  ]
  winingcombos.forEach(e =>{
    if ((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) && (box[e[0]].innerText !== "") )
    {
        document.querySelector('.info').innerText = box[e[0]].innerText+' is won'
        gameover = true
    }
  })

}


const boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        boxtext.innerText = turn;
       turn = changeturn()
        checkwinner()
        if(gameover == false)
        {
            document.querySelector('.info').innerText = 'Turn for '+turn
        }
    })
})

let btn = document.getElementById('reset');
btn.addEventListener('click',()=>{
    let boxes = document.querySelectorAll('.boxtext');
    Array.from(boxes).forEach(element=>{
        element.innerText = ""
    })
    turn = 'X'
    gameover = false
    document.querySelector('.info').innerText = 'Turn for ' + turn
    
})

let playbtn = document.getElementById('buttonplay');
playbtn.addEventListener('click',()=>{
    location.href = 'Tic-Tac-Toe.html'
})