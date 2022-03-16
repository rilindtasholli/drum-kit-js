function playSound(code){
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key-container[data-key="${code}"]`);
    key.classList.add('playing')
}

function removeTransition(e){
    const key = document.querySelector(`.key-container[data-key="${e.keyCode}"]`) || e;
    key.classList.remove('playing')
}

window.addEventListener('keydown', (e)=>{
    playSound(e.keyCode)
})

window.addEventListener('keyup', (e)=>{
    removeTransition(e)
})

document.querySelectorAll('.key-container').forEach(key => {
    key.addEventListener('mousedown', () => {
        playSound(key.dataset.key)
    })

    key.addEventListener('mouseup', ()=>{
        removeTransition(key)
    })
})
