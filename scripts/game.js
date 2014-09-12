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
    {head: [0, 0]},
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
    escapist.y = 4
    escapist.$update()

    if (typeof lvl == 'undefined')
        --depth
    else depth = lvl

    $depth.nodeValue = depth
    $msg.nodeValue = msgs[depth]

    if (enemy1setup[depth].head)
        enemy1 = new Enemy1(enemy1setup[depth])
}

function enemyTurn() {
    if (!enemy1) return

    var i, j, m = [], g, start, end, path

    for (i = 0; i < 9; ++i) {
        m[i] = []
        for (j = 0; j < 9; ++j) {
            m[i][j] = 1
        }
    }

    g = new Graph(m)
    start = g.grid[enemy1.x][enemy1.y]
    end = g.grid[escapist.x][escapist.y]
    path = astar.search(g, start, end)

    if (!path.length) return

    enemy1.x = path[0].x
    enemy1.y = path[0].y
    enemy1.$update()

    testCaught()
}

function testCaught() {
    if (enemy1 && enemy1.x == escapist.x && enemy1.y == escapist.y) {
        nextLevel(9)
        pspOff()
        $caught.className = 's'
        return true
    }
    return false
}

function throwBack() { $caught.className = '' }
$caught.addEventListener('transitionend', throwBack, false)
