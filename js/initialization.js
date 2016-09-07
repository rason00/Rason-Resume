$(document).ready(function() {
    $('#fullpage').fullpage({
        //设置锚点
        anchors: ['page1','page2','page3','page4','page5'],
        //设置页面背景颜色
        sectionsColor: [ '#15c6b7', '#15c6b7', '#15c6b7', '#15c6b7', '#15c6b7'],
        //resize字体是否随窗口缩放而缩放，默认false
        resize:true,
        //设置菜单
        //menu: '#menu',
        //开启页面导航小圆点
        navigation: true,
        //小圆点导航位置
        navigationPosition: 'right',
        //小圆点鼠标悬停提示文字
        navigationTooltips: ['首页','项目','技能','经历','联系'],
        //当页小圆点文字显示
        //showActiveTooltip:true,
        //页面滚动进入触发函数
        //link 是锚链接的名称
        //index 是序号，从1开始计算
        afterLoad: function ( link, index) {},
        //页面滚动离开触发函数
        //index 离开‘页面’的序号，从1开始计算；
        //nextIndex 是滚动到的目标‘页面’的序号，从1开始计算
        //direction 判断往上滚动还是往下滚动，值是up和down
        onLeave: function ( index, nextIndex, direction) {}


    });
});
