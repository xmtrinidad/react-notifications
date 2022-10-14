import { useState } from "react";

const NotifcationForm = () => {
  const [message, setMessage] = useState('');

  const messageChangeHandler = (e) => {
    // setMessage((prevState) => {
    //   console.log(prevState);
    //   ...otherProps,
    //   message: e.target.value
    // });
    setMessage(e.target.value);
  };

  return (
    <form>
      <div className="notification-form__controls">
        <div className="notification-form__control">
          <label htmlFor="message">Message</label>
          <input type="text" id="message" onChange={messageChangeHandler} />
        </div>
        <div className="notification-form__actions">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default NotifcationForm