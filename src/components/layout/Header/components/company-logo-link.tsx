import { Link } from 'react-router';
import { cn } from '@/lib/utils';
import Image from '@/components/common/image';
import clsx from 'clsx';

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
  to: string;
}

export const CompanyLogoLink: React.FC<LogoProps> = ({
  src,
  alt,
  className,
  to,
}) => {
  return (
    <Link to={to} className={clsx('shrink-0 max-w-49')}>
      <Image
        src={src}
        alt={alt}
        className={cn('min-[400px]:max-w-50', className)}
      />
    </Link>
  );
};
