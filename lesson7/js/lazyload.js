//get images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//telling it when to load
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -55px 0px"
};

//move from data-src to src and remove data-src attribute
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};


if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

//if supported load images    
imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});

//if not supported load all images
} else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});

}