$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >30){
            $('.navbar').addClass("sticky-top");
        }else{
            $('.navbar').removeClass("sticky-top");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
    //typing animation script
    let typed = new Typed(".typing", {
        strings: ["a Student", "an Engineer", "a Gamer", "", "a Guitarist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    let typed2 = new Typed(".typing-2", {
        strings: ["std::cout &lt;&lt;'Hey there, I am Calvin!!';"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
});