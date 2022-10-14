import NotifcationForm from "./NotificationForm";

const NewNotification = (props) => {

  const saveNotificationDataHandler = (enteredNotificationData) => {
    const notificationData = {
      ...enteredNotificationData,
      id: Math.random().toString()
    };
    props.onAddNotification(notificationData);
  };

  return (
    <div className="new-notification">
      <NotifcationForm onSaveExpenseData={saveNotificationDataHandler}></NotifcationForm>
    </div>
  );
};

export default NewNotification