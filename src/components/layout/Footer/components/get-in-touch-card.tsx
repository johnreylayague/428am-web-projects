import React from 'react';
// Components
import IconCircle from '@/components/layout/Footer/components/icon-circle';
// Clsx
import clsx from 'clsx';
import CTAButtonLink from '@/components/common/cta-button-link';

interface GetInTouchCardProps {
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  facebookLink: string;
  instagramLink: string;
}

const GetInTouchCard: React.FC<GetInTouchCardProps> = ({
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
      <CTAButtonLink
        buttonLink={buttonLink}
        buttonText={buttonText}
        icon="fa-solid fa-right-long"
        iconSize="sm"
        className={clsx('rounded-xs cursor-pointer ')}
      />

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

export default GetInTouchCard;
