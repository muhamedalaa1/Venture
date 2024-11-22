document.addEventListener('DOMContentLoaded',function(){
  //START locomotive smooth
  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector("#main"),
  //   smooth: true,
  // });
  // END locomotive smooth

  //START MOUSE FOLLOWER
  function getFollowMouse() {
    let pageOne = document.querySelector("header");
    let cursor = document.querySelector(".cursor");
    // pure JS
    // pageOne.addEventListener('mousemove',function(evenInfo){
    //     cursor.style.top = `${evenInfo.clientY}px`;
    //     cursor.style.left = `${evenInfo.clientX}px`;
    // })

    // Using GSAP
    pageOne.addEventListener("mousemove", function (eventInfo) {
      gsap.to(cursor, {
        x: eventInfo.clientX,
        y: eventInfo.clientY,
      });
    });
    pageOne.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
    pageOne.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });
  }
  getFollowMouse();
  //END MOUSE FOLLOWER

  // start page two
  function getPageTwoAnimated() {
    gsap.from(".upperPage p", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: ".pageTwo",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });

    gsap.from(".pageTwoParagraphs p", {
      y: 160,
      duration: 1,
      opacity: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".pageTwo",
        scroller: "body",
        start: "top 40%",
        end: "top 37%",
        scrub: 8,
      },
    });
  }
  getPageTwoAnimated();
  // end page two

  // start page three
  gsap.from(".pageThree .topOfPage h2", {
    height: 0,
    y: 120,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".pageThree",
      scroller: "body",
      scrub: 1,
      start: "10% 65%",
      end: "75% 30%",
    },
  });
  // end page three

  // start swipper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
  });
  // end swipper

  //start loader
  function getLoader() {
    let myTimeline = gsap.timeline();
    myTimeline.from(".loader h3", {
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
    myTimeline.to(".loader h3", {
      x: -10,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
    myTimeline.to(".loader", {
      height: 0,
    });
    myTimeline.to(".loader", {
      display: "none",
    });
    myTimeline.from("nav", {
      y: -20,
      opacity: 0,
      duration: 0.5,
    });
    myTimeline.from(".pageOneContainer h1 span", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });
  }
  getLoader();
  //end loader

  // start display img when mouse enter
  function getDisplayImgs(){
    document.querySelectorAll(".element").forEach((ele) => {
      let myUrl = ele.getAttribute("data-image");
      ele.addEventListener("mouseenter", function (e) {
        console.log(e);

        document.querySelector(".fixedImg").classList.remove("d-none");
        document.querySelector(
          ".fixedImg"
        ).innerHTML = `<img class="w-100 h-100" src="${myUrl}" alt="">`;
      });
      //  ele.addEventListener('mousemove',function(e){
      //       document.querySelector(".fixedImg").style.top = `${e.clientY}px`;
      //       document.querySelector(".fixedImg").style.left = `${e.clientX}px`;
      //  })
      //  document.querySelector(".fixedImg").addEventListener('mousemove',function(e){
      //       document.querySelector(".fixedImg").style.top = `${e.clientY}px`;
      //       document.querySelector(".fixedImg").style.left = `${e.clientX}px`;
      //  })
      ele.addEventListener("mouseleave", function () {
        document.querySelector(".fixedImg").classList.add("d-none");
      });
      document.querySelector(".fixedImg").addEventListener("mouseenter", function () {
          document.querySelector(".fixedImg").classList.remove("d-none");
        });
      document.querySelector(".fixedImg").addEventListener("mouseleave", function () {
          document.querySelector(".fixedImg").classList.add("d-none");
        });
    });
  }
  getDisplayImgs();
  // end display img when mouse enter

  // start menu overlay
  document.querySelector("nav button h4").addEventListener('click',function(){


    document.querySelector(".menuOverlay").style.top =0;


  });
  document.querySelector(".fa-xmark").addEventListener('click',function(){
    document.querySelector(".menuOverlay").style.top = "-100%" ;

  });
  // end menu overlay
})