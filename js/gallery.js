function upDate(previewPic){
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
	}

	function unDo(){
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = "Hover over an image below to display here.";
    imageDiv.style.backgroundImage = "url('')";
	}
    
    function addTabIndex() {
    console.log("Page loaded");
    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
