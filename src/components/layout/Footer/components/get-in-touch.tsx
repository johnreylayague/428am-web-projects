import React from 'react';
// Components
import IconCircle from '@/components/layout/Footer/components/icon-circle';
import FontAwesome from '@/components/ui/app/fontawesome';
// Shadcn
import { Button } from '@/components/ui/shadcn/button';
// Clsx
import clsx from 'clsx';

interface GetInTouchProps {
  paragraph?: string;
  buttonText?: string;
  buttonLink?: string;
  facebookLink?: string;
  instagramLink?: string;
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
      <Button
        type="button"
        id="btn-get-in-touch"
        name="get-in-touch"
        className={clsx(
          'min-h-13 mb-8 min-w-48 rounded-xs font-medium transition-all duration-400 ease-in-out cursor-pointer',
          'bg-theme-orange hover:bg-theme-blue'
        )}
        onClick={() => window.open(buttonLink, '_blank')}
      >
        <span>{buttonText}</span>
        <FontAwesome icon="fa-solid fa-right-long" size="sm" />
      </Button>

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
