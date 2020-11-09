let mousedownValue = 0,
    mouseupValue = 0
    document.addEventListener('mousedown', (e) => {
        console.log(e.clientX)
        document.body.style.cursor = "grabbing"
        mousedownValue = e.clientX

    document.addEventListener('mouseup', (e) => {
        console.log(e.clientX)
        document.body.style.cursor = "default"
        mouseupValue = e.clientX

        if(mousedownValue > mouseupValue){
            document.body.style.background = "blue"
        }else{
            document.body.style.background = "green"
        }
    })
})