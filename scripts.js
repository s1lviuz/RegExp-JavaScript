async function start() {
    const cors_anywhere = 'https://cors-anywhere.herokuapp.com/'
    const target = 'https://www.globo.com/'
    const url = cors_anywhere+target
    const app = document.querySelector('main')
    await fetch(url)
    .then(response => response.text())
    .then(text => text.match(/<(\h2 class="post__title"+)[\s\S]*?>([\s\S]*?)<\/\h2>/g))
    .then(list => list.forEach(item => {
        let p = document.createElement('p')
        p.innerHTML = item
        app.append(p)
    }))
    const hr = document.createElement('hr')
    app.append(hr)

}

document.addEventListener("DOMContentLoaded", start);