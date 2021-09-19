var rollingColorfulFont = function (r) {
    function t() {
        return b[Math.floor(Math.random() * b.length)]
    }

    function e() {
        return String.fromCharCode(94 * Math.random() + 33)
    }

    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var l = document.createElement("span");
            l.textContent = e(), l.style.color = t(), n.appendChild(l)
        }
        return n
    }

    function i() {
        var t = o[c.skillI];
        c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
    }

    var l = "",
        o = ["曾经居住已久的心和世界，早已在夜路中渐行渐远",
            "那些迷失过的路，抬头只有被高压线割破的天空",
            "飞翔在天空的，仅是破碎的翅膀的梦",
            "梦终究是梦，在枕底发霉，抑或潜藏在心中",
            "心脏流过身体的每一滴血，但流血的时候我能否知道内心在想什么",
            "想过的人或事，到头来又被时间沉淀为回忆",
            "回忆中的苦与甜，是阳光，或是身后的阴暗面",
            "阴暗就是这个世界的本质，本质只有白和黑",
            "黑夜如约而至，我要为那个破碎的梦编织一个谎言",
            "谎言走到最后总会有结局，而结局往往只是谎言的延续",
            "延续下去的仅仅是我一个人的轮回，回到那个离开已久的心和世界",
            "Written By Xu-ux"
        ].map(function (r) {
            return r + ""
        }),
        a = 2,
        g = 1,
        s = 5,
        d = 75,
        b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
        c = {
            text: "",
            prefixP: -s,
            skillI: 0,
            skillP: 0,
            direction: "forward",
            delay: a,
            step: g
        };
    i()
};

if (document.getElementById('rollingColorfulFont')) {
    rollingColorfulFont(document.getElementById('rollingColorfulFont'));
}
$(document).ready(function(){
  if (document.getElementById('rollingColorfulFont')) {
    rollingColorfulFont(document.getElementById('rollingColorfulFont'));
}
});