var aspect = 1.75
var $controller = $('#controller')

function handleResize() {
    var w = window.innerWidth, h = window.innerHeight

    if (w / h > aspect) {
        w = h * aspect
        $controller.css('transform', 'scale(' + (h / 280) + ')')
    }
    else {
        h = w / aspect
        $controller.css('transform', 'scale(' + (w / 490) + ')')
    }

    $controller.css({
        left: 0.5 * (window.innerWidth - w) + 'px',
        top: 0.5 * (window.innerHeight - h) + 'px',
    })
}

handleResize()
window.addEventListener('resize', handleResize)
window.addEventListener('orientationchange', handleResize)


var air_console = new AirConsole({orientation: AirConsole.ORIENTATION_LANDSCAPE})

var $dpad_buttons = $('.dpad:not(.dpad-center)')
var $other_buttons = $('.buttons-container .button')

$dpad_buttons
.on('touchstart', function (event) {
    $(this).addClass('active')
    air_console.message(AirConsole.SCREEN, this.id)
})

$other_buttons
.on('touchstart', function (event) {
    $(this).addClass('active')
})

$('body')
.on('touchend', function (event) {
    $dpad_buttons.removeClass('active')
    $other_buttons.removeClass('active')
})

var music = true, sound = true

$('.button-music')
.on('touchstart', function (event) {
    if (music = !music) {
        $controller.removeClass('music-off').addClass('music-on')
    }
    else {
        $controller.removeClass('music-on').addClass('music-off')
    }
    air_console.message(AirConsole.SCREEN, '^music:' + (music ? 'on' : 'off'))
})

$('.button-sound')
.on('touchstart', function (event) {
    if (sound = !sound) {
        $controller.removeClass('sound-off').addClass('sound-on')
    }
    else {
        $controller.removeClass('sound-on').addClass('sound-off')
    }
    air_console.message(AirConsole.SCREEN, '^sound:' + (sound ? 'on' : 'off'))
})

$('.button-restart')
.on('touchstart', function (event) {
    air_console.message(AirConsole.SCREEN, '9')
})

air_console.onMessage = function (a, b) {
    switch (b) {
        case '^restart:on':
            $controller.removeClass('no-restart')
            break

        case '^restart:off':
            $controller.addClass('no-restart')
            break
    }
}
