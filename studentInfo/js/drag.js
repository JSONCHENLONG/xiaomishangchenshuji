var drag = (function() {
    return {
        init: function(ele) {
            if(typeof ele == 'string') {
                ele = $(ele);
            }
            this.$ele = ele;
            // 获取弹窗
            this.$layer = $('.layer');
            // 获取弹窗头部
            this.$title = $('.title');
            // 获取关闭按钮
            this.$closeBtn = $('.closeBtn');
            this.event();

        },
        event: function() {
            var _this = this
            // 点击关闭按钮,隐藏整个弹窗(包括遮罩层)
            this.$closeBtn.onclick = function() {
                _this.$ele.style.display = 'none';
            }
            this.$title.onmousedown = function(ev) {
                ev = ev || window.event;
                ev.preventDefault();
                // 计算偏移量
                var _x = ev.offsetX,
                _y = ev.offsetY;
                document.onmousemove= function(e) {
                    e  = e || window.event;
                    // 获取鼠标移动时 的位置
                    var x = e.pageX,
                    y = e.pageY;
                    // 计算定点位置
                    x = x - _x;
                    y -= _y;

                    _this.$layer.style.left = x + 'px';
                    _this.$layer.style.top = y + 'px';

                } 
            }
            document.onmouseup = function() {
                document.onmousemove = null;
            }
        }
    }
   
}())
function $(ele) {
    return document.querySelector(ele);
}

