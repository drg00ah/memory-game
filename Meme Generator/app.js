document.addEventListener("DOMContentLoaded", function () {
    const memeForm = document.getElementById("memeForm");
    const memesContainer = document.getElementById("memesContainer");

    memeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input
        const topText = document.getElementById("topText").value;
        const bottomText = document.getElementById("bottomText").value;
        const imageURL = document.getElementById("imageURL").value;

        // Create a meme div
        const memeDiv = document.createElement('div');
        memeDiv.classList.add("meme");

        const img = document.createElement("img");
        img.src = imageURL;

        const topTextDiv = document.createElement("div");
        topTextDiv.classList.add("top-text");
        topTextDiv.innerText = topText;

        const bottomTextDiv = document.createElement("div");
        bottomTextDiv.classList.add("bottom-text");
        bottomTextDiv.innerText = bottomText;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function () {
            memesContainer.removeChild(memeDiv);
        });

        memeDiv.appendChild(img);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);
        memeDiv.appendChild(deleteButton);

        memesContainer.appendChild(memeDiv);

        memeForm.reset();
    });
});
