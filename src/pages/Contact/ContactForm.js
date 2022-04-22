import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../../components/Button';
function ContactForm() {
  const [msg, setMsg] = useState(false);
  const [msgBody, setMsgbody] = useState({ text: '', style: '' });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_emirvj8',
        'template_0rrzboi',
        e.target,
        'user_LD8MFCvsFOK7tiAvBEV3I'
      )
      .then((res) => {
        if (res.status == 200) {
          setMsg(true);
          setMsgbody({ text: 'Msg Sent Successfull!', style: 'success' });
        } else {
          setMsgbody({ text: 'Msg Not Sent Successfully!', style: 'fail' });
        }
      })
      .catch((err) => {});

    setTimeout(() => {
      setMsg(false);
    }, 5000);
    e.target.reset();
  };
  return (
    <div className="flex flex-col gap-5" data-aos="fade-left">
      <div className="page flex flex-col items-start w-3/5">
        <span className="text-mlg font-bold">
          Let's <span className="text-blue">work together</span>
        </span>
        <p className="text-grey" style={{ fontWeight: '400' }}>
          Please tell us a bit about you, your project, and how best to reach
          you. We’ll get right back to you.
        </p>
      </div>
      <form className="flex flex-col gap-2 form" onSubmit={sendEmail}>
        <label>
          Your Full Name<span className="text-red">*</span>
        </label>
        <input type="text" placeholder="Your name" name="fullname" required />
        <label>
          Email Address<span className="text-red">*</span>
        </label>
        <input type="text" placeholder="Your email" name="email" required />
        <label>Phone No.</label>
        <input type="number" placeholder="Your phone number" name="phone" />
        <label>
          Subject<span className="text-red">*</span>
        </label>
        <input type="text" placeholder="Your Topic" name="subject" required />
        <label>
          Tell us something about your project
          <span className="text-red">*</span>
        </label>
        <textarea
          required
          style={{
            height: '189px',
            resize: 'vertical',
          }}
          type="text"
          placeholder="eg: I am looking to develop an web that..."
          name="message"
        />
        {msg ? (
          <span className={`msg text-center text-head  ${msgBody.style}`}>
            {msgBody.text}
          </span>
        ) : (
          ''
        )}
        <div className="flex form-btn w-full items-end justify-end">
          <Button title={`Submit`} styles="primary text-white flex" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
