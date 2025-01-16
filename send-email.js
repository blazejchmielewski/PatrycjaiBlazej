function sendEmail(){
    let params= {
        names: document.getElementById('quest-name'),
        phone: document.getElementById('quest-phone'),
        message: document.getElementById('quest-message')
    }

    emailjs.send("service_qy97rek","template_ew813j9", params).then(alert("Email został wysłany!"))
}