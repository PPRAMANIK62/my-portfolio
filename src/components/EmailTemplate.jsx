export function EmailTemplate({ firstName, message }) {
  return (
    <div>
      <h1>{subject}</h1>
      <p>Thank you for contacting me!</p>
      <p>New Message Submitted:</p>
      <p>{message}</p>
    </div>
  );
}

export default EmailTemplate;
