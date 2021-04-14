let board = []

function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    }else{
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }

    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]

    if(topRight !== undefined && topRight === topCenter && topRight === topLeft){
        alert(`${topRight} is the Winner!`)
        window.location.reload(true);
        return
    }

    if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`${topRight} is the Winner!`)
        window.location.reload(true);
        return
    }

    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the Winner!`)
        window.location.reload(true);
        return
    }

    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`${bottomLeft} is the Winner!`)
        window.location.reload(true);
        return
    }

    if(middleLeft !==undefined && middleLeft === middleCenter && middleLeft === middleRight){
        alert(`${middleLeft} is the Winner!`)
        window.location.reload(true);
        return
    }

    if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`${topLeft} is the Winner!`)
        window.location.reload(true);
        return
    }

    if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        alert(`${topRight} is the Winner!`)
        window.location.reload(true);
        return
    }

    if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert(`${topCenter} is the Winner!`)
        window.location.reload(true);
        return
    }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
        }
    }
    if (boardFull === true) {
    alert("There is no winner. It's a tie.");
    window.location.reload(true);
    }
}

