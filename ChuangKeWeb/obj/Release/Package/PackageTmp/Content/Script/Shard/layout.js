$('.ck-m').on('show.bs.modal', centerModels());

//禁用空白处点击关闭
$('.ck-m').modal({
    backdrop: 'static',
    keyboard: false, //禁止键盘
    show: false
});
////页面大小变化是仍然保证模态框水平垂直居中
//$(window).on('resize', centerModals);

function centerModels() {
    $('.ck-m').each(function (i) {　　　　
        var $clone = $(this).clone().css('display', 'block').appendTo('body');　　　　
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);　　　　
        top = top > 0 ? top : 0;　　　　
        $clone.remove();　　　　
        $(this).find('.modal-content').css("margin-top", top);　　
    });
}


$(document).ready(function () {
    //下箭头滑动
    $("#a-down").click(function () {
        var content_imgs_offset = $("#content-1").offset();
        $("body,html").animate({
            scrollTop: content_imgs_offset.top
        }, 1500)
    });

    // //模态框添加星号
    // $("form :input.required").each(function () {
    //     //创建元素
    //     var $required = $("<strong class='high'></strong>");
    //     // //将它追加到文档中
    //     // $(this).parent().append($required);
    // });

    //为表单的必填文本框添加相关事件（blur、focus、keyup）
    $("form :input").blur(function () {
        //注意：这里的this是DOM对象，$(this)才是jQuery对象
        var $parent = $(this).parent();
        //删除之前的错误提醒信息
        $parent.find(".msg").remove();
        //验证“名称”
        // if ($(this).is("#name")) {
        //     //运用jQuery中的$.trim()方法，去掉首位空格
        //     if ($.trim(this.value) == "" || $.trim(this.value).length > 4) {
        //         var errorMsg = " 请输入少于或等于4位的名称！";
        //         //class='msg onError' 中间的空格是层叠样式的格式
        //         $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
        //     } else {
        //         var okMsg = " 输入正确";
        //         $parent.find(".high").remove();
        //         $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
        //     }
        // }
        //验证手机号
        // if ($(this).is("#number")) {
        //     if (($.trim(this.value).length != 11) || ($.trim(this.value) != "" && !/^1[34578]\d{9}$/.test($.trim(this.value))) || ($.trim(this.value) == "")) {
        //         var errorMsg = "请输入正确的手机号码！";
        //         $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
        //     } else {
        //         var okMsg = " 输入正确";
        //         $parent.find(".high").remove();
        //         $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
        //     }
        // }

        //注册
        //验证邮箱
        if ($(this).is("#email")) {
            if ($.trim(this.value) == "" || ($.trim(this.value) != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test($.trim(this.value)))) {
                var errorMsg = "请输入正确的E-Mail地址！";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
        if ($(this).is("#password")) {
            if (($.trim(this.value) == "") || ($.trim(this.value) != "" && !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test($.trim(this.value)))) {
                var errorMsg = "请输入6到12位数字和字母组合的密码";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
        if ($(this).is("#checkpassword")) {
            if (($.trim(this.value) != $("#password").val()) || ($.trim(this.value) == "") || ($.trim(this.value) != "" && !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test($.trim(this.value)))) {
                var errorMsg = "请输入6到12位数字和字母或2次输入不一致";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
        if ($(this).is("#vcode")) {
            if ($.trim(this.value) == "" || ($.trim(this.value).length != 4)) {
                var errorMsg = "请输入四位的验证码！";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }

        //登录
        if ($(this).is("#email-1")) {
            if ($.trim(this.value) == "" || ($.trim(this.value) != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test($.trim(this.value)))) {
                var errorMsg = "请输入正确的E-Mail地址！";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
        if ($(this).is("#password-1")) {
            if (($.trim(this.value) == "") || ($.trim(this.value) != "" && !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test($.trim(this.value)))) {
                var errorMsg = "请输入6到12位数字和字母组合的密码";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
        if ($(this).is("#vcode-1")) {
            if ($.trim(this.value) == "" || ($.trim(this.value).length != 4)) {
                var errorMsg = "请输入四位的验证码！";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }

        //验证组织单位
        // if ($(this).is("#organization")) {
        //     if ($.trim(this.value) == "" || ($.trim(this.value).length > 10)) {
        //         var errorMsg = "请输入少于或等于10字符";
        //         $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
        //     } else {
        //         var okMsg = " 输入正确";
        //         $parent.find(".high").remove();
        //         $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
        //     }
        // }
    }).keyup(function () {
        //triggerHandler 防止事件执行完后，浏览器自动为标签获得焦点
        $(this).triggerHandler("blur");
    }).focus(function () {
        $(this).triggerHandler("blur");
    });
});