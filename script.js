function sendEmail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };

    console.log("Sending email with params:", params);

    const serviceId = "service_hy0mskg";
    const templateId = "template_8sd53ak";

    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            console.log("Email sent successfully. Response:", res);
            alert("Works!");
        })
        .catch((err) => {
            console.error("Error sending email:", err);
            alert("Error sending email. Check console for details.");
        });
}
