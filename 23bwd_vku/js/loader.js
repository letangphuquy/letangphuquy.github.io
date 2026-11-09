window.addEventListener("load", () => {
    const loader = document.querySelector(".code-loader");
    
    loader.classList.add("code-loader-hidden");
    
    loader.addEventListener("transitionend", () => {
        try {
            document.body.removeChild(loader);
        } catch (error) {
            console.log(error);
        }
    })
})