import * as React from "react";

export const EmailTemplate = ({ firstName, subject, message }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Thank you for contacting me!</p>
    <h3>Submitted Message:</h3>
    <code>{subject}</code>
    <p>{message}</p>
  </div>
);
