(function () {
  const POSTS_BASE_URI = 'https://jsonplaceholder.typicode.com/posts';

  const posts = document.getElementById('posts');
  const addPostBtn = document.getElementById('add-button');

  const getPosts = async () => {
    try {
      const data = await fetch(POSTS_BASE_URI).then((res) => res.json());
      return data;
    } catch (e) {
      return [];
    }
  };

  const addPost = async ({ title, body }) => {
    try {
      const data = await fetch(POSTS_BASE_URI, {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.json());
      return data;
    } catch (e) {
      return null;
    }
  };

  const createElement = (element, classes = []) => {
    const elm = document.createElement(element);
    elm.classList.add(...classes);
    return elm;
  };

  const createPost = (data) => {
    const post = createElement('div', ['post']);
    const h1 = createElement('h1');
    const p = createElement('p');
    const fragment = document.createDocumentFragment();

    h1.textContent = data.title;
    p.innerHTML = data.body;
    post.setAttribute('id', `post-${data.id}`);

    fragment.appendChild(h1);
    fragment.appendChild(p);
    post.append(fragment);

    return post;
  };

  const populatePosts = (data) => {
    const fragment = document.createDocumentFragment();
    data.forEach((post) => fragment.appendChild(createPost(post)));
    posts.appendChild(fragment);
  };

  const appendNewPost = async (data) => {
    const post = await addPost(data);
    posts.prepend(createPost(post));
  };

  const handleAddPostBtnClick = async () => {
    // collect form data
    const title = document.querySelector('input[name="title"]');
    const body = document.getElementById('body');

    // create new post
    await appendNewPost({
      title: title.value,
      body: body.value,
    });

    // clear form inputs
    title.value = '';
    body.value = '';
  };

  const init = async () => {
    const postsData = await getPosts();
    populatePosts(postsData);
  };

  init();
  
  addPostBtn.addEventListener('click', handleAddPostBtnClick);
})()