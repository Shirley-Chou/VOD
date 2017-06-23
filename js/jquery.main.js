/**
 * Created by win8 on 2017/6/23.
 */
//登录注册弹窗
function lrPop(){
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

    tabBar($('.lrpop-tabtitle span'), 'lrpop-tabcurrent', 'span', $('.lrpop-form'), 'form');

    $('.loginpop-remember-check').bind('click', function(){
        if($('#pop-remember').is(':checked')){
            $(this).children('.loginpop-remember-checkbox').addClass('loginpop-remember-checked');
        } else {
            $(this).children('.loginpop-remember-checkbox').removeClass('loginpop-remember-checked');
        }
    });
};

function tabBar(tabEleBtn, tabClass, tabEleBtnSib, tabEle, tabEleSib){
    tabEleBtn.bind('click', function(){
        var i = $(this).index();
        $(this).addClass(tabClass).siblings(tabEleBtnSib).removeClass(tabClass);
        tabEle.eq(i).show().siblings(tabEleSib).hide();
    });
};

$(function(){
    lrPop();
});