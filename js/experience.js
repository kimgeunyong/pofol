$("document").ready(function(){


    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $(".top").addClass("on");
            $(".header .header-list").addClass("on");
        }
        else {
            $(".top").removeClass("on");
            $(".header .header-list").removeClass("on");
        }
    });

    $(".top").click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    AOS.init()


    $(".wrap").addClass("on")
    // $(".header .header-list .logo").addClass("on")
    $(".header .header-list .nav ul li").eq(2).addClass("on")

    $(".header .header-list .hamburger").click(function(){
        $(".header .header-list .side-nav").addClass("on")
    })
    $(".header .header-list .side-nav .nav-wrap i").click(function(){
        $(".header .header-list .side-nav").removeClass("on")
    })






})