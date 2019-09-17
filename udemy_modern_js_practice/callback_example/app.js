// commented out code is synchronous
// when we call getPosts(), the new Post Three will not show

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post) {
//   setTimeout(function() {
//     console.log("Starting createPost")
//     posts.push(post);
//     console.log("Finish createPost")
//   }, 20000);
// }


// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     console.log("Starting getPosts")
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//     console.log("Finish getPosts")
//   }, 10000);
// }
// console.log("Calling createPost")
// createPost({title: 'Post Three', body: 'This is post three'});

// console.log("Calling getPosts")
// getPosts();


function createPost(post, callback) {
  setTimeout(function() {
    console.log("Starting createPost")
    posts.push(post);
    callback();
    console.log("Finish createPost")
  }, 20000);
}


function getPosts() {
  setTimeout(function() {
    console.log("Starting getPosts")
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    console.log("Finish getPosts")
  }, 10000);
}

// console.log("Calling createPost")
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);