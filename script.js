function scrollToTheTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function changeOpacity() {

    const whatWeDo = document.querySelector(".whatWeDo");

    document.addEventListener("scroll", e => {

        console.log(e.pageY);

        if (e.pageY >= 1550) {
            whatWeDo.style.opacity = 1;
        }

    });

}

document.addEventListener("load", scrollToTheTop(), changeOpacity());