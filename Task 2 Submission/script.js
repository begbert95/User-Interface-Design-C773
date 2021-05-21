function getAspectRatio(img) {
    var image = document.querySelector(img);
    return image.clientHeight / image.clientWidth;
}