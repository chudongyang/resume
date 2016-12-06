var mySwiper = new Swiper('.swiper-container',{
    direction: 'vertical',
    loop: true,
    onTransitionEnd: function (swiper){
        var curIndex = swiper.activeIndex;
        var slides = swiper.slides;
        var lastIndex = slides.length-1;
        [].forEach.call(slides,function (item,index){
            item.id = '';
            if(index === curIndex){
                switch(curIndex){
                    case 0 :
                        item.id = 'page' + (slides.length - 2);
                        break;
                    case lastIndex:
                        item.id = 'page1';
                        break;
                    default:
                        item.id = 'page' + curIndex;
                }
            }
        })
    }
});
var musicRender = (function (){
    var music = document.querySelector('.music'),
        song = document.querySelector('#song');
    return {
        init: function(){
            window.setTimeout(function (){
                song.play();
                //song.addEventListener('canplay',function (){
                    music.style.opacity = '1';
                    music.className = 'music musicCur';
                //},false);
            },1000);
            music.addEventListener('click',function (){
                if(song.paused){
                    song.play();
                    music.className = 'music musicCur'
                }else{
                    song.pause();
                    music.className = 'music';
                }
            },false);
        }
    }
})();
musicRender.init();