window.onload = function () {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let swipt_box = document.getElementsByClassName('swipt_box')[0];
    let main = document.getElementsByClassName('main')[0]
    let index = 1;
    // let imgWidth = img1.offsetWidth;

    let dyztp = swipt_box.children[0] // 获取第一张
    let deztp = swipt_box.children[swipt_box.children.length - 1] // 获取最后一张
    swipt_box.appendChild(dyztp.cloneNode(true))
    swipt_box.insertBefore(deztp.cloneNode(true), swipt_box.childNodes[0])
    

    Array.from(swipt_box.children).forEach(item => {
        console.log(item);
        item.style.width = main.offsetWidth + 'px'
        imgWidth = main.offsetWidth
    })

    swipt_box.style.transition = 'none'
    swipt_box.style.transform = 'translateX(' + (-imgWidth * index) + 'px)'

    setTimeout(swiptr, 2000);
    function swiptr() {
        if (index > swipt_box.children.length - 2) {
            setTimeout(swiptr, 2000);
            index = 1
            swipt_box.style.transition = 'none'
            swipt_box.style.transform = 'translateX(' + (-imgWidth * index) + 'px)'
            return;
        }
        index++;
        swipt_box.style.transition = 'all 1s'
        swipt_box.style.transform = 'translateX(' + (-imgWidth * index) + 'px)'
        swipt_box.ontransitionend = function () {
            setTimeout(swiptr, 2000);
        }
    }
    window.onresize = function(){
        Array.from(swipt_box.children).forEach(item => {
            item.style.width = main.offsetWidth + 'px'
        })
        imgWidth = main.offsetWidth
        // swipt_box.style.transition = 'none'
        swipt_box.style.transform = 'translateX(' + (-main.offsetWidth * index) + 'px)'
    };
}
