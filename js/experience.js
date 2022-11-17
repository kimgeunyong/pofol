$("document").ready(function(){

    AOS.init()

    $(".wrap").addClass("on")
    $(".header .header-list .logo").addClass("on")
    $(".header .header-list .nav ul li").eq(2).addClass("on")

    $(".header .header-list .hamburger").click(function(){
        $(".header .header-list .side-nav").addClass("on")
    })
    $(".header .header-list .side-nav .nav-wrap i").click(function(){
        $(".header .header-list .side-nav").removeClass("on")
    })






})