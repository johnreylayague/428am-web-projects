import React from 'react';

interface InfoItemProps {
  title: string;
  content: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, content }) => {
  return (
    <div>
      <h6>{title}</h6>
      {content}
    </div>
  );
};

export default InfoItem;
