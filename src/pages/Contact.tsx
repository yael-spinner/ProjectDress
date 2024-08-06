import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [sumbmitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {sumbmitted ? (
        <b style={{ textAlign: 'center', fontSize: '70px' }}>!ההודעה נשלחה בהצלחה</b>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '70%', maxWidth: '500px', marginTop: '15px' }}>
          <div style={{ marginBottom: '20px', marginTop: '40px' }}>
            <label htmlFor="name" style={{ textAlign: 'right', width: '96%', display: 'inline-block' }}>:שם</label>
            <input
              type="text"
              required
              id="name"
              dir="rtl"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: 'calc(100% - 16px)', padding: '8px', boxSizing: 'border-box', height: '50px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ textAlign: 'right', width: '96%', display: 'inline-block' }}>:מייל</label>
            <input
              type="email"
              required
              id="email"
              dir="rtl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: 'calc(100% - 16px)', padding: '8px', boxSizing: 'border-box', height: '50px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ textAlign: 'right', width: '96%', display: 'inline-block' }}>:תוכן ההודעה</label>
            <textarea
              required
              id="message"
              dir="rtl"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: 'calc(100% - 16px)', height: '200px', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ height: '50px', width: '97%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
            שליחה
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

