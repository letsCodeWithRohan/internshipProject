tl = gsap.timeline()
gsap.to('.progress',{
    delay: 1,
    duration:5,
    width:'100%'
})
tl
.to('.inner:first-child',{
    delay:1,
    duration: 1,
    y: '-9vh'
})
.to('.inner:first-child',{
    delay:1,
    duration: 1,
    y: '-18vh'
})
.to('.inner:first-child',{
    delay:1,
    duration: 1,
    y: '-27vh'
})
.to('.preloader',{
    delay: 1,
    duration: 1,
    opacity: 1,
    y:'-100%',
    background: 'rgba(4, 9, 30, 1)'
})

.from('nav',{
    duration:0.5,
    y:'20px',
    opacity:0
})
.from('.textbox h1',{
    duration:0.5,
    y:'20px',
    opacity:0
})
.from('.textbox p',{
    duration:0.5,
    y:'20px',
    opacity:0
})
.from('.textbox a',{
    duration:0.5,
    y:'20px',
    opacity:0
})
