import SectionHeader from '@/components/common/section-header';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/shadcn/carousel';
import FontAwesome from '@/components/common/fontawesome';
import { StarRating } from './star-rating';
import NH_1 from '@/assets/images/banner/non-home-1.jpg';

const REVIEWS = [
  {
    id: 1,
    name: 'Karen Stewart',
    role: 'Happy Client',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '',
    rating: 3,
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Satisfied Customer',
    review:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo.',
    avatar: '',
    rating: 2,
  },
  {
    id: 3,
    name: 'Emily Clark',
    role: 'Regular Client',
    review:
      'Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    avatar: '',
    rating: 4,
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Loyal Customer',
    review:
      'Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur.',
    avatar: '',
    rating: 1,
  },
  {
    id: 5,
    name: 'Sophia Lee',
    role: 'Happy Client',
    review:
      'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    avatar: '',
    rating: 2,
  },
];

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <Wrapper className={clsx('pt-25')}>
      <Container>
        <SectionHeader
          title="Testimonials"
          subtitle="Our Clients Say"
          className={clsx('max-w-96 mb-25')}
        />

        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {REVIEWS.map(({ id, name, rating, review, role }) => (
              <CarouselItem
                key={id}
                className={clsx('basis-1 md:basis-1/3 pr-10')}
              >
                <div
                  className={clsx(
                    'flex items-center flex-col justify-center gap-5 text-center'
                  )}
                >
                  <figure
                    className={clsx(
                      'overflow-hidden size-25 rounded-full select-none'
                    )}
                  >
                    <img
                      src={NH_1}
                      alt=""
                      className={clsx('size-full object-center object-cover')}
                    />
                  </figure>

                  <div>
                    <h4
                      className={clsx(
                        'font-semibold text-lg mb-2',
                        'text-theme-navy'
                      )}
                    >
                      {name}
                    </h4>
                    <h5 className={clsx('text-base', 'text-fog-steel')}>
                      {role}
                    </h5>
                  </div>

                  <FontAwesome
                    icon="fa-solid fa-qoute-right"
                    size="2x"
                    className={clsx('text-theme-orange')}
                  />

                  <p className={clsx('text-base', 'text-fog-steel')}>
                    {review}
                  </p>

                  <StarRating
                    rating={rating}
                    starClassName="text-theme-orange"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default Testimonials;
