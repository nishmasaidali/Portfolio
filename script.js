(function () {
    emailjs.init({
        publicKey: "B6qxx-vM6drtn_Jgn"
    });
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_ea778e9",
        "template_3teruvp",
        this
    )
    .then(function () {

        alert("Message sent successfully! Thank you for contacting me.");

        document.getElementById("contact-form").reset();

    })
    .catch(function (error) {

        console.log("FAILED...", error);

        alert("Failed to send message. Please try again.");

    });

});