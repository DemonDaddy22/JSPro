(function () {
  const POSTS_BASE_URI = 'https://jsonplaceholder.typicode.com/posts';

  const posts = document.getElementById('posts');

  const getPosts = async () => {
    try {
      const data = await fetch(POSTS_BASE_URI).then((res) => res.json());
      return data;
    } catch (e) {
      return [];
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

  const init = async () => {
    const postsData = await getPosts();
    populatePosts(postsData);
  };

  init();
})()