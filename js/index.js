import { Register } from "./Register.js";
new Register();

window.addEventListener("load",function(){
    let storage = this.localStorage.getItem("theUserData")
    let setting = this.document.getElementById("setting")
    let loged = this.document.getElementById("Loged")
    if (storage) {
        setting.classList.add("d-none")
        setting.classList.remove("d-block")
        loged.classList.add("d-flex")
        loged.classList.remove("d-none")
    }
})

$('#btnStart').click(function(){
    $('#setting').fadeOut(1000,()=>{
        $('#Register').fadeIn(1000)
        $('#Register').addClass('d-flex')
    })
})