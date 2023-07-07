// Next/back navigation arrow buttons

import {
  HiOutlineChevronDoubleRight,
  HiChevronDoubleLeft,
  HiOutlineArrowRight,
  HiOutlineArrowLeft,
  HiChevronDoubleRight,
} from 'react-icons/hi';

import { IconType } from 'react-icons';

type NavigationButtonProps = {
  className?: string;
  action?: () => void;
  size?: number; // size, in a Tailwinds w/h number
  children?: React.ReactNode;
};

/**
 * "Next" button with double chevron icon
 * TODO: add support for href attribute
 */
export function NextButtonDoubleArrow(props: NavigationButtonProps) {
  return <BasicButton {...props} icon={HiChevronDoubleRight} iconSide="right" />;
}

/**
 * Basic navigation button, accepts icon param and which side it should be on
 */
function BasicButton(
  props: NavigationButtonProps & { icon: IconType; iconSide?: 'right' | 'left' },
) {
  const { size, icon, className, action, children, iconSide } = props;
  const dimensions = `w-${size || 12} h-${size || 12}`;
  return (
    <button type="button" className={`${className || ''}`} onClick={action}>
      <span
        className={`flex justify-between space-x-2 ${
          iconSide === 'left' ? 'flex-row-reverse' : ''
        }`}
      >
        {children}
        {icon({ className: dimensions })}
      </span>
    </button>
  );
}
