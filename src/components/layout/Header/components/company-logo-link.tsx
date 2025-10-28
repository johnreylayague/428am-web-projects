import { Link } from 'react-router';
import { cn } from '@/lib/utils';

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
      <figure>
        <img className={cn('max-w-52 w-full', className)} src={src} alt={alt} />
      </figure>
    </Link>
  );
};
