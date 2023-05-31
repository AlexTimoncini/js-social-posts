let postWrapperDom = document.getElementById('container');



const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let likedPosts = [];

generatePost(postWrapperDom, posts);

function generatePost(parent, arrayObjects){
    arrayObjects.forEach(object => {
        let post = document.createElement('div');
        post.className = 'post';
    
        let postHeader = document.createElement('div');
        postHeader.className = 'post__header';
    
        let postMeta = document.createElement('div');
        postMeta.className = 'post-meta';
    
        let postMetaIcon = document.createElement('div');
        postMetaIcon.className = 'post-meta__icon';
    
        let profilePic = document.createElement('img');
        profilePic.className = 'profile-pic';
        profilePic.src = object.author.image;
    
        postMetaIcon.appendChild(profilePic);
    
        let postMetaData = document.createElement('div');
        postMetaData.className = 'post-meta__data';
    
        let postMetaAuthor = document.createElement('div');
        postMetaAuthor.className = 'post-meta__author';
        postMetaAuthor.innerHTML = object.author.name

        let postMetaTime = document.createElement('div');
        postMetaTime.className = 'post-meta__time';
        postMetaTime.innerHTML = convertDate(object.created);

        postMetaData.appendChild(postMetaAuthor);
        postMetaData.appendChild(postMetaTime);
    
        postMeta.appendChild(postMetaIcon);
        postMeta.appendChild(postMetaData);
    
        postHeader.appendChild(postMeta);
    
        let postText = document.createElement('div');
        postText.className = 'post__text';
        postText.innerHTML = object.content

        let postImg = document.createElement('div');
        postImg.className = 'post__image';
    
        let postBodyImage = document.createElement('img');
        postBodyImage.src = object.media;
        
        postImg.appendChild(postBodyImage);
    
        let postFooter = document.createElement('div');
        postFooter.className = 'post__footer';
        
        let likeWrapper = document.createElement('div');
        likeWrapper.className = 'likes js-likes';

        let likeCta = document.createElement('div');
        likeCta.className = 'likes__cta';

        const likeBtn = document.createElement('a');
        likeBtn.className = 'like-button js-like-button'
        likeBtn.href = '#';

        const likeIcon = document.createElement('i');
        likeIcon.className = 'like-button__icon fas fa-thumbs-up';
        likeIcon.ariaHidden = 'true';

        const likeDisc = document.createElement('span');
        likeDisc.className = 'like-button__label';
        likeDisc.innerHTML = ' Mi Piace';

        likeBtn.appendChild(likeIcon);
        likeBtn.appendChild(likeDisc);

        likeCta.appendChild(likeBtn);

        const likeCounter = document.createElement('div');
        likeCounter.className = 'likes__counter';
        likeCounter.innerHTML = `Piace a ${object.likes} persone`;


        likeWrapper.appendChild(likeCta);
        likeWrapper.appendChild(likeCounter);

        postFooter.appendChild(likeWrapper);
    
        post.appendChild(postHeader);
        post.appendChild(postText);
        post.appendChild(postImg);
        post.appendChild(postFooter);
        parent.appendChild(post);

        let liked = false;
        likeBtn.addEventListener('click', () =>{
            if (!liked){
                object.likes += 1;
                liked = true;
                likeCounter.innerHTML = `Piace a ${object.likes} persone`;
                likedPosts.push(object);
                console.log(likedPosts);
            } else {
                object.likes -= 1;
                liked = false;
                likeCounter.innerHTML = `Piace a ${object.likes} persone`;
                likedPosts = likedPosts.filter(post => post.id !== object.id);
                console.log(likedPosts);
            }
            likeBtn.classList.toggle('like-button--liked');
        });
    });
}

console.log(likedPosts);

function convertDate(dateString){
    let dateConverted = dateString.substring(8) + '/' + dateString.substring(5,7) + '/' + dateString.substring(2,4)
    dateString.substring(1,2);
    return dateConverted
}