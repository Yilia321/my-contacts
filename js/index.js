$(function () {
    //设置页面高度
    var ch = $(window).height();
    $('.container').css('height', ch);
    $('.info-hide').css('height', ch);
    //点击公司名称显示详情页
    $('table .company-name').click(function(e){
        e.stopPropagation();
        var myName=$(this).attr('title');
        if($('#'+myName).css('display')=='none'){
            $(".info-hide").hide();
            $('#'+myName).show();
        }else{
            $('#'+myName).hide();
        }
    });

    //tab切换
    $('.tab li').click(function(e){
        e.stopPropagation();
        var itemNum=$(this).index()+1;
        $('.tab li').removeClass('active');
        $('.tab section').removeClass('show');
        $(this).addClass('active');
        $('.tab').find('.item'+itemNum).addClass('show');
    });

    //点击详情页以外区域关闭详情页
    $(document).click(function () {
        $('.info-hide').hide();
    });
    $('.info-hide').click(function () {
        return false
    });
    //点击关闭按钮关闭详情页
    $('.info-hide .close').click(function () {
        $(this).parent().css('display', 'none');
    });
});