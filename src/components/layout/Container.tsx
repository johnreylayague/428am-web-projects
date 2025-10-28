import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  noWrap?: boolean;
  maxWidth?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth,
  ref,
  noWrap = false,
  ...props
}) => {
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
        'w-full mx-auto relative',
        noWrap ? '' : 'container',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
// import clsx from 'clsx';
// import React from 'react';

// interface ContainerProps {
//   children?: React.ReactNode;
//   className?: string;
//   maxWidth?: string;
//   disablePaddingX?: boolean;
//   ref?: React.RefObject<HTMLDivElement | null>;
// }

// const Container: React.FC<ContainerProps> = ({
//   children,
//   className,
//   maxWidth,
//   disablePaddingX = false,
//   ref,
//   ...props
// }) => {
//   return (
//     <div
//       {...props}
//       ref={ref}
//       className={clsx(
//         disablePaddingX ? '' : 'px-4',
//         maxWidth ? maxWidth : 'max-w-[1200px]',
//         'w-full mx-auto relative',
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export default Container;
