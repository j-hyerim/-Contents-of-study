$(document).ready(function(){
    //each()
    let g_mnu = $('.gallery .lnb >li >a');
    let g_img = $('.gallery figure img');
    g_mnu.each(function(){
        $(this).click(function(){
            $('.gallery .lnb>li>a').removeClass('on');
            $(this).addClass('on');
        });

    });

    $('.g_box figure').hover(function(){
        $(this).find('figcaption').stop().animate({'bottom':'0px'},500);
    },function(){
        $(this).find('figcaption').stop().animate({'bottom':'-40px'},500);

    })

    g_img.each(function(){
       g_img.click(function(){
        let src = $(this).attr('src');
        console.log(src);
        
            let modal=`
            <div class="modal">
                <div class="m_banner">
                    <img src=${src} alt="">
                    <i class='fas fa-times'>닫기</i>
                </div>
            </div>
            `
        
            $('body').append(modal);
        
            $('.modal i.fa-times').click(function(){
                $('.modal').fadeOut();
            })
       }) 
    });
});