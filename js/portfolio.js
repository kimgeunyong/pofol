$("document").ready(function(){

    $(".wrap").addClass("on")
    

    $(".header .header-list .nav ul li").eq(1).addClass("on")
    

    $(".header .header-list .hamburger").click(function(){
        $(".header .header-list .side-nav").addClass("on")
    })
    // $(".header .header-list .side-nav .nav-wrap i").click(function(){
    //     $(".header .header-list .side-nav").removeClass("on")

    $(".content .right .landrover").addClass("on")
    $(".content .left .web").addClass("on")
    $(".content .left .web ul").addClass("on")
    $(".content .left .web ul li").eq(0).addClass("on")

    $(".content .left .web span").on("click touchstart",function(){
        $(".content .left .web ul").toggleClass('on')
        $(".content .left .web").toggleClass("on")
        $(".content .left .app").removeClass("on")
        $(".content .left .design").removeClass("on")
        $(".content .left .cc").removeClass("on")
        $(".content .left").css("background-color", "#363636")
    })

    $(".content .left .web ul li").click(function(){
        let i = $(this).index()
        $(".content .left .web ul li").removeClass("on").eq(i).addClass("on")
    })
    $(".content .left .web ul li").eq("0").click(function(){
        $(".content .left .sub").removeClass("on")
        $(".content .right .box").removeClass("on")
        $(".content .left .web").addClass("on")
        $(".content .right .landrover").addClass("on")
        // $(".header .header-list").css("background-color", "rgba(27,98,66,0.85)")
        $(".content .left").css("background-color", "#1b6242")
    })
    $(".content .left .web ul li").eq("1").click(function(){
        $(".content .left .sub").removeClass("on")
        $(".content .right .box").removeClass("on")
        $(".content .left .web").addClass("on")
        $(".content .right .balenciaga").addClass("on")
        // $(".header .header-list").css("background-color", "rgba(173,17,16,0.85)")
        $(".content .left").css("background-color", "#ad1110")
    })
    $(".content .left .web ul li").eq("2").click(function(){
        $(".content .left .sub").removeClass("on")
        $(".content .right .box").removeClass("on")
        $(".content .left .web").addClass("on")
        $(".content .right .angel").addClass("on")
        // $(".header .header-list").css("background-color", "rgba(118,119,115,0.85)")
        $(".content .left").css("background-color", "#767773")
    })

    $(".content .left .app").click(function(){
        $(".content .left .sub").removeClass("on")
        $(".content .right .box").removeClass("on")
        $(".content .left .web ul li").removeClass("on")
        $(".content .left .web ul").removeClass("on")
        $(".content .left .app").addClass("on")
        $(".content .right .r-app").addClass("on")
        // $(".header .header-list").css("background-color", "rgba(247,71,48,0.85)")
        $(".content .left").css("background-color", "#f74730")
    })
    $(".content .left .design").click(function(){
        $(".content .left .sub").removeClass("on")
        $(".content .right .box").removeClass("on")
        $(".content .left .web ul li").removeClass("on")
        $(".content .left .web ul").removeClass("on")
        $(".content .left .design").addClass("on")
        $(".content .right .r-design").addClass("on")
        // $(".header .header-list").css("background-color", "rgba(54,54,54,0.85)")
        $(".content .left").css("background-color", "#363636")
    })
    $(".content .left .cc").click(function(){
        $(".content .left .sub").removeClass("on")
        $(".content .right .box").removeClass("on")
        $(".content .left .web ul li").removeClass("on")
        $(".content .left .web ul").removeClass("on")
        $(".content .left .cc").addClass("on")
        $(".content .right .clone").addClass("on")
        // $(".header .header-list").css("background-color", "rgba(54,54,54,0.85)")
        $(".content .left").css("background-color", "#363636")
    })
})