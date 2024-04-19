let header_button = document.querySelector(".mobile_icon")
header_button.addEventListener("click", function(){
    let header = document.querySelector("header")
    if (header.classList.contains("open")){
        close_popup ();
    }
    else {
        header.classList.add("open")
        header_button.querySelector("img").src = "cancel.png"
    }
})

function close_popup() {
    document.querySelector("header").classList.remove("open")
    header_button.querySelector("img").src = "menu.png"

}
document.querySelector("#grid").addEventListener("click", close_popup, false)
document.querySelector("header .popup a").addEventListener("click", close_popup, false)

document.querySelector("#show_new_photo").addEventListener("click", function(){
    document.querySelector("#add_new_photo").classList.add("open")
})
document.querySelector("#cancel").addEventListener("click", function(){
    document.querySelector("#add_new_photo").classList.remove("open")
})


document.querySelector("#add_photo").addEventListener("click", function() {
    let src = document.querySelector("#new_photo_src").value
    let text = document.querySelector("#new_photo_text").value
    let alt = document.querySelector("#new_photo_alt").value
    if (src && text && alt) {
    let new_photo_div = document.createElement("div")
    new_photo_div.classList.add("photo")
    let new_img = document.createElement("img")
    new_img.src = src
    new_img.alt = alt
    new_photo_div.append(new_img)
    let new_p = document.createElement("p")
    new_p.innerText = text
    document.querySelector("#grid").prepend(new_photo_div)
    document.querySelector("#add_new_photo").classList.remove("open")
    document.querySelector("#new_photo_src").value = ""
    document.querySelector("#new_photo_text").value = ""
    document.querySelector("#new_photo_alt").value = ""
    new_photo_div.addEventListener("click", open_photo, false)

    }
    else {
        if(!src){
            document.querySelector("#new_photo_src").classList.add("error")
        }
        if(!text){
            document.querySelector("#new_photo_text").classList.add("error")
        }
        if(!alt){
            document.querySelector("#new_photo_alt").classList.add("error")
        }
    }
})

function open_photo() {
    let src = this.querySelector("img").src
    let popup_photo = document.querySelector("#popup_photo")
    popup_photo.querySelector("img").src = src
    popup_photo.classList.add("open")
}

let photos = document.querySelectorAll(".photo")
for (let photo of photos){
    photo.addEventListener("click", open_photo, false)
}

document.querySelector("#popup_photo").addEventListener("click", function(){
    this.classList.remove("open")
})