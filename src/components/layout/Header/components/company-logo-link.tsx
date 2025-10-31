import { Link } from 'react-router';
import { cn } from '@/lib/utils';
import Image from '@/components/common/image';

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
  to?: string;
}

export const CompanyLogoLink: React.FC<LogoProps> = ({
  src,
  alt,
  className,
  to = '/',
}) => {
  return (
    <Link to={to}>
      <Image
        src={src}
        alt={alt}
        className={cn('max-w-40', 'min-[400px]:max-w-50', className)}
      />
    </Link>
  );
};
