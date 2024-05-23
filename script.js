
var t1 =gsap.timeline();

t1.from(".line h1, .line h2",{
    y:150,
    stagger:0.25,
    duration:0.8,
})
// t1.to(".line h2",{
//     animationName:"anime",
//     opacity:1
// })
t1.from("#line1-part1,.line h2",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5");

        var grow = 0;    
        setInterval(function() {
            if(grow<100)
            {
                grow+=1;
                h5timer.innerHTML = grow;
            }
            else{
                grow=100;
                h5timer.innerHTML = grow;
            }
        },25);

    }
});

t1.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:2.7
})
t1.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0,
    duration:0.5,
    ease:Power4
})
t1.to("#loader",{
    display: "none"
})


