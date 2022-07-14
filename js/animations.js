let headingTimeline=gsap.timeline()

let intoTl = gsap.timeline({

    scrollTrigger: {
      trigger: ".intro",   
      start: "top 80%", //trigger viewport
      ease: "power5.inOut",
      
    }
  });
let articleTl = gsap.timeline({

    scrollTrigger: {
      trigger: ".articles",   
      start: "top center", //trigger viewport
      ease: "power5.inOut",
    }
  });
let footerTl = gsap.timeline({

    scrollTrigger: {
      trigger: "footer",   
      start: "top 90%", //trigger viewport
      ease: "power5.inOut",
    }
  });


let heroTl=gsap.timeline({repeat:-1,repeatDelay:0.3,yoyo:true})
headingTimeline.from("header nav img",{opacity:0,x:-1000,duration:1,ease:"power5.inOut"})
headingTimeline.from("header nav .nav-btn",{opacity:0,x:500,duration:1,ease:"power5.inOut"})
headingTimeline.from("header li",{scale:0.01,opacity:0,y:200,stagger:{each:0.3,from:"center",ease:"power3.inOut"},ease:"power3.inOut"},"<")
headingTimeline.from("header h1",{opacity:0,x:-700,duration:.5,ease:"power5.inOut"},"<40%")
headingTimeline.from("header p",{opacity:0,x:-700,duration:.5,ease:"power5.inOut"},"<40%")
headingTimeline.from("header .hero .btn",{opacity:0,duration:1},">")
headingTimeline.from("header .illustration",{opacity:0,duration:1,y:200},"<")

heroTl.to("html",{"--updownAnimation":"20vh",duration:2.5})

intoTl.from(".choose .intro",{opacity:0,x:-1000,scale:0.3,duration:.7,ease:"power3.inOut"})
intoTl.from(".reason",{opacity:0,x:-1000,rotate:45,stagger:.7,ease:"back.inOut"},"<50%")

articleTl.from(".articles h2",{opacity:0,y:1000,scale:0.3,duration:1,ease:"power5.inOut"})
articleTl.from(".articles article",{rotate:-100,scale:0.3,opacity:0,stagger:{each:.3,from:"random"}})
articleTl.from(".articles article h3",{y:200,scale:0.3,opacity:0,duration:1,ease:"power3.inOut"},"<40%")
articleTl.from(".articles article h6",{y:200,scale:0.3,opacity:0,duration:1,ease:"power3.inOut"},"<40%")
articleTl.from(".articles article p",{y:200,scale:0.3,opacity:0,duration:1,ease:"power3.inOut"},"<40%")

footerTl.from("footer .logo",{opacity:0,y:200,duration:.5,ease:"power5.inOut"})
footerTl.from("footer .social-icons",{opacity:0,y:50,duration:.5,ease:"power5.inOut"},"<50%")
footerTl.from("footer li",{scale:0.01,opacity:0,y:50,stagger:.3,ease:"power3.inOut"},"<50%")

footerTl.from("footer .credits",{rotate:360,opacity:0,y:50,duration:.5,ease:"back.inOut"},"<70%")