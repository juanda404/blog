import { blogsPosts } from "../data/data.js";

// Referencias a los contenedores del HTML
const categoryEl = document.getElementById("article-category");
const titleEl = document.getElementById("article-title");
const metaEl = document.getElementById("article-meta"); // nueva referencia
const bodyEl = document.getElementById("article-body");
const relatedListEl = document.getElementById("related-list");

// 1. Leer el id desde la URL (?id=2)
const params = new URLSearchParams(window.location.search);
const postId = Number(params.get("id"));

// 2. Buscar el post correspondiente
const post = blogsPosts.find((p) => p.id === postId);

// 3. Renderizar, o mostrar mensaje de error si no existe
if (post) {
  renderArticle(post);
  renderRelated(post);
} else {
  document.querySelector(".article-content").innerHTML =
    "<p>Artículo no encontrado.</p>";
}

function renderArticle(post) {
  categoryEl.textContent = post.category;
  titleEl.textContent = post.title;
  metaEl.textContent = `${formatDate(post.date)} • ${calculateReadingTime(post.content)}`;

  // Imagen principal
  const imageContainer = document.createElement("div");
  imageContainer.className = "article-main-image-container";

  const img = document.createElement("img");
  img.src = post.image;
  img.alt = post.title;
  img.className = "article-main-image";

  imageContainer.appendChild(img);
  bodyEl.appendChild(imageContainer);

  // Contenido: cada string del array se convierte en un <p>
  post.content.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    bodyEl.appendChild(p);
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const totalWords = content.join(" ").split(" ").length;
  const minutes = Math.ceil(totalWords / wordsPerMinute);
  return `${minutes} minute read`;
}

function renderRelated(currentPost) {
  const related = blogsPosts
    .filter(
      (p) => p.category === currentPost.category && p.id !== currentPost.id,
    )
    .slice(0, 3);

  if (related.length === 0) {
    relatedListEl.innerHTML = "<li>No related articles found.</li>";
    return;
  }

  related.forEach((relatedPost) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `articulo.html?id=${relatedPost.id}`;
    a.textContent = relatedPost.title;

    li.appendChild(a);
    relatedListEl.appendChild(li);
  });
}
