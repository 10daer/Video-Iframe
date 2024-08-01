document
  .getElementById("embedForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const videoId = document.getElementById("videoId").value;
    const width = document.getElementById("width").value || "560";
    const height = document.getElementById("height").value || "315";

    const embedCode = `
<div class="video-testimonial-embed">
<iframe src="https://youtu.be/${videoId}" width="${width}" height="${height}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    `;

    document.getElementById("embedCode").textContent = embedCode;
  });
