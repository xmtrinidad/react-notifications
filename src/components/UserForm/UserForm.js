import { useRef } from "react";

const UserForm = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const userNameInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      userName: userNameInputRef.current.value
    };

    props.submitUser(user);

    resetInputRefs();
  }

  const resetInputRefs = () => {
    firstNameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    userNameInputRef.current.value = '';
  }
  
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="input-container">
        <label htmlFor="first_name">First Name: </label>
        <input ref={firstNameInputRef} type="text" id="first_name" />
      </div>
      <div className="input-container">
        <label htmlFor="last_name">Last Name: </label>
        <input ref={lastNameInputRef} type="text" id="last_name" />
      </div>
      <div className="input-container">
        <label htmlFor="user_name">First Name: </label>
        <input ref={userNameInputRef} type="text" id="user_name" />
      </div>
      <button type="submit">Add User</button>
    </form>
  )
}

export default UserForm;