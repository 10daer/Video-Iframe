document
  .getElementById("embedForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const videoId = document.getElementById("videoId").value;
    const width = document.getElementById("width").value || "560";
    const height = document.getElementById("height").value || "315";

    const embedCode = `
<div class="video-testimonial-embed" data-video-id="${videoId}" data-width="${width}" data-height="${height}"></div>
<script>
(function() {
    const videoPlatformURL = "https://yourvideoplatform.com/embed/";
    function createEmbedIframe(videoId, width, height) {
        const iframe = document.createElement('iframe');
        iframe.src = \`\${videoPlatformURL}\${videoId}\`;
        iframe.width = width;
        iframe.height = height;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        return iframe;
    }
    function initializeEmbedScript() {
        const embedElements = document.querySelectorAll('.video-testimonial-embed');
        embedElements.forEach(element => {
            const videoId = element.getAttribute('data-video-id');
            const width = element.getAttribute('data-width');
            const height = element.getAttribute('data-height');
            const iframe = createEmbedIframe(videoId, width, height);
            element.appendChild(iframe);
        });
    }
    document.addEventListener('DOMContentLoaded', initializeEmbedScript);
})();
</script>
    `;

    document.getElementById("embedCode").textContent = embedCode;
  });
