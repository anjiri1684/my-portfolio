import { useRef, useState } from "react";
import terminal from "../../public/assets/terminal.png";
import arrorUp from "../../public/assets/arrow-up.png";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function Contact() {
  const formRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_faobrfc

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_faobrfc",
        "template_hb49yd2",
        {
          from_name: form.name,
          to_name: "Vincent",
          from_email: form.email,
          to_email: "vincentanjiri12@gmail.com",
          message: form.message,
        },
        "j2VzyIsBfhTTo-4JK"
      );
      setLoading(false);
      navigate("/success");
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
      navigate("/error");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src={terminal}
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text mt-8">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a uniques project to life, I&apos;m here
            to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col space-y-7"
          >
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="john doe"
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@mail.com"
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your Messagee</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi wanna give you a job..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send a message"}
              <img src={arrorUp} alt="arror-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
