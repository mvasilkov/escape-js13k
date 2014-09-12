function enemyHTML(c, x, y) {
    return '<div class="c h ' + c + '" data-x=' + x + ' data-y=' + y + '>' +
           '<div class=i></div><div class=j></div>' +
           '<div class=k></div><div class=l></div></div>'
}

function Enemy1(options) {
    this.x = options.head[0]
    this.y = options.head[1]
    $psp.insertAdjacentHTML('beforeend', enemyHTML('enr', this.x, this.y))
    this.$ = document.getElementsByClassName('enr')[0]
    setTimeout(this.reveal.bind(this))
}

Enemy1.prototype.reveal = function () {
    this.$.className = 'c enr'
}

Enemy1.prototype.remove = function () {
    $psp.removeChild(this.$)
}

Enemy1.prototype.$update = function () {
    this.$.dataset.x = this.x
    this.$.dataset.y = this.y
}
