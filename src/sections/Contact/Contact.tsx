import { MdOutlineEmail } from "react-icons/md";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contato"
      className="d-flex justify-content-center align-items-center mt-5 pb-4"
    >
      <div className="container">
        <h2 className="display-6 text-center mb-3">Contato</h2>
        <p className="fs-5 mb-5 text-secondary mb-4">
          Entre em contato pelos canais abaixo. Responderei o mais rápido
          possível!
        </p>

        <div className="d-flex container justify-content-center gap-4">
          <a
            className="icon-link"
            href="https://api.whatsapp.com/send/?phone=5521982119071"
            target="_blank"
          >
            <FaWhatsapp size={35} />
          </a>

          <a
            className="icon-link"
            href="mailto:pedrohenriqueofonseca29@gmail.com"
          >
            <MdOutlineEmail size={35} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
