 const bookTitle = document.getElementById('fg-title');
 const bookImage = document.getElementById('fg-image');
 const bookLikes = document.getElementById('fg-likes');
 const commentList = document.getElementById('fg-comments');
 const likesButton = document.getElementById('like-button');
 const commentForm = document.getElementById('comment-form');


function renderPageInfo(){
    fetch('https://distinct-vaulted-freesia.glitch.me/image')
    .then(resp => resp.json())
    .then(data => {
      let numOfLikes = data['likes']
      bookTitle.innerText = data['title']
      bookImage.src = data['image']
      bookLikes.innerText = `${numOfLikes} Likes`
      document.getElementById('li1').innerText= data['comments'][0]['content'];
      document.getElementById('li2').innerText=  data['comments'][1]['content'];
      document.getElementById('li3').innerText=  data['comments'][2]['content'];

      likesButton.addEventListener('click', function(){
        ++numOfLikes
        bookLikes.innerText = `${numOfLikes} Likes`
        })
      
    })
}

commentForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const userComment = event.target.newComment.value
    const commentLi = document.createElement('li')
    commentLi.innerText = userComment;
    commentList.append(commentLi)
})




renderPageInfo()
