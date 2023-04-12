let posts = [
  {
    authorfoto: "img/instagram-1594387_1280.png",
    author: "Ulugbek",
    image: "img/profil.jpeg",
    description: [],
    location: "Ravensburg",
  },
  {
    authorfoto: "img/instagram-1594387_1280.png",
    author: "Fabio",
    image: "img/3.jpg",
    description: [],
    location: "München",
  },
  {
    authorfoto: "img/instagram-1594387_1280.png",
    author: "Ulugbek",
    image: "img/women.jpg",
    description: [],
    location: "Zürich",
  },
  {
    authorfoto: "img/instagram-1594387_1280.png",
    author: "Beck",
    image: "img/ocean.jpg",
    description: [],
    location: "Kanada, Nunalla",
  },
  {
    authorfoto: "img/instagram-1594387_1280.png",
    author: "Fabio",
    image: "img/3.jpg",
    description: [],
    location: "München",
  },
  {
    authorfoto: "img/instagram-1594387_1280.png",
    author: "Ulugbek",
    image: "img/profil.jpeg",
    description: [],
    location: "Ravensburg",
  },
];

function render() {
  document.getElementById("content").innerHTML += "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    document.getElementById("content").innerHTML += `
    <div class = "hauptcontainer">
    <div class="post">
    <div class="post-header">
      <div class="profilfoto">
        <img class="profilfoto-img" src="img/profil.jpeg">
        <div class="author-post">${post["author"]}</div>
      </div>
      <div class="location-post">${post["location"]}</div>
    </div>
    <div class="post-foto-container">
      <img class="post-foto" src="${post["image"]}">
    </div>
    <div class="post-icons">
      <a href="#"><img class="icons-herz" src="img/heart-37458_1280.png" alt=""></a>
      <a href="#"><img class="icons-herz" src="img/speech.png" alt=""></a>
      <a href="#"><img class="icons" src="img/send-icon-6851743_1280.png" alt=""></a>
    </div>
    <div class="post-kommentieren">
      <div id="kommentieren${i}" class="kommentare">
        ${post['description'].map(comment => `<div>${comment}</div>`).join('')}
      </div>
      <div class="kommentieren-input">
        <input id="input${i}" class="input-kommentieren" placeholder="Kommentieren...">
        <button onclick="addComment(${i})" class="btn-kommentieren">Posten</button>
      </div>
    </div>
  </div>
  </div>
  
        `;
        let comments = document.getElementById(`kommentieren${i}`);
      
        for (let j = 0; j < post['description'].length; j++) {
            const comment = post['description'][j];
            comments.innerHTML += `<div>${comment}</div>`;
        }
  }
}

function addComment(index) {
  let input = document.getElementById(`input${index}`);
  posts[index]['description'].push(input.value);

  let comments = document.getElementById(`kommentieren${index}`);
  comments.innerHTML += `<div>${input.value}</div>`;

  input.value = '';
}




