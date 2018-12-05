var swiper = (function () {
    var timer = null;
    return {
        init: function () {
            // 获取dom元素
            this.$banner = document.querySelector('.banner-index');
            this.$tipBox = document.querySelector('.banner-toop');
            this.$tipBoxLiALl = this.$tipBox.querySelectorAll('li');
            this.$prevBtn = document.querySelector('.left-arr');
            this.$nextBtn = document.querySelector('.right-arr');
            // 设置一个全局索引,保证按钮共享.(展示图片的索引)
            this.index = 0;
            // 给每一个小圆圈添加索引, 事件委托点击时,获取索引位置
            for (var i = 0; i < this.$tipBoxLiALl.length; i++) {
                this.$tipBoxLiALl[i].index = i;
            }
            // 把第一张图片克隆到最后一张, 最后一张克隆到第一张
            var first = this.$banner.firstElementChild;
            var last = this.$banner.lastElementChild.cloneNode(true);
            this.$banner.appendChild(first.cloneNode(true));
            this.$banner.insertBefore(last, first);
            this.$banner.style.left = '-1348px';
            this.event()
        },
        event: function () {
            var _this = this;
            // 利用事件委托,给每一个小圆点添加点击事件
            this.$tipBox.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if (target.nodeName == 'LI') {
                    // 更改全局index的值
                    // _this.index = target.index;
                    _this.showImage(target.index);
                }
            }
            this.$prevBtn.onclick = function() {
                _this.showImage(--_this.index)
            }
            this.$nextBtn.onclick = function() {
                _this.showImage(++_this.index)
            }

        },
        showImage: function (index) {
            console.log(index);
            if(index > 3) {
                index = 0;
                this.$banner.style.left = 0;
            } else if(index < 0) {
                index = 3;
                this.$banner.style.left = -1348 * 5 + 'px'
            }
            this.index = index;
            // console.log(this.index);
            // 消除所有小圆圈的class
            for (var i = 0; i < this.$tipBoxLiALl.length; i++) {
                // this.$tipBoxLiALl[i].className = '';
                this.$tipBoxLiALl[i].removeAttribute('class');
            }
            // 给对应的小圆圈添加样式
            this.$tipBoxLiALl[index].className = 'active';
            move(this.$banner, 'left', (index +1) * -1348);
        },
        autoPlay(index) {


        }
    }
}())