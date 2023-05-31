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
        postMetaTime.innerHTML = object.created

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
        
        postFooter.innerHTML = 
        `<div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${object.likes}</b> persone!
            </div>
        </div>`
    
        post.appendChild(postHeader);
        post.appendChild(postText);
        post.appendChild(postImg);
        post.appendChild(postFooter);
        parent.appendChild(post);
    
    });
}