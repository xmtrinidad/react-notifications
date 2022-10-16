const AppModal = (props) => {

  const handleModalClose = () => {
    props.onModalClose();
  };

  const appModalClasses = `app-modal ${props.modalActive ? 'active' : ''}`

  return (
    <div className={appModalClasses}>
      <p>Message Sent!</p>
      <div className="app-modal-actions">
        <button onClick={handleModalClose}>CLOSE</button>
      </div>
    </div>
  );
};

export default AppModal;