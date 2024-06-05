//JS代码实现浏览器网页标题的动态切换
jQuery(document).ready(function(){function c(){document.title=document[a]?"（╯︿╰）崩溃啦！~《"+d+"》":d}var a,b,d=document.title;"undefined"!=typeof document.hidden?(a="hidden",b="visibilitychange"):"undefined"!=typeof document.mozHidden?(a="mozHidden",b="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(a="webkitHidden",b="webkitvisibilitychange");"undefined"==typeof document.addEventListener&&"undefined"==typeof document[a]||document.addEventListener(b,c,!1)});

// 主页判断
// var myurl = document.domain;if (myurl != "nav.pknote.top") {window.location.href = "https://nav.pknote.top/";}

// Message
function renderTip(template, context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;
        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
}

String.prototype.renderTip = function (context) {
    return renderTip(this, context);
};

$(document).on('copy', function (){
    showMessage('你都复制了些什么呀，转载要记得加上出处哦~~', 5000);
});


(function (){
    var text;
    if(document.referrer !== ''){
        var referrer = document.createElement('a');
        referrer.href = document.referrer;
        text = '欢迎来自 ' + referrer.hostname + ' 的朋友！';
        var domain = referrer.hostname.split('.')[1];
        if (domain == 'baidu') {
            text = '欢迎从 百度搜索 进来的朋友！';
        }else if (domain == 'so') {
            text = '欢迎从 360搜索 进来的朋友！';
        }else if (domain == 'google') {
            text = '欢迎从 谷歌搜索 进来的朋友！';
        }
    }else {
        if (window.location.href == `pknote.top`) { //主页URL判断，需要斜杠结尾
            var now = (new Date()).getHours();
            if (now > 23 || now <= 5) {
                text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
            } else if (now > 5 && now <= 7) {
                text = '早上好！一日之计在于晨，美好的一天就要开始了！';
            } else if (now > 7 && now <= 11) {
                text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
            } else if (now > 11 && now <= 14) {
                text = '中午了，工作了一个上午，现在是午餐时间！';
            } else if (now > 14 && now <= 17) {
                text = '午后很容易犯困呢，今天的运动目标完成了吗？';
            } else if (now > 17 && now <= 19) {
                text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
            } else if (now > 19 && now <= 21) {
                text = '晚上好，今天过得怎么样？';
            } else if (now > 21 && now <= 23) {
                text = '已经这么晚了呀，早点休息吧，晚安~~';
            } else {
                text = '欢迎来到胖氪导航小天地~';
            }
        }else {
            text = '欢迎来到胖氪导航小天地~';
        }
    }
    showMessage(text, 5000);
})();

window.setInterval(showHitokoto,10000);

function showHitokoto(){
    $.getJSON('https://v1.hitokoto.cn/',function(result){
        showMessage(result.hitokoto, 10000);
    });
}

function showMessage(text, timeout){
    if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
    $('.message').stop();
    $('.message').html(text).fadeTo(20, 1);
    if (timeout === null) timeout = 2000;
    hideMessage(timeout);
}

function hideMessage(timeout){
    $('.message').stop().css('opacity',1);
    if (timeout === null) timeout = 2000;
    $('.message').delay(timeout).fadeTo(20, 0);
}

!function() {
    var bottom = Math.floor(60 * Math.random()),
        right = Math.floor(50 * Math.random()),
        rotate = Math.floor(360 * Math.random());
    var foolsEgg = document.createElement("img");
    foolsEgg.src = "https://search-operate.cdn.bcebos.com/b028c278cbb84660f8bde79d819bc30b.png";
    foolsEgg.style.position = "fixed"; 
    foolsEgg.style.bottom = "".concat(bottom, "%");
    foolsEgg.style.right = "".concat(right, "%"); 
    foolsEgg.style.zIndex = "9999"; 
    foolsEgg.style.pointerEvents = "none";
    foolsEgg.style.width = "40%";
    foolsEgg.style.maxWidth = "190px";
    foolsEgg.style.transform = "".concat("rotate(", rotate, "deg)"); 
    document.body.append(foolsEgg);
} ();