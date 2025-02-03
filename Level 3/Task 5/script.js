// Function to fetch data from JSONPlaceholder API and update the DOM
function fetchPosts() {
    // Use fetch to get the data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Call a function to display the fetched posts
            displayPosts(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to display posts dynamically on the page
function displayPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');

    // Clear any previous posts in the container (if any)
    postsContainer.innerHTML = '';

    // Loop through the posts data and create HTML for each post
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;

        // Append the post to the container
        postsContainer.appendChild(postElement);
    });
}

// Call the fetchPosts function when the page loads
window.onload = function() {
    fetchPosts();
};
