var crsr = document.querySelector('#cursor')
document.addEventListener("mousemove", function (add) {
    crsr.style.left = add.x + 30 + "px"
    crsr.style.top = add.y + "px"
})
var h4 = document.querySelectorAll("#nav h4");
h4.forEach(function (circle) {
    circle.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    circle.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })

})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img , .about-para , .next", {
    y: 60,
    opacity: 1,
    duration: 1,

    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // marker:true,
        start: "top 70%",
        end: "top 60%",
        scrub: 2
    }

})
gsap.from("#card-continer", {
    scale: 0.8,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: "#card-continer",
        scroller: "body",
        // marker:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }

})
gsap.from(".collen-1", {
    x: -70,
    y: -70,

    scrollTrigger: {
        trigger: ".collen-1",
        scroller: "body",
        // marker:true,
        start: "top 60%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from(".collen-2", {
    x: 70,
    y: 70,

    scrollTrigger: {
        trigger: ".collen-2",
        scroller: "body",
        // marker:true,
        start: "top 60%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#page-4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page-4 h1",
        scroller: "body",
        // marker:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 3
    }
})