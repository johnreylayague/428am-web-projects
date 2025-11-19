import Mark from "@/components/common/mark";
import React, { ReactNode } from "react";

interface ContactInfoItemProps {
  icon?: ReactNode;
  title: string;
  /** One of: an <a>, <h6>, or <address>. Use the right child node in your parent! */
  mainContent: ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  mainContent
}) => {
  return (
    <li className="flex items-center">
      {icon}
      <div className="pl-5 pr-10">
        <h5>{title}</h5>
        {mainContent}
      </div>
    </li>
  );
};

export default ContactInfoItem;
