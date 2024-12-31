const topImg = document.querySelector('.topImg');

topImg.onmouseout = function(){
    this.src = 'image/web集合写真モノクロ.jpg';
}

topImg.onmouseover = function(){
    this.src = 'image/web集合写真.jpg';
}