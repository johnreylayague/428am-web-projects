import React from 'react';
// Components
import IconCircle from '@/components/ui/app/icon-circle';
// Clsx
import clsx from 'clsx';
import CTAButtonLink from '@/components/common/cta-button-link';
import Image from '@/components/common/image';
import imageContact from '@/assets/images/logos/image-contact.jpg';

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
        '-mt-30 relative pt-15 pb-15 px-8 flex items-center justify-center flex-col',
        'bg-white'
      )}
    >
      {/* Top decorative orange line */}
      <hr
        className={clsx(
          'border-4 absolute top-0 left-0 border-theme-orange w-full'
        )}
      />

      {/* Image Logo */}
      <Image
        src={imageContact}
        alt="company logo with contact"
        className={clsx('mb-5')}
      />

      {/* Paragraph text */}
      <p className={clsx('mb-5 text-center')}>{paragraph}</p>

      {/* CTA button */}
      <CTAButtonLink
        buttonLink={buttonLink}
        buttonText={buttonText}
        iconProps={{
          icon: 'fa-solid fa-right-long',
          size: 'sm',
        }}
        className={clsx('rounded-xs cursor-pointer ')}
      />

      {/* Social icons */}
      <ul className={clsx('flex items-center gap-3')}>
        <li>
          <IconCircle
            iconProps={{
              icon: 'fa-brands fa-facebook',
            }}
            href={facebookLink}
          />
        </li>
        <li>
          <IconCircle
            iconProps={{
              icon: 'fa-brands fa-instagram',
            }}
            href={instagramLink}
          />
        </li>
      </ul>
    </div>
  );
};

export default GetInTouchCard;
