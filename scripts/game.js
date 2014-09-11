var depth = 9
var $depth = $id('dp').firstChild

var msgs = [
    'This was a triumph',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'You are (not) alone',
    'Escape the pit'
]
var $msg = $id('msg').firstChild

var $caught = $id('fu')

var enemy1setup = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {head: [4, 4]},
    {}
]
var enemy1 = null

function nextLevel(lvl) {
    if (enemy1) {
        enemy1.remove()
        enemy1 = null
    }

    pspAny()
    escapist.x = 0
    // escapist.y = 4
    escapist.$update()

    if (typeof lvl == 'undefined')
        --depth
    else depth = lvl

    $depth.nodeValue = depth
    $msg.nodeValue = msgs[depth]

    if (enemy1setup[depth].head)
        enemy1 = new Enemy1(enemy1setup[depth])
}

function testCaught() {
    if (enemy1 && enemy1.x == escapist.x && enemy1.y == escapist.y) {
        nextLevel(9)
        pspOff()
        $caught.className = 's'
    }
}

function throwBack() { $caught.className = '' }
$caught.addEventListener('transitionend', throwBack, false)
