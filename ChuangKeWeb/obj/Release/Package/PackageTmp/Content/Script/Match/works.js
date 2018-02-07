var max = 0;
var size = 8;
var page_now = 1;

/*
 * Page Demo v 1.0.0
 * Copyright 2015-08-03 Jane
 * page_now 当前页码，初始值为0
 * page_max 最大页码，初始值为0
 * calculate_page(page_new) 重新计算当前的显示，page_new代表新的页码
 * go_to_page() 用户输入页码之后调用的函数，判断用户输入并调用重新计算页码显示
 */

jQuery.support.cors = true;

//分页
function getMessage(page_now) {
    $.ajax({
        type: "post",
        url: "../../../Web/Home/GetArticleList",
        data: {
            "pagenow": page_now,
            "pagesize": size
        },
        dataType: "Json",
        success: function (data) {
            $('#article-list').empty();
            var Totalcount = data.Data.TotalCount;
            max= Math.ceil(Totalcount/size);
            var mydata = new Array()
            mydata = data.Data.List;
            var s = "";
            for (var i = 0; i < size; i++) {
                //添加的字符                    
            }
            $('#article-list').append(s);
            page.page_max = max;
            page.calculate_page(page_now); //page.calculate_page(当前页)
        }
    });
};

$(function(){
    $(".ck-border").click(function(){
        window.location.href="../../../match/studentworks";
    })
})