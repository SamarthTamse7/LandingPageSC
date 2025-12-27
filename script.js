
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


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

let navtimeline = gsap.timeline({ paused: true });

navtimeline.to(".opts", {
    right: "0px",
    duration: 0.7,
})


document.getElementById("menu").addEventListener("click", () => {
    navtimeline.play();
})

document.getElementById("optio").addEventListener("click", () => {
    navtimeline.reverse();
})


let heorTimeline = gsap.timeline();


heorTimeline.from(".heroAnime", {
    x: -50,
    opacity: 0,
    duration: 0.5,
    stagger: .1,
    delay: 1,
})


heorTimeline.to("#applyBtn", {
    opacity: 1,
    duration: 0.2,
})


heorTimeline.to("#counBtn", {
    opacity: 1,
    duration: 0.2,
})


heorTimeline.from("nav", {
    y: -50,
    duration: 0.5,
    stagger: .1,
})

let ab = document.getElementById("applyBtn")
console.log(ab);




let appearance = 50;
let animationTime = .7;

gsap.utils.toArray(".reason").forEach((card) => {
    gsap.from(card, {
        y: appearance,
        opacity: 0,
        duration: animationTime,
        scrollTrigger: {
            scroller: "body",
            start: "top 60%",
            trigger: card,
        }
    })
})

gsap.utils.toArray(".course").forEach((card) => {
    gsap.from(card, {
        y: appearance,
        opacity: 0,
        duration: animationTime,
        scrollTrigger: {
            scroller: "body",
            start: "top 60%",
            trigger: card,
        }
    })
})

gsap.utils.toArray(".step").forEach((card) => {
    gsap.from(card, {
        y: appearance,
        opacity: 0,
        duration: animationTime,
        scrollTrigger: {
            scroller: "body",
            start: "top 60%",
            trigger: card,
        }
    })
})

gsap.from("#rSec #img", {
    y: appearance,
    opacity: 0,
    duration: animationTime,
    scrollTrigger: {
        scroller: "body",
        start: "top 60%",
        trigger: "#rSec #img",
    }
})

gsap.from("#lSec h1", {
    y: appearance,
    opacity: 0,
    duration: animationTime,
    scrollTrigger: {
        scroller: "body",
        start: "top 60%",
        trigger: "#lSec h1",
    }
})

gsap.from("#steps h1", {
    y: appearance,
    opacity: 0,
    duration: animationTime,
    scrollTrigger: {
        scroller: "body",
        start: "top 60%",
        trigger: "#steps h1",
    }
})

gsap.from("#services h1", {
    y: appearance,
    opacity: 0,
    duration: animationTime,
    scrollTrigger: {
        scroller: "body",
        start: "top 60%",
        trigger: "#services h1",
    }
})

gsap.from("#rSec h1", {
    y: appearance,
    opacity: 0,
    duration: animationTime,
    scrollTrigger: {
        scroller: "body",
        start: "top 60%",
        trigger: "#rSec h1",
    }
})

gsap.from("#contact #innerDiv", {
    y: appearance,
    opacity: 0,
    duration: animationTime,
    scrollTrigger: {
        scroller: "body",
        start: "top 60%",
        trigger: "#contact #innerDiv",
    }
})

const colleges = [
    "College 1",
    "College 2",
    "College 3",
    "College 4",
    "College 5",
    "College 6",
    "College 7",
    "College 8",
    "College 9",
    "College 10",
    "College 11",
    "College 12",
    "College 13",
    "College 14",
    "College 15",
    "College 16",
    "College 17",
    "College 18",
    "College 19",
    "College 20",
    "College 21",
    "College 22",
    "College 23",
    "College 24",
    "College 25",
    "College 26",
    "College 27",
    "College 28",
    "College 29",
    "College 30",
    "College 31",
    "College 32",
    "College 33",
    "College 34",
    "College 35",
    "College 36",
    "College 37",
    "College 38",
    "College 39",
    "College 40"
];


const collegeList = document.getElementById("innerSec");
const searchInput = document.getElementById("colSer");

function renderColleges(filter = "") {
    document.querySelectorAll(".college").forEach(el => el.remove());

    colleges
        .filter(college =>
            college.toLowerCase().includes(filter.toLowerCase())
        )
        .forEach(college => {
            const div = document.createElement("div");
            div.className = "college";
            div.textContent = college;
            collegeList.appendChild(div);
        });
}

searchInput.addEventListener("input", (e) => {
    renderColleges(e.target.value);
});

renderColleges();

const courses = [
    "Course 1",
    "Course 2",
    "Course 3",
    "Course 4",
    "Course 5",
    "Course 6",
    "Course 7",
    "Course 8",
    "Course 9",
    "Course 10",
    "Course 11",
    "Course 12",
    "Course 13",
    "Course 14",
    "Course 15",
    "Course 16",
    "Course 17",
    "Course 18",
    "Course 19",
    "Course 20",
    "Course 21",
    "Course 22",
    "Course 23",
    "Course 24",
    "Course 25",
    "Course 26",
    "Course 27",
    "Course 28",
    "Course 29",
    "Course 30",
    "Course 31",
    "Course 32",
    "Course 33",
    "Course 34",
    "Course 35",
    "Course 36",
    "Course 37",
    "Course 38",
    "Course 39",
    "Course 40"
];


const courseList = document.getElementById("innerSecs");
const searchInputC = document.getElementById("colSers");

function renderCourses(filter = "") {
    document.querySelectorAll(".coursess").forEach(el => el.remove());

    courses
        .filter(college =>
            college.toLowerCase().includes(filter.toLowerCase())
        )
        .forEach(college => {
            const div = document.createElement("div");
            div.className = "coursess";
            div.textContent = college;
            courseList.appendChild(div);
        });
}

searchInputC.addEventListener("input", (e) => {
    renderCourses(e.target.value);
});

renderCourses();

let collegeShowTimeline = gsap.timeline({ paused: true});

collegeShowTimeline.to("#collegesIsland", {
    top: "0%",
    duration: .7,
})

document.getElementById("collegeshow").addEventListener("click", () => {
    collegeShowTimeline.play();
})


document.getElementById("collegeshow2").addEventListener("click", () => {
    collegeShowTimeline.play();
})


document.getElementById("wrongOpt").addEventListener("click", () => {
    collegeShowTimeline.reverse();
})

let courseShowTimeline = gsap.timeline({ paused: true});

courseShowTimeline.to("#courseIsland", {
    top: "0%",
    duration: .7,
})

document.getElementById("courseSho").addEventListener("click", () => {
    courseShowTimeline.play();
})


document.getElementById("courseSho2").addEventListener("click", () => {
    courseShowTimeline.play();
})


document.getElementById("wrongOptC").addEventListener("click", () => {
    courseShowTimeline.reverse();
})