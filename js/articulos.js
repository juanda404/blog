import { blogsPosts } from "../data/data.js";

const blog = document.getElementById("blogs-container");
const buttons = document.querySelectorAll(".articles-buttons-container button");

function renderPosts(posts) {
  blog.innerHTML = ""; // limpiar antes de renderizar

  posts.forEach((post) => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");

    article.className = "article-card";
    img.src = post.image;
    img.alt = post.title;
    h2.textContent = post.title;
    p.textContent = post.sumary;
    a.href = `articulo.html?id=${post.id}`;
    a.textContent = "Read more";

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(a);

    blog.appendChild(article);
  });
}

function filterByCategory(category) {
  if (category === "General") {
    renderPosts(blogsPosts); // "General" muestra todos
  } else {
    const filtered = blogsPosts.filter((post) => post.category === category);
    renderPosts(filtered);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Quitar la clase "activa" de todos y marcar el clickeado
    buttons.forEach((btn) => btn.classList.remove("btn-primary"));
    buttons.forEach((btn) => btn.classList.add("btn-secondary"));
    button.classList.remove("btn-secondary");
    button.classList.add("btn-primary");

    const category = button.dataset.category;
    filterByCategory(category);
  });
});

// Render inicial con todos los posts
renderPosts(blogsPosts);
