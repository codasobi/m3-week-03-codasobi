let postLimit = 5
let page = 1
const filterBar = document.querySelector('#filter-bar')

async function fetchPosts(page) {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}&_page=${page}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error)
    }
}


function renderPosts(data) {
    const container = document.querySelector('.container')
    let newContent = ''
    data.forEach(item => {
        newContent += `
        <div class="post-container">
            <div class="number">${item.id}</div>
            <div class="post-info">
                <h2 class="post-title">${item.title}</h2>
                <p class="post-body">${item.body}</p>
            </div>
        </div>`
    })
    container.insertAdjacentHTML('beforeend', newContent)
}


function showLoading () {
    const loader = document.querySelector('.loader')
    loader.classList.add('show')

    setTimeout(async ()=>{
        page++
        const posts = await fetchPosts(page)
        renderPosts(posts)
        loader.classList.remove('show')
    }, 3000)
}


function filterPost (keyword) {
    const posts = document.querySelectorAll('.post-container')
    posts.forEach(post => {
        const title = post.children[1].querySelector('h2.post-title').textContent
        if (!title.includes(keyword)) {
            post.style.display = 'none'
        } else {
            post.style.display = 'block'
        }
    })
}


filterBar.addEventListener('input', (e) => {
    const keyword = e.target.value
    filterPost(keyword)
})


window.addEventListener('scroll', ()=> {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        showLoading ()
    }
})