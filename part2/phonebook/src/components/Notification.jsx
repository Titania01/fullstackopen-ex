const Notification = ({ message }) => {
  if (message === null) {
    return message
  }

  return (
    <div className='message'>
      {message}
    </div>
  )
}
export default Notification