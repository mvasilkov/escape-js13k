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

function levelComplete() {
    if (enemy1) {
        enemy1.remove()
        enemy1 = null
    }

    pspAny()
    escapist.x = 0
    // escapist.y = 4
    escapist.$update()
    $depth.nodeValue = --depth
    $msg.nodeValue = msgs[depth]

    if (enemy1setup[depth].head)
        enemy1 = new Enemy1(enemy1setup[depth])
}
