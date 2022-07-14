let showMenu=()=>
{
    let navLinks=document.querySelector(".links")
    let open=document.querySelector(".menu")
    let close=document.querySelector(".close")
    let overlay=document.querySelector(".overlay")
    let body=document.body
    let tl=gsap.timeline()
    open.addEventListener("click",()=>
    {
        if(navLinks.style.display="none")
        {
            navLinks.style.setProperty("display","flex","important")
            open.style.setProperty("display","none","important")
            close.style.setProperty("display","flex","important")
            overlay.style.setProperty("opacity","100%")
            body.style.setProperty("overflow","hidden")
            tl.from(navLinks,{opacity:0,y:200,duration:1})
        }
        else
        {
            navLinks.style.setProperty("display","none","important")
            open.style.setProperty("display","flex","important")
            close.style.setProperty("display","none","important")
        }
    })
    close.addEventListener("click",()=>
    {
        if(navLinks.style.display="flex")
        {
            navLinks.style.setProperty("display","none","important")
            open.style.setProperty("display","flex","important")
            close.style.setProperty("display","none","important")
            overlay.style.setProperty("opacity","0%")
            body.style.setProperty("overflow","visible")
        }
    })

}
showMenu()