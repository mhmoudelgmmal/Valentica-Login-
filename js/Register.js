export class Register{

    constructor(){

    this.btnCreate = document.getElementById("btnCreate")    

    this.userEmailLoged = document.getElementById("userEmailLoged")

    this.username = document.getElementById("username")
    this.userAlert = document.getElementById("userAlert")
    this.userReg = /^[^\d^\W][a-zA-Z0-9]{3,13}[^\d^\W]$/

    this.email =  document.getElementById("email")
    this.emailReg =  /^[^\W]+@[^@^\d^\W]+\.[^\d^\W]+$/
    this.emailAlert = document.getElementById("emailAlert")
    
    this.password =  document.getElementById("password")
    this.passwordReg =  /^[A-Z]{1,}[a-z]{6,}[0-9]{1,}[^/W]{1,}$/
    this.passAlert = document.getElementById("passAlert")
    
    this.confirmPass =  document.getElementById("confirmPass")
    this.ConfirmPassAlert = document.getElementById("ConfirmPassAlert")

    this.userVal = ""
    this.emailVal = ""
    this.passVal = ""
    this.confirmPassVal = "" 

    this.username.addEventListener('blur',this.checkUserValidation.bind(this))
    this.email.addEventListener('blur',this.checkEmailValidation.bind(this))
    this.password.addEventListener('blur',this.checkPasswordValidation.bind(this))
    this.confirmPass.addEventListener('blur',this.checkConfirmPassValidation.bind(this))

    this.btnCreate.addEventListener("click",this.sendDate.bind(this))

    }
    checkUserValidation(){
        let val = this.username.value
        if(this.userReg.test(val)){
            this.userAlert.classList.remove("d-block")
            this.userAlert.classList.add("d-none")
            this.userVal = val
            
        }else{
            this.userAlert.classList.remove("d-none")
            this.userAlert.classList.add("d-block")
           
        }
    }
    checkEmailValidation(){
        let val = this.email.value
        if(this.emailReg.test(val)){
            this.emailAlert.classList.remove("d-block")
            this.emailAlert.classList.add("d-none")
            this.emailVal = val
           
        }else{
            this.emailAlert.classList.remove("d-none")
            this.emailAlert.classList.add("d-block")
            
        }
    }
    checkPasswordValidation(){
        let val = this.password.value
        if(this.passwordReg.test(val)){
            this.passAlert.classList.remove("d-block")
            this.passAlert.classList.add("d-none")
            this.passVal = val
            
        }else{
            this.passAlert.classList.remove("d-none")
            this.passAlert.classList.add("d-block")
            
        }
    }
    checkConfirmPassValidation(){
        let val = this.confirmPass.value

        if (this.confirmPass.value === this.password.value) {
            this.ConfirmPassAlert.classList.remove("d-block")
            this.ConfirmPassAlert.classList.add("d-none")
            this.confirmPassVal = val
           
        }else{
            this.ConfirmPassAlert.classList.remove("d-none")
            this.ConfirmPassAlert.classList.add("d-block")
            
        }
    }
    async sendDate(){

        if (this.userVal != "" && this.emailVal != ""
            && this.passVal != "" && this.confirmPassVal != "") {
                let body = {
                    username:this.userVal, 
                    email:this.emailVal,
                    password:this.passVal,
                    password_confirmation:this.confirmPassVal
                }
                console.log(body)
            let myResponse =
             await fetch("https://goldblv.com/api/hiring/tasks/register"
             ,{
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            let myResult = await myResponse.json()
            let theResults = myResult.email
            localStorage.setItem("theUserData",JSON.stringify(myResult))
            let userEmail = JSON.parse(localStorage.getItem("theUserData"))
            this.userEmailLoged.href = "mailto:"+userEmail.email+""
            this.userEmailLoged.innerHTML = userEmail.email 
            $("#Register").fadeOut(1000,()=>{
                $("#Register").addClass("d-none")
                $("#Register").removeClass("d-flex")
                $("#Loged").fadeIn(1000)
                $('#Loged').addClass('d-flex')
            })            
        }else{
            alert("You must fill valid data in the form")
        }
        
    }
}
