

function changeImage() {
    const image = document.querySelector("#image");
    const url = prompt("Please enter your image URL");
    if (!url) return;

    const borderColor = prompt("Border color?", "blue");
    const width = prompt("Can you give you're Width in pixels?",);
    const height = prompt("Can you give you're Height in pixels?",);
    const borderRadius = prompt("Can you give you're Border radius in pixels?",);

    image.src = url;
    image.style.border = `2px solid ${borderColor || ""}`;
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderRadius = `${borderRadius}px`;
    image.style.padding = "10px";
    image.style.backgroundColor = "#cfc2dc";
}