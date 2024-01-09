document.addEventListener("DOMContentLoaded", function () {
    
    let page3 = document.querySelector(".page3");
    let cor = document.querySelector(".cursor");
    let cursorvide = document.querySelector('#cursorvid');

    page3.addEventListener("mouseover", () => {
        cor.style.display = "block";
        cor.style.zIndex = 999;
    });

    page3.addEventListener("mouseleave", () => {
        cor.style.display = "none";
        cor.style.zIndex = -10;
    });

    page3.addEventListener("mousemove", (e) => {
        cor.style.left = e.clientX - 25 + "px";
        cor.style.top = e.clientY - 25 + "px";
    });

   
});

function changevideo() {
    let video = document.getElementById('vid');
    let source = video.querySelector('source');
    let cursorvide = document.querySelector('#cursorvid');
    let cursorsource = cursorvide.querySelector('source');

    let videoUrl = source.src;
    let videoName = videoUrl.split('/').pop();
    let firstvideo = "video.mp4";
    let secondvideo = "video2.mp4";

    if (videoName === firstvideo) {
        cursorsource.src = videoUrl;
        cursorvide.load();
        let urlarray = videoUrl.split("/");
        let newurlarray = urlarray.slice(0, urlarray.length - 1);
        newurlarray.push(secondvideo);
        let newurl = newurlarray.join('/');
        source.src = newurl;
        video.load();
    } else {
        cursorsource.src = videoUrl;
        cursorvide.load();
        let urlarray = videoUrl.split("/");
        let newurlarray = urlarray.slice(0, urlarray.length - 1);
        newurlarray.push(firstvideo);
        let newurl = newurlarray.join('/');
        source.src = newurl;
        video.load();
    }
}

changevideo();

var t1 = gsap.timeline()
t1.from(".page1 h1", {
    x: "-500",
    opacity: 0,
    duration: 0.8,
    stagger: 0.5,
})

t1.from(".page1 img", {
    x: 100,
    rotate: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.8
})


gsap.to(".horizontal img", {
    x: "-80vw",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        scrub: 2,
        start: "top 0",
        end: "top -100%",
        pin: true,
        onUpdate: (self) => {
            const scrollProgress = self.progress;
            const images = [
                "https://w.wallhaven.cc/full/85/wallhaven-8586my.png",
                "https://w.wallhaven.cc/full/x6/wallhaven-x6wjkv.png",
                "https://w.wallhaven.cc/full/jx/wallhaven-jxrkky.jpg",
            ];
            const index = Math.floor(scrollProgress * images.length);
            document.querySelector(".page2").style.backgroundImage = `url('${images[index]}')`;
        },
    },
});
