$("document").ready(function(){
    AOS.init()

    $(".wrap").addClass("on")

    $(".header .header-list .nav ul li").eq(0).addClass("on")



    let bar = new ProgressBar.Circle("#pro1",{
        strokeWidth: 5,
        color: "#31a8ff",
        trailWidth: 5,
        // trailColor: "yellowgreen"
        // bar backgroundcolor 느낌
        step: function(state,circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar.animate(0.8)
    let bar2 = new ProgressBar.Circle("#pro2",{
        strokeWidth: 5,
        color: "#ff9a00",
        trailWidth: 5,
        step: function(state,circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar2.animate(0.8)
    let bar3 = new ProgressBar.Circle("#pro3",{
        strokeWidth: 5,
        color: "#2fac74",
        trailWidth: 5,
        step: function(state,circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar3.animate(0.8)
    let bar4 = new ProgressBar.Circle("#pro4",{
        strokeWidth: 5,
        color: "#25885b",
        trailWidth: 5,
        step: function(state,circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar4.animate(0.8)
    let bar5 = new ProgressBar.Circle("#pro5",{
        strokeWidth: 5,
        color: "#1b6242",
        trailWidth: 5,
        step: function(state,circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar5.animate(0.8)
    $(".number").animateNumber({
        number: 100000
    }, 800)
    // bar3.animate(0.5)
    // $(".reverse").prop("number", "100000").animateNumber({
    //     number: 0
    // }, 800)
})