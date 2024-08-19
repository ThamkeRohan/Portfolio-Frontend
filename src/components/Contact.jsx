import React, { useEffect, useState } from 'react'
import ContactItem from './ContactItem';
import Toast from './Toast';
const Contact = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [toast, setToast] = useState({showToast: false, message: '', icon: ''})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      if(toast.showToast){
        setTimeout(() => {
          setToast({ showToast: false, message: "", icon: "" });
        }, 4000)
      }
    }, [toast])

    async function sendMail(e){
        e.preventDefault()
        if(inputs.name === "" || inputs.email === "" || inputs.subject === "" || inputs.message === ""){
          setToast({
            showToast: true,
            message: "All fields are required",
            icon: "error.png",
          });
          return
        }
        setIsLoading(true)

        try {
          const response = await fetch(import.meta.env.VITE_SERVER_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs),
          });
          setIsLoading(false);
          if (!response.ok) {
            console.log(response);
            throw new Error(`HTTP Error: ${response.status}`)
          }
          setInputs({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setToast({
            showToast: true,
            message: "Mail sent successfully",
            icon: "success.png",
          });
        } catch (error) {
          let errorMsg
          if(error instanceof TypeError){
            errorMsg = `Network Error: ${error.message}`
          }
          else{
            errorMsg = error.message
          }
          setToast({
            showToast: true,
            message: errorMsg,
            icon: "error.png",
          });
          setIsLoading(false)
        }

    }
  return (
    <section id='contact' className="section contact">
      <h2 className="observed-item">
        Contact <span>Me</span>
      </h2>
      <div className="contact-details observed-item">
        <ContactItem
          icon="location-dot-solid.svg"
          type="Location"
          value="Thane, Maharashtra"
        />
        <ContactItem
          icon="envelope-solid.svg"
          type="Email"
          value="thamkerohan2@gmail.com"
        />
        <ContactItem
          icon="message-solid.svg"
          type="Mobile Number"
          value="8108389140"
        />
      </div>
      <div className="contact-form-container">
        <h3 className="observed-item">Get In Touch</h3>
        <form onSubmit={sendMail} className="contact-form observed-item">
          <input
            type="text"
            placeholder="Your Name"
            value={inputs.name}
            onChange={(e) =>
              setInputs((prevInputs) => {
                return { ...prevInputs, name: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="Your Email"
            value={inputs.email}
            onChange={(e) =>
              setInputs((prevInputs) => {
                return { ...prevInputs, email: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="Enter Subject"
            value={inputs.subject}
            onChange={(e) =>
              setInputs((prevInputs) => {
                return { ...prevInputs, subject: e.target.value };
              })
            }
          />
          <textarea
            placeholder="Message Here..."
            value={inputs.message}
            onChange={(e) =>
              setInputs((prevInputs) => {
                return { ...prevInputs, message: e.target.value };
              })
            }
          ></textarea>
          {toast.showToast && (
            <Toast icon={toast.icon} message={toast.message} />
          )}
          <button>
            {isLoading ? (
              <div className="loading">
                <img src="images/loading.gif" alt="" />
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact
