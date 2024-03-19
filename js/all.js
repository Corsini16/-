// 右下角
//获取div里面名为"Blk"的id鼠标移入时将其显现
var adv0 = document.querySelector('.advisory')
var Blk = document.querySelector('.low_right_t')
// var Blk=document.querySelect("")
// console.log(adv);

adv0.addEventListener("mouseover", function () {
    Blk.style.display = "block";
})
adv0.addEventListener("mouseout", function () {
    Blk.style.display = "none";
})
Blk.addEventListener("mouseover", function () {
    Blk.style.display = "block";
});
Blk.addEventListener("mouseout", function () {
    Blk.style.display = "none";
});
// 右下角回到顶部

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 0) {
        var top_bj = document.querySelector('.data-v-199d25cc')
        var top_list_1 = document.querySelector('.top_list_1').firstElementChild.firstElementChild
        top_list_1.src = "../img/首页/logo1.77137f01.png"
        top_bj.className = "data-v-199d25cc daohangbj";
    }
    else if (scrollTop == 0) {
        var top_bj = document.querySelector('.daohangbj')
        top_bj.className = 'data-v-199d25cc';
        // console.log(top_bj);
        var top_list_1 = document.querySelector('.top_list_1').firstElementChild.firstElementChild
        top_list_1.src = "../img/首页/下载.png"

    }
}

var goTop = document.querySelector('.goTop')
goTop.onclick = function () {
    var timer = setInterval(function () {
        document.documentElement.scrollTop -= 20;
        if (document.documentElement.scrollTop == 0) {
            clearInterval(timer)
        }
    }, .1)
}
// 导航渲染

// ajax获取数据
var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
ajax_.open("get", "http://www.chenfuguo.cn:5600/getIndexHead");
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var data = JSON.parse(ajax_.responseText).indexData.data;
            // console.log(data);
            var str = '';
            var top_listn = document.querySelector('.top_list');
            // console.log(top_listn.children);
            for (i = 1; i < data.length; i++) {
                str += `<li class="nn">
                <a href="${data[i].goUrl}">${data[i].txt}</a>
                    </li>`
                // console.log(str);
            }
            top_listn.innerHTML = str;
        }
    }
};
// var top_list = document.querySelectorAll(".top_list");
// console.log(top_list);
// for (var i = 0; i < 6; i++) {
//     top_list[i].setAttribute("index",i)
//     top_list[i].onclick = function () {
//         var index=this.getAttribute('index')  
//         for(var j = 0; j < 6; j++){
//             top_list[i].firstElementChild.className="";
//             top_list[index].firstElementChild.className="daohcolr ";

//         }
//     }


// }


