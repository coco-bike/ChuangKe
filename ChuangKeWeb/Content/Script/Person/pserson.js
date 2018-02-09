function changefirstli(){
    $('.first-li').css("display","block");
    $('.second-li').css("display","none");
    $('.third-li').css("display","none");
    $('.forth-li').css("display","none");      
}
function changesecondli(){
    $('.first-li').css("display","none");
    $('.second-li').css("display","block");
    $('.third-li').css("display","none"); 
    $('.forth-li').css("display","none");     
}
function changethirdli(){
    $('.first-li').css("display","none");
    $('.second-li').css("display","none");
    $('.third-li').css("display","block");
    $('.forth-li').css("display","none");        
}
function changefourthli(){
    $('.first-li').css("display","none");
    $('.second-li').css("display","none");
    $('.third-li').css("display","none");
    $('.forth-li').css("display","block");    
}

//上传图片的插件初始化
$("#file-1").fileinput({
    uploadUrl: "../../admin/home/SaveUploadedFile", // you must set a valid URL here else you will get an error
    allowedFileExtensions: ['jpg', 'png', 'gif'],
    overwriteInitial: false,
    maxFileSize: 1000,
    minFileCount: 1,
    maxFileCount: 1,
    language: "zh",
    validateInitialCount: true,
    elCaptionText: "上传一张作品封面",
    //allowedFileTypes: ['image', 'video', 'flash'],
    msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
    slugCallback: function (filename) {
        return filename.replace('(', '_').replace(']', '_');
    },
});

//初始化文本编辑器
$(function () {
    //初始化
    var ue = UE.getEditor('container');
});