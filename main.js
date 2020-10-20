name = "";
listname = [
    "Lê Thị Thúy An",
    "Võ Cao Quỳnh Anh",
    "Trần Ngọc Ánh",
    "Trần Ngọc Dễ",
    "Văn Ngọc Diệp",
    "Huỳnh Hồng Duyên",
    "Phạm Phương Hiếu",
    "Nguyễn Thị Quế Hương",
    "Vũ Thị Huyền",
    "Nguyễn Tuyết Linh",
    "Phạm Mỹ Quỳnh Nhi",
    "Trần Huỳnh Thảo Quyên",
    "Đặng Anh Thư",
    "Lê Minh Thư",
    "Võ Lê Trâm",
    "Lê Huỳnh Khả Trân",
    "Trần Thị Huyền Trinh",
    "Lê Thụy Ngọc Trinh",
    "Trương Thị Thu Uyên",
    "Huỳnh Tú Uyên",
    "Nguyễn Đỗ Thanh Vy",
    "Nguyễn Thị Ngọc Mai"
];

index = 0;

contentS = [];
imglink = [];
i = 0; 
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //1
contentS[listname[i++]] = [
    ["20/10 dui dẻ nha, sắp tới gặp nhiều hạnh phúc và tràn đầy sức sống","HayQuáTrời"], 
    ["Chúc bà có một ngày lễ thiệt ấm áp mà không phải đóng MV 2 triệu năm","Đen Vâu"], 
    ["Năm mới dui dẻ, sinh nhật dui dẻ, trung thu dui dẻ, giáng sinh dui dẻ","Ahihi"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //2
contentS[listname[i++]] = [
    ["Chúc các bạn nữ của toi xinh đẹp hơn, giỏi giang hơn, thành công hơn trong cuộc sống!","LDũng"], 
    ["You’ve faced adversity through resilience and you have resolved your problems by means of a smile and you’ve obscured your tribulations in your heart. All I ask is for you is to be happy today. Happy Vietnamese Women’s Day!","Chris"], 
    ["Mọi thứ trước mắt đang chờ, hãy bước tiếp để khám phá nhé! 20/10 vui vẻ","Ahihi"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //3
contentS[listname[i++]] = [
    ["Chúc các bạn nữ, dù đang ở đâu, làm gì thì cũng thật hạnh phúc, vui vẻ với điều mình làm nhé. Hẹn mọi người tết gặp","Chàng trai hay làm khảo sát"], 
    ["Một người phụ nữ duyên dáng nhận được sức mạnh từ những khó khăn, mỉm cười trong đau khổ và dường như còn mạnh mẽ hơn với những lời cầu nguyện và hi vọng. Chúc bạn một ngày Phụ nữ Việt Nam vui vẻ, khoan khoái vì hôm nay là ngày của bạn!","Chris"], 
    ["Nhân ngày 8/3 + 12/7, mình chúc bạn có một niềm vui bất tận nhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","Nanami"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //4
contentS[listname[i++]] = [
    ["Tôi cầu chúc bạn mãi xinh đẹp, luôn là bông hoa thơm trong vườn hoa ngát hương. Và mỗi người trên con đường kiếm tìm hạnh phúc sẽ tìm được một tình yêu vừa vặn với chính mình.","Chris"], 
    ["Con chim én màu xanh <br> Trên cành cây màu đỏ <br> Lại đây tui nói nhỏ <br>Chúc bạn mãi xinh nha","cak cak cak Perry!"], 
    ["Chúc những điều tốt đẹp đến với bạn như thứ mà cha mẹ đã trao cho bạn :3","Kuller"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //5
contentS[listname[i++]] = [
    ["Chúc các nữ lớp chúng ta thành công, có thật nhiều tiền","fromtrongkhangwithlove"], 
    ["女の人、幸せで、ユニークで、特別を感じるじゃないか！ハッピー女性の日！<br>Hãy cảm thấy mình đặc biệt, duy nhất và hạnh phúc vào ngày của bạn nhé cô gái. Chúc bạn một 20/10 hạnh phúc!","Chris"], 
    ["Nhỏ nhắn không cần phải e dè, vì đó là cute nên nhớ vui hết mình nhé","Omaewamoushinderu"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //6
contentS[listname[i++]] = [
    ["Một ngày vui vẻ nhé! <br> 20/10 ngàn nụ cười:))","Blacklin"], 
    ["素晴しくて、偉大な友人。あなたのような友達を持っていて、光栄です。！あなたに非常に幸せな女性の日！<br> Bạn là người bạn vô cùng thú vị và người bạn tuyệt vời của tôi. Thật vinh hạnh cho tôi khi có người bạn như bạn. Chúc mừng ngày của bạn nhé!","Chris"], 
    ["20/10 chúc bạn mãi tưới vui, duyên dáng và yêu kiều nha","Kuller"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //7
contentS[listname[i++]] = [
    ["Chúc bạn mãi đẹp gái, pass môn vèo vèo ♡♡♡","cak cak cak Perry!"], 
    ["Chúc những dự định của bà sẽ luôn đi theo đúng con đường mà bà đó chọn chứ không bị lạc trôi về nơi phương xa ấy! ","Sơn Tùng MTP"], 
    ["Chúc chị Hiếu 20/10 vui tươi lấy sức để chạy deadline :v","Ziazia"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //8
contentS[listname[i++]] = [
    ["Chúc bạn nhận được nhiều quà, nhiều hoa nhiều lời khen lời chúc của phái nam trong ngày hôm nay. Chúc bạn gặp nhiều may mắn hơn, hạnh phúc hơn nhiều niềm vui, nhiều điều tuyệt diệu hơn.","Chris"], 
    ["Sóng bắt đầu từ gió<br> Gió bắt đầu từ đâu?<br> Tui cũng không biết nữa <br> Nhưng chúc bạn mãi xinh","cak cak cak Perry!"], 
    ["Love you!","fromtrongkhangwithlove"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //9
contentS[listname[i++]] = [
    ["Ăn mau chóng lớn nhe 👍👍","No name"], 
    ["Trăm năm núi đá cũng mòn<br> Cớ sao cậu lại vẫn còn trẻ trung <br> Ngàn năm nước biển chẳng còn <br> Cớ sao cậu lại xinh thêm thế này.","cak cak cak Perry!"], 
    ["Cuộc sống đâu ai biết trước được điều gì đâu, nên cứ 20/10 này thì ta cứ vui dù dài hay lâu","Ráp Diệt"], 
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //10
contentS[listname[i++]] = [
    ["Chúc bạn luôn thật xinh đệp, hạnh phúc và đạt được thành công như mong đợi của bản thân nha","Hide"], 
    ["Có con mèo beo béo <br> Cuộn một cục tròn xoe <br>  Này cái cậu cute <br> 20 tháng 10 vui vẻ","cak cak cak Perry!"], 
    ["20/10 chúc bạn mãi cuteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","Nanami"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //11
contentS[listname[i++]] = [
    ["Chúc bà có thể fly high với ước mơ  của đời mình và tìm được ý chung nhân của đời mình và có một cuộc sống ấm no hạnh phúc nè!! ^^","TờRọng"], 
    ["Xin chúc mọi điều tốt đẹp nhất đều dành cho bạn vào hôm nay, thật vui vẻ và hạnh phúc nhé ","Noname"], 
    ["Nhân ngày 20 - 10, chúc bạn tôi luôn luôn xinh đẹp, tươi trẻ và thành công để có thêm nhiều chàng trai đeo bám như lửa bám xăng, như răng bám lợi, như trời bám mây, như cây bám đất, như bít tất bám bàn chân.","Chris"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //12
contentS[listname[i++]] = [
    ["Trăng lên đỉnh núi trăng tà <br> Còn bạn cứ mãi trẻ hoài vậy sao. <br> Chúc bạn mãi mãi giữ đc vẻ đẹp trẻ trung của mình như bài thơ mình chế ở trên :)))))","cak cak cak Perry!"], 
    ["You’ve faced adversity through resilience and you have resolved your problems by means of a smile and you’ve obscured your tribulations in your heart. All I ask is for you is to be happy today. Happy Vietnamese Women’s Day!","Chris"], 
    ["Đương đầu với thế giới, bức phá những điều mới, niềm vui tiếp nối tới, 20/10 phơi phới","Ráp Diệt"]
];

imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //13
contentS[listname[i++]] = [
    ["20/10 lại lặp lại rồi. Nhưng đâu năm nào giống năm nào. Mong rằng bạn lun phát triển, ngày càng xinh đẹp, đạt được nhiều mục tiêu trong cuộc sống. Sống những ngày trọn vẹn nhaaaaaa !!!!","NKC"], 
    ["Sắc đẹp, trí tuệ, tình yêu... Mình mong tất cả mọi thứ tốt đẹp sẽ đến với bạn nhiều hơn từ hôm nay!!!","Noname"], 
    ["Ngày 20/10, xin gửi đến các chị em đôi dòng ngắn gọn: chúc chị em vui như chim sẻ, khỏe như đại bàng, giàu sang như chim phượng, làm lụng như chim sâu, sống lâu như chim đà điểu.","Chris"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //14
contentS[listname[i++]] = [
    ["Chúc bé ngày càng xinh đẹp, hạnh phúc nở nụ cười nhiều hơn, thuận lợi và thành công trên con đường mình chọn nhé! Là con gái là không những phải xinh mà phải trở nên quyền lực nữa đó nha hihi!","Hóm hỉnh"], 
    ["Có vài đốm lửa nhỏ <br> Bỗng bùng cháy thật to <br>  Vẫn hỏi nhỏ câu này <br>  Sao mà bạn xinh thế <br>  Nói thêm tiếp một câu<br>  20 tháng 10 vui vẻ","cak cak cak Perry!"], 
    ["Không còn hung dữ","Linh đen"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg";  //15
contentS[listname[i++]] = [
    ["Trăm năm trong cõi người ta, <br>Chữ tài chữ sắc là bạn chứ đâu. <br>Trải qua một cuộc bể dâu <br>Mà bạn vẫn giữ nét tiên lạ thường","Tô Cơm Chiên"], 
    ["Chúc bạn nhận đư­ợc nhiều quà, nhiều hoa nhiều lời khen lời chúc của phái nam trong ngày hôm nay. Chúc bạn gặp nhiều may mắn hơn, hạnh phúc hơn nhiều niềm vui, nhiều điều tuyệt diệu hơn.","Chris"], 
    ["Cầu một năm phát tài","N"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //16
contentS[listname[i++]] = [
    ["Every home, every heart, every feeling and every moment of happiness is truly incomplete without you. Only you can complete this world. Have a wonderful women's day!","Chris"], 
    ["20/10 (20 chia 10) là 2, nên mình hi rồi mình high, chúc ngày mai tươi hơn hôm nai","Ráp Diệt"], 
    ["1 2 3 con thỏ <br> nằm dưới gốc cây nhỏ <br>  oh cái bạn ciu te <br>  dễ thương đáng yêu này <br> chúc 20/10 vui vẻ. ","cak cak cak Perry!"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //17
contentS[listname[i++]] = [
    ["Làn thu thủy, nét xuân sơn <br> Hoa ghen thua thắm, liễu hờn kém xanh. <br>Bạn tui nghiêng nước nghiêng thành, <br>Sắc đành nhờ bạn, Tài nhờ bạn luôn.","cak cak cak Perry!"], 
    ["Cuộc sống này, chỉ có làm, cần cù, chịu khó, siêng năng. Chỉ có làm, thì mới có ăn. Nên là mong trong quá trình phấn đấu vươn lên của bà sẽ gặp được nhiều may mắn, có nhiều cao nhân giúp đỡ và gặp hái được nhiều thành công nè ^^","TờRọng"], 
    ["Happy Viet Nam Women's Day! Chúc cô bạn xinh đẹp của mình có một ngày 20/10 vui vẻ, hạnh phúc nhé. Chúc cho mọi dự định trong tương lai của bạn sẽ thành công.","Chris"]
];

imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //18
contentS[listname[i++]] = [
    ["On this special day, celebrate life. Take a break from your busy schedule. Let your hair down, have fun and do what your heart says. Coz today is your day. Have a great Women’s Day!","Chris"], 
    ["Mau có thiệp hồng nhé :vvv","Noname"], 
    ["Nhân ngày phụ nữ Việt Nam, hôm nay tôi xin kính chúc bạn nữ nào nhận được lời chúc này có một cuộc sống thật tươi vui và hạnh phúc. Xin cảm ơn!","TrangTrọnger"],
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //19
contentS[listname[i++]] = [
    ["Lâu rồi không gặp nên nhân đây tôi xin gửi lời chúc sức khỏe và lời chào trân trọng nhất","TrangTrọnger"], 
    ["Nhân dịp 20 tháng 10, xin chúc bạn: <br>Trẻ trung như heo sữa <br>Bốc lửa như heo quay <br>Hăng say như heo con <br>Sắc son như heo đất<br>  Đủ chất như...heo thịt<br> Chúc mừng, chúc mừng!!!","Corona virus"], 
    ["20 tháng 10 năm nay, tôi xin thay mặt Đảng, Nhà Nước và một nửa thế giới, chúc bạn một ngày nhiều niềm vui, hạnh phúc và có thật nhiều quà từ chàng trai của mình. Happy women's day!","Chrish"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //20
contentS[listname[i++]] = [
    ["Nhân ngày Phụ nữ Việt Nam, tôi xin chúc chị em luôn tươi cười như hít phải khí N20, bay bổng như H2, bản lĩnh như N2, thăng hoa như L2 và hiền hậu như H2O. Happy women's day!","Chris"], 
    ["Chúc em một ngày 20/10 ý nghĩa, vui tươi tràn ngập hạnh phúc!","KT"], 
    ["Chúc năm mới nhiều tin vui thiệt vui","Duy"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //21
contentS[listname[i++]] = [
    ["Nhất sinh nhị <br> Nhị sinh tam <br>Tam sinh vạn vật bạn tôi đẹp quá vạn vật hoá hư vô.","Tô Cơm Chiên"], 
    ["Today, remember that all life spring from you. Look at the world and smile that without you, life would have been impossible. Enjoy your day to the fullest.","Chris"], 
    ["chúc m lùn vĩnh cửu, heo trường tồn","cak cak cak Perry!"]
];
imglink[listname[i]]="imgs/"+(i+1)+".jpg"; //22
contentS[listname[i++]] = [
    ["Hôm nay là ngày phụ nữ nên mình xin chúc bạn được các bạn nam khác chúc những lời chúc tốt đẹp",":vvvvv"], 
    ["越南妇女节快乐！ 祝我美丽的朋友10月20日快乐。 希望以后您的所有计划都能成功。<br> Happy Viet Nam Women's Day! Chúc cô bạn xinh đẹp của mình có một ngày 20/10 vui vẻ, hạnh phúc nhé. Chúc cho mọi dự định trong tương lai của bạn sẽ thành công.","Chris"], 
    ["20/10 nếu đang ế, liên hệ tôi, có linh đen đang chờ ở 301","fromtrongkhangwithlove"]
];

function btnClick() {
    name = document.getElementById("name-girl").value;
    var found = false;
    index = 0;

    listname.forEach(realname => {
        if (realname==name) {
            var contElement = document.getElementById("after-input");
            contElement.style.display = "block";

            var imggirl = document.getElementById("avatar");
            imggirl.src = imglink[name];

            var ct = document.getElementById("mess-ct");
            ct.innerHTML = contentS[name][0][0];
            var si = document.getElementById("mess-si");
            si.innerHTML = "-From " + contentS[name][0][1] + " with love-"
            var nextBtn = document.getElementById("btnNext");
            nextBtn.innerHTML = "Tiếp theo (" + (index+1) + "/" + (contentS[name].length) +")";

            found = true;
        }
    });

    
    if (!found) {
        alert("Tên nhập không đúng rồi :(((")
    }

    
}

function btnNextClick() {

    if (index >= contentS[name].length-1) {
        index = 0;
    }
    else {
        index++;
    }

    var ct = document.getElementById("mess-ct");
    ct.innerHTML = contentS[name][index][0];
    var si = document.getElementById("mess-si");
    si.innerHTML = "-From " + contentS[name][index][1] + " with love-";

    var nextBtn = document.getElementById("btnNext");
    nextBtn.innerHTML = "Tiếp theo (" + (index+1) + "/" + (contentS[name].length) +")";

}

