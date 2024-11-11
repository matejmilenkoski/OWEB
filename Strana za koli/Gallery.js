let isLiked = false;
    let likeCount = 0;

    const likeButton = document.getElementById("likeButton");
    const likeCountDisplay = document.getElementById("likeCount");

    likeButton.addEventListener("click", () => {
        isLiked = !isLiked;
        likeCount += isLiked ? 1 : -1;
        likeButton.classList.toggle("liked", isLiked);
        likeCountDisplay.textContent = `${likeCount} ${likeCount === 1 ? "like" : "likes"}`;
    });

    const commentsContainer = document.getElementById("commentsContainer");
    const commentInput = document.getElementById("commentInput");

    function addComment() {
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const commentDiv = document.createElement("div");
            commentDiv.className = "comment";
            commentDiv.textContent = `You: ${commentText}`;
            commentsContainer.appendChild(commentDiv);
            commentInput.value = "";
        }
    }