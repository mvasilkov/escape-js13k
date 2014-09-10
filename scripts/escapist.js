var escapist = {
    x: 0, y: 4,
    $: document.getElementsByClassName('pl')[0]
}

function controls(event) {
    if (event.defaultPrevented)
        return

    // console.log('event.key = ' + event.key)
    // console.log('event.keyCode = 0x' + event.keyCode.toString(16))

    switch (event.key || event.keyCode) {
        case 'Up':
        case 'ArrowUp':
        case 'w': case 'W':
        case 'k': case 'K':
        case 0x26:
        case 0x57:
        case 0x4b:
        escapist.y = max(0, escapist.y - 1)
        break

        case 'Left':
        case 'ArrowLeft':
        case 'a': case 'A':
        case 'h': case 'H':
        case 0x25:
        case 0x41:
        case 0x48:
        escapist.x = max(0, escapist.x - 1)
        break

        case 'Down':
        case 'ArrowDown':
        case 's': case 'S':
        case 'j': case 'J':
        case 0x28:
        case 0x53:
        case 0x4a:
        escapist.y = min(8, escapist.y + 1)
        break

        case 'Right':
        case 'ArrowRight':
        case 'd': case 'D':
        case 'l': case 'L':
        case 0x27:
        case 0x44:
        case 0x4c:
        escapist.x = min(8, escapist.x + 1)
        break

        default:
        return
    }

    escapist.$.dataset.x = escapist.x
    escapist.$.dataset.y = escapist.y
    event.preventDefault()
}

window.addEventListener('keydown', controls, true)
