function enemyHTML(c, x, y) {
    return '<div class="c ' + c + '" data-x=' + x + ' data-y=' + y + '>' +
           '<div class=i></div><div class=j></div>' +
           '<div class=k></div><div class=l></div></div>'
}

function Enemy1(options) {
    this.x = options.head[0]
    this.y = options.head[1]
    $psp.insertAdjacentHTML('beforeend', enemyHTML('enr', this.x, this.y))
    this.$ = document.getElementsByClassName('enr')[0]
}

Enemy1.prototype.remove = function () {
    $psp.removeChild(this.$)
}
