var bgm = document.createElement('audio')
bgm.src = './pub/bgm.mp3'
bgm.loop = true
bgm.volume = 0.4
bgm.play()

function bgm_disable() {
    bgm.pause()
}

function bgm_enable() {
    bgm.load()
    bgm.play()
}
