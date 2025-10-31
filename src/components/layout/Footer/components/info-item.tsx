import { cn } from '@/lib/utils';
import React from 'react';

interface InfoItemProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, content, className }) => {
  return (
    <div className={cn(className)}>
      <h6>{title}</h6>
      {content}
    </div>
  );
};

export default InfoItem;
