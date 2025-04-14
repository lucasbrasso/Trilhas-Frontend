import './ContactForm.css';

export default function ContactForm() {
  return (
    <form className="contact-form">

      <div className="form-group">
        <label htmlFor="email" className="form-label">E-mail</label>
        <input
          type="email"
          className="form-input"
          placeholder="seu@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Mensagem</label>
        <textarea
          id="message"
          className="form-input"
          placeholder="Sua mensagem aqui..."
        ></textarea>
      </div>

      <button type="button" className="submit-button">
        Enviar Mensagem
      </button>
    </form>
  );
}