import React from 'react';
// Components
import IconCircle from '@/components/layout/Footer/components/icon-circle';
import FontAwesome from '@/components/ui/app/fontawesome';
// Clsx
import clsx from 'clsx';
import { Link } from 'react-router';

interface GetInTouchProps {
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  facebookLink: string;
  instagramLink: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({
  paragraph,
  buttonText,
  buttonLink,
  facebookLink,
  instagramLink,
}) => {
  return (
    <div
      className={clsx(
        '-mt-30 relative pt-24 pb-15 px-8 flex items-center justify-center flex-col',
        'bg-white'
      )}
    >
      {/* Top decorative orange line */}
      <hr
        className={clsx(
          'border-4 absolute top-0 left-0 border-theme-orange w-full'
        )}
      />

      {/* Paragraph text */}
      <p className={clsx('mb-5 text-center')}>{paragraph}</p>

      {/* CTA button */}
      <Link
        to={buttonLink}
        className={clsx(
          'py-5 px-9 mb-8 space-x-3 leading-none rounded-sm font-medium transition-all duration-400 ease-in-out cursor-pointer',
          'bg-theme-orange text-white hover:bg-theme-blue'
        )}
      >
        <span>{buttonText}</span>
        <FontAwesome icon="fa-solid fa-right-long" size="sm" />
      </Link>

      {/* Social icons */}
      <ul className={clsx('flex items-center gap-3')}>
        <li>
          <IconCircle icon="fa-brands fa-facebook" href={facebookLink} />
        </li>
        <li>
          <IconCircle icon="fa-brands fa-instagram" href={instagramLink} />
        </li>
      </ul>
    </div>
  );
};

export default GetInTouch;
