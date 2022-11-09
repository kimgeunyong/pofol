$("document").ready(function(){

    $(".header .header-list .nav ul li").click(function(){

        let i = $(this).index();

        $(".header .header-list .nav ul li").removeClass("on").eq(i).addClass("on")
        
        if (".header .header-list .nav ul li.on") {
            $(".header .header-list .logo img").attr("src", "images/logo.on.png")
        } else {
            $(".header .header-list .logo img").attr("src", "images/logo.png")
        }

    })
    $(".header .header-list .side-nav .nav-wrap i").click(function(){
        $(".header .header-list .side-nav").removeClass("on")
    })


})