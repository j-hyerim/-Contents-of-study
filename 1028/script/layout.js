$(document).ready(function(){

    let gnb = $('.gnb > ul > li'); //메인메뉴 변수

  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);
    if(sPos >=880){
      $('.gnb').addClass('on');
    }else{
      $('.gnb').removeClass('on');
    }
    

    // 방법 1 /세로 스크롤 값을 각각 체크하여 수식 작성
    // if(sPos>200 && sPos<960){
    //   gnb.find('a').removeClass('act');
    //   gnb.eq(0).find('a').addClass('act');
    // }else if(sPos>1080 && sPos<1800){
    //   gnb.find('a').removeClass('act');
    //   gnb.eq(1).find('a').addClass('act');
    // }else if(sPos>1920 && sPos<2660){  
    //   gnb.find('a').removeClass('act');
    //   gnb.eq(2).find('a').addClass('act');
    // }else if(sPos>2778 && sPos<3490){  
    //   gnb.find('a').removeClass('act');
    //   gnb.eq(3).find('a').addClass('act');
    // }else if(sPos>3580){
    //   gnb.find('a').removeClass('act');
    //   gnb.eq(4).find('a').addClass('act');
    // }

    // 방법 2 /section tag의 높이 값과 세로스크롤 값 영역과 비교하여 0일때 addClass 적용하기

    gnb.find('a').removeClass('act');

    $('section').each(function(i){
      let top = $(this).offset().top-400;
      if(sPos>=top){
        gnb.find('a').removeClass('act');
        gnb.eq(i).find('a').addClass('act');
      }
    })
      
  });

  // 내비게이션 각각 클릭시 해당 기능 삽입하기
  gnb.click(function(){
    let i = $(this).index();
    console.log(i); //0,1,2,3,4나오는지 확인
    $('html, body').animate({scrollTop:$('main section').eq(i).offset().top},300, 'easeOutElastic');
    return false; //새로고침 방지
  });

});