/**
 * Created by Administrator on 2018/1/4.
 */
window.onload = function () {
    var oBox = document.getElementById('box');
    var oDirectionBtn = document.getElementById('direction-btn');
    var oLeftBtn = document.getElementById('left-btn');
    var oRightBtn = document.getElementById('right-btn');
    var oImgList  = document.getElementById('img-list');

    // 复制第一个LI，添加到UL的后面
    oImgList.innerHTML+= oImgList.firstElementChild.outerHTML;

    var iLen  = oImgList.children.length;

    // 计算UL的宽度
    const PER_WIDTH = 300;
    oImgList.style.width = iLen * PER_WIDTH + 'px';

    // 默认显示第0张
    var iIndex = 0;
    var iTimer = null;

    oBox.addEventListener('mouseenter', function () {
        clearInterval(iTimer);
        oDirectionBtn.style.display = 'block';
    });

    oBox.addEventListener('mouseleave', function () {
        oDirectionBtn.style.display = 'none';
        autoMove();
    });

    oLeftBtn.addEventListener('click', function () {
        iIndex--;

        if(iIndex < 0) {
            oImgList.style.left = - (iLen - 1) * PER_WIDTH + 'px';
            iIndex = iLen - 2;
        }

        bufferMove(oImgList, {left: -iIndex * 300});
    });

    oRightBtn.addEventListener('click', function () {
        rightMove();
    });

    // 自动运行
    autoMove();
    function autoMove() {
        iTimer = setInterval(function () {
            rightMove();
        }, 3000);
    }


    // 往右运动
    function rightMove() {
        iIndex++;
        if(iIndex >= iLen) {
            oImgList.style.left = 0;
            iIndex = 1;
        }
        bufferMove(oImgList, {left: -iIndex * PER_WIDTH});
    }
};
