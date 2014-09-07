function createCanvas(size, fn) {
    var canvas = document.createElement('canvas')
    canvas.height = canvas.width = size
    return fn(canvas.getContext('2d'))
}

function btouv(x) { return 45 * x + 4 }

function paintField(canvas) {
    var i, j
    canvas.fillStyle = '#95a5a6'
    canvas.fillRect(0, 0, 412, 412)
    for (i = 0; i < 9; ++i) {
        for (j = 0; j < 9; ++j) {
            if (i == 8 && j == 4)
                canvas.fillStyle = '#fb3'
            else
                canvas.fillStyle = '#ecf0f1'
            canvas.fillRect(btouv(i), btouv(j), 44, 44)
        }
    }

    canvas.beginPath()
    canvas.moveTo(btouv(3),      btouv(4))
    canvas.lineTo(btouv(4) + 22, btouv(4))
    canvas.lineTo(btouv(4) + 22, btouv(3) + 22)
    canvas.lineTo(btouv(5) + 44, btouv(4) + 22)
    canvas.lineTo(btouv(4) + 22, btouv(5) + 22)
    canvas.lineTo(btouv(4) + 22, btouv(4) + 44)
    canvas.lineTo(btouv(3),      btouv(4) + 44)
    canvas.closePath()

    canvas.fillStyle = '#95a5a6'
    canvas.fill()

    return canvas.canvas.toDataURL()
}

var floor = createCanvas(412, paintField)
