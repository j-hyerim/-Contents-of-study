let date1 = new Date();
        document.write(date1); //모든시간과 날짜정보가 나ㅣ온다
        let month,day,yoil;
        month = date1.getMonth()+1;
        day = date1.getDate();
        yoil = date1.getDay();
        let array=['(일)','(월)','(화)','(수)','(목)','(금)','(토)']
        // document.write(month+"."+day+"("+yoil+")");
        document.getElementById('date').innerHTML=month+'월.'+day+'일.'+a[yoil];

        document.getElementById('food').innerHTML='오늘 '+a[yoil]+'의 추천요리는<br> <img src="./images02/food'+yoil+''.jpg"';