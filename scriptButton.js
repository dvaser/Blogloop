    buttonContainer.onclick = () => {
    darkButton.state = !darkButton.state;
    let size = getComputedStyle(document.body).getPropertyValue('--lightButtonSize').split("px")[0];   //butonun tiklanilip tiklanilmadigi sorgulaniyor. 
    console.log(darkButton.state);

    if (darkButton.state) {
        darkButton.style.opacity = "1";
        darkButton.style.left = (size * 1) + "px";
        document.body.style.background = 'url("Media/backgrounds/dark.png")';
    } else {
        darkButton.style.opacity = "0";
        darkButton.style.left = "0px";
        document.body.style.background = 'url("Media/backgrounds/light.png")';
    }
}

/* Deger saklamak icin state kullanilir.*/
//console.log ekrana yazdirmak icin