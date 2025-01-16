function sendEmail(){
    let params= {
        names: document.getElementById('quest-name').value,
        phone: document.getElementById('quest-phone').value,
        message: document.getElementById('quest-message').value
    }

    emailjs.send("service_qy97rek","template_ew813j9", params).then(alert("Email został wysłany!"))
}