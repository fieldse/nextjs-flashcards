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
 * "Next" button with single arrow icon
 */
export function NextButtonArrow(props: NavigationButtonProps) {
  return <BasicButton {...props} icon={HiOutlineArrowRight} iconSide="right" />;
}

/**
 * "Next" button with double chevron icon
 */
export function NextButtonDoubleArrow(props: NavigationButtonProps) {
  return <BasicButton {...props} icon={HiChevronDoubleRight} iconSide="right" />;
}

/**
 * "Prev" button with single arrow icon
 */
export function PrevButtonArrow(props: NavigationButtonProps) {
  return <BasicButton {...props} icon={HiOutlineArrowLeft} iconSide="right" />;
}

/**
 * "Prev" button with double chevron icon
 */
export function PrevButtonDoubleArrow(props: NavigationButtonProps) {
  return <BasicButton {...props} icon={HiChevronDoubleLeft} iconSide="left" />;
}

/**
 * Basic navigation button, accepts icon param and which side it should be on
 * TODO: add support for href attribute
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
