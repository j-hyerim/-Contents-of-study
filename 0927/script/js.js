
        let today = new Date();
        //년월일시분초 출력
        document.write(today+"<br>");//표준시간, 날짜 전체를 표시
        document.write(today.getFullYear()+"<br>");//
        document.write(today.getMonth()+1+"<br>");//
        document.write(today.getDate()+"<br>");//
        document.write(today.getDay()+"<br>");//
        let yoil = ['일', '월', '화', '수','목','금','토'];
        document.write(`오늘의 요일은 ${yoil[today.getDay()]}요일 입니다<br>`);

        document.write(today.getHours()+"시 <br>");//
        document.write(today.getMinutes()+"분 <br>");//
        document.write(today.getSeconds()+"초 <br>");//
        document.write(today.getMilliseconds()+"<br>");//
        //실시간 디지털시계
        function startTime(){
            let today1 = new Date();
            let h = today1.getHours();
            let m = today1.getMinutes();
            let s = today1.getSeconds();

            h = checkNum(h);
            m = checkNum(m);
            s = checkNum(s);
            document.getElementById('clock').innerHTML=h+':'+m+':'+s;
            let t = setTimeout(startTime,500);
        }
        function checkNum(i){
        if (i <10){
            i= '0'+ i ;
        }
        return i;
        }
        startTime();