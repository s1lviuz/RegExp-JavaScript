async function start() {
    const cors_anywhere = 'https://cors-anywhere.herokuapp.com/'
    const target = 'https://www.globo.com/'
    const url = cors_anywhere+target
    const app = document.querySelector('main')
    const loading = document.createElement('h2')
    loading.innerText = 'Carregando dados...'
    app.append(loading)
    await fetch(url)
    .then(response => response.text())
    .then(text => text.match(/<(\h2 class="post__title"+)[\s\S]*?>([\s\S]*?)<\/\h2>/g))
    .then(list => list.forEach(item => {
        let news = document.createElement('div')
        news.innerHTML = item
        app.append(news)
    }))
    .catch(() => {
        let error = document.createElement('h2')
        error.innerHTML = 'Para carregar esta página é necessário que você solicite um acesso ao proxy neste <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">link</a>, depois volte e atualize essa página :)'
        app.append(error)
    })
    .finally(() => loading.remove())
    const hr = document.createElement('hr')
    app.append(hr)

}

document.addEventListener("DOMContentLoaded", start);