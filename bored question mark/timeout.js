
setInterval(() => {
    taginput = document.getElementById("iout");
    words = ["boredom", "Tédio", "退屈", "leda", "ennui"]
    colors = ["#AD8678", "#af4f2b", "#66473b", "#C3C3C3"]
    index = Math.floor(Math.random() * 4)
    taginput.innerHTML = String(words[index])
    taginput.style.color = colors[Math.floor(Math.random() * 4)]
}, 3000);