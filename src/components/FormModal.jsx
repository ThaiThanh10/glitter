import { message, Modal, notification } from "antd"
import React, { useState } from "react"
import emailjs from "@emailjs/browser"

const FormModal = ({ isModalOpen, closeModal, openModal }) => {
    const [form, setForm] = useState({ to_email: "", to_name: "", phone: "", message: "" })
    const [api, contextHolder] = notification.useNotification()
    const openNotification = () => {
        api.success({
            message: `Your email has been successfully sent!`,
            description:
                "Thank you for reaching out to us! We have received your information and will get back to you as soon as possible. Have a great day!",
            placement: "top",
            showProgress: true,
            pauseOnHover: false,
        })
    }
    const showModal = () => {
        openModal()
    }
    const handleCancel = () => {
        closeModal()
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({ ...form, [name]: value })
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }
    const sendEmail = (e) => {
        if (!/^[a-zA-Z ]+$/.test(form.to_name)) {
            return message.warning("Please Enter Your Name")
        }
        if (!validateEmail(form.to_email)) {
            return message.warning("Please Enter Your Email Address")
        }
        emailjs
            .send("service_tbtu6gz", "template_px3v1v9", form, {
                publicKey: "_0vDoYIcXTuDIU7TW",
            })
            .then(
                () => {
                    handleCancel()
                    openNotification()
                    setForm({ to_email: "", to_name: "", phone: "", message: "" })
                },
                (error) => {
                    console.log("FAILED...", error)
                }
            )
    }

    return (
        <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            footer={false}
        >
            {" "}
            {contextHolder}
            <div className="flex flex-col gap-5 px-10 py-10 rounded-[20px] relative ">
                {" "}
                <div className="absolute top-0 left-0 stripesModal w-full h-[40px] rounded-[20px_20px_0_0]"></div>
                <div className="absolute bottom-[0%] left-0 stripesModal w-full h-[40px] "></div>
                <h2 className="text-[40px] font-extrabold text-[#fff] ">CONTACT US</h2>
                <form className="w-full">
                    <input
                        onChange={handleChange}
                        name="to_name"
                        value={form.to_name}
                        className="text-[18px] rounded-[10px] glass py-2 px-4 text-[#fff] border border-[#fff] w-full my-2 "
                        type="text"
                        placeholder="Your Name"
                    />
                    <input
                        onChange={handleChange}
                        name="to_email"
                        value={form.to_email}
                        className="text-[18px] rounded-[10px] glass py-2 px-4 text-[#fff] border border-[#fff] w-full my-2 "
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        onChange={handleChange}
                        name="phone"
                        value={form.phone}
                        className="text-[18px] rounded-[10px] glass py-2 px-4 text-[#fff] border border-[#fff] w-full my-2 "
                        type="tel"
                        placeholder="Phone Number"
                    />
                    <textarea
                        onChange={handleChange}
                        name="message"
                        value={form.message}
                        className="text-[18px] rounded-[10px] glass py-2 px-4 text-[#fff] border border-[#fff] w-full my-2 "
                        type="text"
                        rows={5}
                        placeholder="Message"
                    />
                </form>
                <div className="flex justify-end pb-5 ">
                    <button
                        onClick={sendEmail}
                        className="text-[26px]  text-[#fff] w-max font-medium p-[8px_20px] rounded-[10px] cursor-pointer bg-gradient-to-b from-[#A04AF5] to-[#430E56] hover:scale-105 transition-all duration-200 ease "
                    >
                        SEND NOW
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default FormModal
