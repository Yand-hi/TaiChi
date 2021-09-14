let html = document.querySelector("#html");
let style = document.querySelector("#style")

let str = `
/*你好，我是一名前端新人
接下来演示一下我的前端功底
首先要准备一个div*/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来把div变成一个八卦图
首先，把div变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*八卦是阴阳形成的
一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`
let str1 = ''

let n = 0

let step = () => {
    setTimeout(() => {
        if (str[n] === "\n") {
            str1 += "<br>"
        } else if (str[n] === " ") {
            str1 += "&nbsp;"
        } else {
            str1 += str[n]
        }
        html.innerHTML = str1
        style.innerHTML = str.substring(0, n)
        window.scroll(0, 99999)
        html.scrollTo(0, 99999)
        if (n + 1 < str.length) {
            n += 1
            step()
        }
    }, 0)
}
step()



