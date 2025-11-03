import PageContainer from '@/components/layout/page-container';
import Banner from '@/components/ui/app/banner';
import MetaTags from '@/components/seo/meta-tags';
import clsx from 'clsx';
import React from 'react';
import { SOCIAL_LINKS } from '@/config/constants';

interface InstagramProps {}

const Instagram: React.FC<InstagramProps> = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Instagram - Leader Property Maintenance - Drainage Service"
        description="Follow Leader Property Maintenance on Instagram for real-time project updates, behind-the-scenes, and tips on property cleaning and drainage services across Vancouver."
        keywords="Leader Property Maintenance Instagram, property cleaning Vancouver, drainage services, before after, project showcase, Vancouver cleaning, exterior maintenance social media"
        canonical="https://www.lpmaintenance.ca/instagram/"
        ogTitle="Instagram - Leader Property Maintenance - Drainage Service"
        ogDescription="Get a glimpse of our latest property maintenance work in Vancouver. Follow us on Instagram for exclusive updates, tips, and project highlights."
        ogUrl="https://www.lpmaintenance.ca/instagram/"
        ogType="article"
      />
      <Banner title="Instagram" />
      <PageContainer>
        <p
          className={clsx(
            'text-center mt-6 text-gray-600 text-lg md:text-xl font-medium'
          )}
        >
          Stay tuned! Exciting Instagram updates are coming soon.{' '}
          <span className={clsx('block')}>
            Follow us on{' '}
            <a
              href={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-orange underline"
            >
              Instagram
            </a>
            .
          </span>
        </p>
      </PageContainer>
    </React.Fragment>
  );
};

export default Instagram;
