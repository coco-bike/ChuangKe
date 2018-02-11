function changefirstli() {
    $('.first-li').css("display", "block");
    $('.second-li').css("display", "none");
    $('.third-li').css("display", "none");
    $('.forth-li').css("display", "none");
}

function changesecondli() {
    $('.first-li').css("display", "none");
    $('.second-li').css("display", "block");
    $('.third-li').css("display", "none");
    $('.forth-li').css("display", "none");
}

function changethirdli() {
    $('.first-li').css("display", "none");
    $('.second-li').css("display", "none");
    $('.third-li').css("display", "block");
    $('.forth-li').css("display", "none");
}

function changefourthli() {
    $('.first-li').css("display", "none");
    $('.second-li').css("display", "none");
    $('.third-li').css("display", "none");
    $('.forth-li').css("display", "block");
}

function change1(){
    $("#apply-form1").css("display","block");
    $("#apply-form2").css("display","none");
    $("#apply-form3").css("display","none");    
}

function change2(){
    $("#apply-form1").css("display","none");
    $("#apply-form2").css("display","block");
    $("#apply-form3").css("display","none");    
}

function change3(){
    $("#apply-form1").css("display","none");
    $("#apply-form2").css("display","none");
    $("#apply-form3").css("display","block");    
}

//上传图片的插件初始化
$("#file").fileinput({
    uploadUrl: "../../home/SaveUploadedFile", // you must set a valid URL here else you will get an error
    allowedFileExtensions: ['jpg', 'png', 'gif'],
    overwriteInitial: false,
    maxFileSize: 1000,
    minFileCount: 1,
    maxFileCount: 1,
    language: 'zh',
    showUpload: false,
    showUploadedThumbs:false,
    //allowedFileTypes: ['image', 'video', 'flash'],
    layoutTemplates: {
        main1: '<div class =“kv-upload-progress kv-hidden”> </ div> <div class =“clearfix”> </ div> \n' +
            '<div class =“input-group {class}”> \n' +
            '<div class =“input-group-btn”> \n' +
            '{remove} \n' +
            '{cancel} \n' +
            '{upload} \n' +
            '{browse} \n' +
            '</ div> \n' +
            '</ div>\n' + '{preview}',
        main2: '<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n{preview}',
    },
    slugCallback: function (filename) {
        return filename.replace('(', '_').replace(']', '_');
    },
});

//上传图片的插件-1初始化
$("#file-1").fileinput({
    uploadUrl: "../../home/SaveUploadedFile", // you must set a valid URL here else you will get an error
    allowedFileExtensions: ['jpg', 'png', 'gif'],
    overwriteInitial: false,
    maxFileSize: 1000,
    minFileCount: 1,
    maxFileCount: 1,
    showUpload: false,
    language: 'zh',
    //allowedFileTypes: ['image', 'video', 'flash'],
    layoutTemplates: {
        main1: '<div class =“kv-upload-progress kv-hidden”> </ div> <div class =“clearfix”> </ div> \n' +
            '<div class =“input-group {class}”> \n' +
            '{caption}\n' +
            '<div class =“input-group-btn”> \n' +
            '{remove} \n' +
            '{cancel} \n' +
            '{upload} \n' +
            '{browse} \n' +
            '</ div> \n' +
            '</ div>\n' + '{preview}',
        main2: '<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n{preview}',
    },
    slugCallback: function (filename) {
        return filename.replace('(', '_').replace(']', '_');
    },
});

//上传图片的插件-2初始化
$("#file-2").fileinput({
    uploadUrl: "../../home/SaveUploadedFile", // you must set a valid URL here else you will get an error
    allowedFileExtensions: ['mp4'],
    overwriteInitial: false,
    maxFileSize: 30000,
    maxFileCount: 1,
    showUpload: false,
    language: 'zh',
    layoutTemplates: {
        main1: '<div class =“kv-upload-progress kv-hidden”> </ div> <div class =“clearfix”> </ div> \n' +
            '<div class =“input-group {class}”> \n' +
            '{caption}\n' +
            '<div class =“input-group-btn”> \n' +
            '{remove} \n' +
            '{cancel} \n' +
            '{upload} \n' +
            '{browse} \n' +
            '</ div> \n' +
            '</ div>\n' + '{preview}',
        main2: '<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n{preview}',
    },
    slugCallback: function (filename) {
        return filename.replace('(', '_').replace(']', '_');
    },
});

//初始化文本编辑器
$(function () {
    //初始化
    var ue = UE.getEditor('container-1');
    var ue1 = UE.getEditor('container-2');
});