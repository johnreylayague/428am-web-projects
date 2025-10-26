import React from 'react';
// Components
import FontAwesome from '@/components/ui/app/fontawesome';
import Mark from '@/components/common/mark';
// Utils
import { getCurrentYear as GetCurrentYear } from '@/utils/dateFormatter';
// Clsx
import clsx from 'clsx';

interface CopyrightProps {
  companyName: string;
  prefixText?: string;
}

const Copyright: React.FC<CopyrightProps> = ({ companyName, prefixText }) => {
  return (
    <div className={clsx('py-4')}>
      {/* --- Footer Copyright Section --- */}
      <p
        className={clsx(
          'font-medium text-center flex flex-col lg:flex-row gap-2',
          'lg:text-start',
          'text-white'
        )}
      >
        {/* --- Year and Prefix Text --- */}
        <span className={clsx('order-2', 'lg:order-1')}>
          <FontAwesome
            icon="fa-regular fa-copyright"
            className={clsx('mr-1')}
          />
          {prefixText} {<GetCurrentYear />}
        </span>

        {/* --- Separator (only on large screens) --- */}
        <span className={clsx('hidden', 'lg:block lg:order-2')}> - </span>

        {/* --- Company Name --- */}
        <Mark
          className={clsx(
            'order-1 block',
            'lg:order-3 lg:inline-block',
            'text-white'
          )}
        >
          {companyName}
        </Mark>
      </p>
    </div>
  );
};

export default Copyright;
