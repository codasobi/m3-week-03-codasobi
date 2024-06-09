let postLimit = 5
let page = 1
const filterBar = document.querySelector('#filter-bar')

async function fetchPosts() {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}&_page=${page}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        let posts = await response.json()
        renderPosts(posts)
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
            <div class="number">${item.id + 5}</div>
            <div class="post-info">
                <h2 class="post-title">${item.title}</h2>
                <p class="post-body">${item.body}</p>
            </div>
        </div>`
    })
    
    container.insertAdjacentHTML('beforeend', newContent)
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

fetchPosts()

filterBar.addEventListener('input', (e) => {
    const keyword = e.target.value
    filterPost(keyword)
})

