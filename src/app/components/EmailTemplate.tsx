import * as React from "react";

interface EmailTemplateProps {
  message?: string;
  subject?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  subject,
}) => (
  <div>
    <h1>{subject}</h1>
    <p>{message}</p>
  </div>
);
