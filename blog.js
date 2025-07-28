// blog.js
// Handles blog post creation and display using localStorage

document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const addPostForm = document.getElementById('addPostForm');
    const postTitle = document.getElementById('postTitle');
    const postContent = document.getElementById('postContent');
    const postImage = document.getElementById('postImage');
    const featuredPostsContainer = document.getElementById('featured-posts');

    function renderPost(post) {
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        let imgHtml = '';
        if (post.image) {
            imgHtml = `<img src="${post.image}" alt="Post Image" class="blog-post-image" style="max-width:100%;margin-bottom:10px;">`;
        }
        postDiv.innerHTML = `${imgHtml}<h3>${post.title}</h3><p>${post.content.replace(/\n/g, '<br>')}</p><span class="blog-date">${post.date}</span>`;
        return postDiv;
    }

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        blogPostsContainer.innerHTML = '';
        if (posts.length === 0) {
            blogPostsContainer.innerHTML = '<p>No posts yet. Be the first to publish!</p>';
        } else {
            posts.slice().reverse().forEach(post => {
                blogPostsContainer.appendChild(renderPost(post));
            });
        }
        // Also update featured/news section (show latest 3)
        if (featuredPostsContainer) {
            featuredPostsContainer.innerHTML = '';
            posts.slice(-3).reverse().forEach(post => {
                const card = document.createElement('div');
                card.className = 'news-card';
                let imgHtml = '';
                if (post.image) {
                    imgHtml = `<img src="${post.image}" alt="Post Image" class="news-card-image" style="max-width:100%;height:120px;object-fit:cover;">`;
                }
                card.innerHTML = `
                    <div class="news-card-content">
                        ${imgHtml}
                        <h4>${post.title}</h4>
                        <p>${post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content}</p>
                        <span class="blog-date">${post.date}</span>
                    </div>
                `;
                featuredPostsContainer.appendChild(card);
            });
        }
    }

    addPostForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = postTitle.value.trim();
        const content = postContent.value.trim();
        if (!title || !content) return;

        // Handle image upload (convert to base64)
        const file = postImage && postImage.files && postImage.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                savePost(title, content, event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            savePost(title, content, null);
        }
    });

    function savePost(title, content, image) {
        const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        posts.push({
            title,
            content,
            image,
            date: new Date().toLocaleString()
        });
        localStorage.setItem('blogPosts', JSON.stringify(posts));
        postTitle.value = '';
        postContent.value = '';
        if (postImage) postImage.value = '';
        loadPosts();
    }

    loadPosts();
});
