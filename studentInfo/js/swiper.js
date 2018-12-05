var swiper = (function () {
    var timer = null;
    return {
        init: function () {
            this.$banner = document.querySelector('.banner-inner');
            this.$tipBox = document.querySelector('.banner-tip');
            this.$tipBoxLiALl = this.$tipBox.querySelectorAll('li');
            this.$prevBtn = document.querySelector('.left-btn');
            this.$nextBtn = document.querySelector('.right-btn');
            this.index = 0;
            for (var i = 0; i < this.$tipBoxLiALl.length; i++) {
                this.$tipBoxLiALl[i].index = i;
            }

            var first = this.$banner.firstElementChild;
            var last = this.$banner.lastElementChild.cloneNode(true);
            this.$banner.appendChild(first.cloneNode(true));
            this.$banner.insertBefore(last, first);
            this.$banner.style.left = '-1226px';
            this.event();
            this.autoPlay();
        },
        event: function () {
            var _this = this;

                this.$banner.onmouseenter=function(ev){
                ev=ev||window.event;
               _this.$prevBtn.style.display='block'
               _this.$nextBtn.style.display='block'
            }

            this.$banner.onmouseleave=function(ev){
                ev=ev||window.event;
               _this.$prevBtn.style.display='none'
               _this.$nextBtn.style.display='none'
            }


            
            this.$tipBox.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if (target.nodeName == 'LI') {
                    // _this.index = target.index;
                      _this.showImage(target.index);
                    _this.autoPlay(target.index);
                }
            }

             
            this.$prevBtn.onclick = function() {
                _this.showImage(--_this.index)
                _this.autoPlay(_this.index);
                _this.$prevBtn.style.background='ulr(images/left2.png)'
            }
            this.$nextBtn.onclick = function() {
                _this.showImage(++_this.index)
                _this.autoPlay(_this.index);
                 _this.$nextBtn.style.background='ulr(images/right2.png)'
            }
           

        },
        showImage: function (index) {
            console.log(index);
            if(index > 3) {
                index = 0;
                this.$banner.style.left = 0;
            } else if(index < 0) {
                index = 3;
                this.$banner.style.left = -1226 * 5 + 'px'
            }
            this.index = index;
            for (var i = 0; i < this.$tipBoxLiALl.length; i++) {
                // this.$tipBoxLiALl[i].className = '';
                this.$tipBoxLiALl[i].removeAttribute('class');
            }
            this.$tipBoxLiALl[index].className = 'active';
            move(this.$banner, 'left', (index + 1) * -1226);
        },
        autoPlay(index) {
             clearInterval(timer)
            index = index || 0;
            timer = setInterval(() => {
                index++;
                if(index > 4 ) {
                    index = 0;
                }
                this.showImage(index);
            }, 2000)

        }
    }
}())
