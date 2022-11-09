$("document").ready(function(){

    // AOS.init()

    $(".wrap").addClass("on")

    $(".header .header-list .nav ul li").click(function(){

        let i = $(this).index();

        $(".header .header-list .nav ul li").removeClass("on").eq(i).addClass("on")
        
        // if (".header .header-list .nav ul li.on") {
        //     $(".header .header-list .logo img").attr("src", "images/logo.on.png")

        //     if($(".header .header-list .logo img").attr("src", "images/logo.on.png"))
        //     {
        //         $(".header .moon").addClass("on")
                
        //     }

        // } else {
        //     $(".header .header-list .logo img").attr("src", "images/logo.png")
        // }

        

    })

    $(".header .header-list .hamburger").click(function(){
        $(".header .header-list .side-nav").addClass("on")
    })
    $(".header .header-list .side-nav .nav-wrap i").click(function(){
        $(".header .header-list .side-nav").removeClass("on")
    })


    $(".content .moon img").click(function(){
        $(".header .header-list .logo").toggleClass("on")
        $(".content .content-wrap ul li").toggleClass("on")
        $(".content .moon").toggleClass("on")
    })
    


    

})