import { useState } from "react";

const NotifcationForm = (props) => {
  const [enteredMessage, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  const messageChangeHandler = (e) => {
    // setMessage((prevState) => {
    //   console.log(prevState);
    //   ...otherProps,
    //   enteredMessage: e.target.value
    // });
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredMessage.length === 0) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }
    const notificationData = { avatar: 'https://i.pravatar.cc/300', message: enteredMessage, isUnread: true};
    
    props.onSaveExpenseData(notificationData);
    
    setMessage('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="notification-form__controls">
        <div className="notification-form__control">
          <label htmlFor="message">Message</label>
          <input style={{border: isValid ? 'initial' : '2px solid red'}} type="text" id="message" value={enteredMessage} onChange={messageChangeHandler} />
        </div>
        <div className="notification-form__actions">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default NotifcationForm