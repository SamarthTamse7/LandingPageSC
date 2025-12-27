
    let logSignTimeLine = gsap.timeline();

    logSignTimeLine.to("#signForm", {
        left: "100%",
        duration: .5,
        ease: "none",
        opacity: 0,
        scale: 0.7
    }, "first")

    logSignTimeLine.to("#logForm", {
        left: "0%",
        duration: .5,
        ease: "none",
        opacity: 1,
    }, "first")

    logSignTimeLine.from("#logForm", {
        scale: 0.7,
    }, "first")

    logSignTimeLine.pause()

    document.getElementById("toLog").addEventListener("click", () => {
        logSignTimeLine.play();
    })

    document.getElementById("toSign").addEventListener("click", () => {
        logSignTimeLine.reverse();
    })

    let animeTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2
    })

    animeTimeline.to("#image1", {
        left: "0%",
        duration: 1,
        delay: 1,
    }, "first")

    animeTimeline.to("#image1 img", {
        left: "0%",
        duration: 1,
        delay: 1,
    }, "first")

    animeTimeline.to("#image2", {
        left: "0%",
        duration: 1,
        delay: 4,
    }, "first")

    animeTimeline.to("#image2 img", {
        left: "0%",
        duration: 1,
        delay: 4,
    }, "first")

    animeTimeline.to("#image3", {
        left: "0%",
        duration: 1,
        delay: 7,
    }, "first")

    animeTimeline.to("#image3 img", {
        left: "0%",
        duration: 1,
        delay: 7,
    }, "first")