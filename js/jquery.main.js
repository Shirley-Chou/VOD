/**
 * Created by Shirley on 2017/6/23.
 */
//登录注册弹窗
var lrPop = function(){
    $('#headerLoginbtn').bind('click', function(){
        $('.vodpop').show();
        $('.lrpop-tabtitle span').eq(0).addClass('lrpop-tabcurrent').siblings().removeClass('lrpop-tabcurrent');
        $('.loginpop-form').show().siblings('form').hide();
    });
    $('#headerRegisterbtn').bind('click', function(){
        $('.vodpop').show();
        $('.lrpop-tabtitle span').eq(1).addClass('lrpop-tabcurrent').siblings().removeClass('lrpop-tabcurrent');
        $('.registerpop-form').show().siblings('form').hide();
    });
    $('.lrpop-closebtn').bind('click', function(){
        $('.vodpop,.lrpop-form').hide();
    });
    $('.loginpop-remember-check').bind('click', function(){
        if($('#pop-remember').is(':checked')){
            $(this).children('.loginpop-remember-checkbox').addClass('loginpop-remember-checked');
        } else {
            $(this).children('.loginpop-remember-checkbox').removeClass('loginpop-remember-checked');
        }
    });

    tabBar($('.lrpop-tabtitle span'), 'lrpop-tabcurrent', 'span', $('.lrpop-form'), 'form');
};

//菜单
var Menu = function(){
    var boxH1 = Math.round($('.submain').outerHeight()), boxH2 = Math.round($('.menu-usermsg').outerHeight() + 4), boxH = boxH1 - boxH2;
    $('.menu-container').height(boxH);

    $(window).resize(function(){
        var boxH1 = Math.round($('.submain').outerHeight()), boxH2 = Math.round($('.menu-usermsg').outerHeight() + 4), boxH = boxH1 - boxH2;
        $('.menu-container').height(boxH);
    });
};

//播放视频
var PlayVideo = function(){
    var percent = $('.playvideo-viewpercent-num').html();
    $('.playvideo-viewpercent-line').css('width', percent);

    if($('#myplayer').hasClass('jw-flag-user-inactive')){
        $('.playvideo-qxd').hide();
    } else {
        $('.playvideo-qxd').show();
    }
};

//播放记录
var History = function(){
    $('.submain-header-check').bind('click', function(){
        if($('#subHeardCheck').is(':checked')){
            $(this).children('.submain-header-checkbox').addClass('submain-header-checked');
        } else {
            $(this).children('.submain-header-checkbox').removeClass('submain-header-checked');
        }
    });
};

//我的收藏
var Collect = function(){
    tabBar($('.collect-tab-title span'), 'collect-tab-titleactive', 'span', $('.collect-tab-list'), 'div');
};

//我的消息
var Message = function(){
    $('.message-list-openbtn').bind('click', function(){
        var read = $(this).parents('.message-list-item');
        $(this).toggleClass('message-list-closebtn');
        if($(this).hasClass('message-list-closebtn')){
            $(this).html('收起');
            $(this).parent().siblings('.message-listmain').css({'height' : 'auto', 'color' : '#fff'});
        } else {
            $(this).html('展开');
            $(this).parent().siblings('.message-listmain').css({'height' : '50px', 'color' : '#7e83a6'});
        }
        if(!read.hasClass('message-list-reade')){
            read.addClass('message-list-reade');
        }
    });

    tabBar($('.message-tabtitle span'), 'message-tabtitle-active', 'span', $('.message-tablist'), 'div');
};

//个人设置
var Setting = function(){
    $('.setting-sexradio').bind('click', function(){
        if($(this).children('.setting-sexinput').is(':checked')){
            $(this).addClass('setting-sexradio-checked').siblings('label').removeClass('setting-sexradio-checked');
        }
    });
    $('.setting-select').bind('click', function(){
        $(this).children('ul').toggle();
    });
    $('.setting-select ul li').bind('click', function(){
        var val = $(this).html();
        $(this).parent('ul').siblings('span').html(val);
        $(this).addClass('setting-select-choose').siblings().removeClass();
    });

    $('.setting-keyword a').bind('click', function(){
        var dataKey = $(this).attr('data-key'),
            keywordVal = $(this).html(),
            keywordInputVal = $('#keyword').val();
        $(this).toggleClass('setting-keyword-checked').attr('data-key', '1');
        if($(this).hasClass('setting-keyword-checked') && dataKey == 0){
            if(keywordInputVal != null && keywordInputVal != ''){
                $('#keyword').val(keywordInputVal + ',' + keywordVal);
            } else {
                $('#keyword').val(keywordVal);
            }
        }
    });
};

var tabBar = function(tabEleBtn, tabClass, tabEleBtnSib, tabEle, tabEleSib){
    tabEleBtn.bind('click', function(){
        var i = $(this).index();
        $(this).addClass(tabClass).siblings(tabEleBtnSib).removeClass(tabClass);
        tabEle.eq(i).show().siblings(tabEleSib).hide();
    });
};

$(function(){
    lrPop();
    Menu();
    PlayVideo();
    History();
    Collect();
    Message();
    Setting();
});