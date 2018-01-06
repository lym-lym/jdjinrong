/**
 * Created by Administrator on 2018/1/4.
 */
window.onload = function () {
    var oBox = document.getElementById('box');
    var oDirectionBtn = document.getElementById('direction-btn');
    var oLeftBtn = document.getElementById('left-btn');
    var oRightBtn = document.getElementById('right-btn');
    var oImgList  = document.getElementById('img-list');

    // ���Ƶ�һ��LI����ӵ�UL�ĺ���
    oImgList.innerHTML+= oImgList.firstElementChild.outerHTML;

    var iLen  = oImgList.children.length;

    // ����UL�Ŀ��
    const PER_WIDTH = 300;
    oImgList.style.width = iLen * PER_WIDTH + 'px';

    // Ĭ����ʾ��0��
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

    // �Զ�����
    autoMove();
    function autoMove() {
        iTimer = setInterval(function () {
            rightMove();
        }, 3000);
    }


    // �����˶�
    function rightMove() {
        iIndex++;
        if(iIndex >= iLen) {
            oImgList.style.left = 0;
            iIndex = 1;
        }
        bufferMove(oImgList, {left: -iIndex * PER_WIDTH});
    }
};
