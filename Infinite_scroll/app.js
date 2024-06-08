let postLimit = 5
let page = 1
const container = document.querySelector('.container')

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
    console.log('inrender', data)
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

fetchPosts()