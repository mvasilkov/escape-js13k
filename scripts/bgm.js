function makeBGM() {
    var s = '', t
    function _bgm(s, o, r, p) {
        var c = s.charCodeAt((t >> r) % p)
        return c==32?0:31&t*Math.pow(2,c/12-o)
    }

    for (t = 0; t < 65536; ++t) {
        s += String.fromCharCode(
            _bgm("0 0     7 7     037:<<",6,10,32) +
            (t&4096?_bgm("037",4,8,3)*(4096-(t&4095))>>12:0))
    }
    return 'RIFF_oO_WAVEfmt ' + atob('EAAAAAEAAQBAHwAAQB8AAAEACAA') + 'data' +
           s + s + s + s + s + s + s + s + s + s + s + s + s + s + s + s
}

var bgm = new Audio('data:audio/wav;base64,' + btoa(makeBGM()))
bgm.loop = true
bgm.volume = 0.9
// bgm.play()

$id('mus').addEventListener('change',
    function (event) {
        var on = event.target.checked
        bgm[on? 'play': 'pause']()
        if (!on) bgm.currentTime = 0
    }, false)
