// Next/back navigation arrow buttons

import {
  HiChevronDoubleLeft,
  HiOutlineArrowRight,
  HiOutlineArrowLeft,
  HiChevronDoubleRight,
} from 'react-icons/hi';

import { IconType } from 'react-icons';
import Link from 'next/link';

/**
 * Props for generic navigation button
 */
type NavigationButtonProps = {
  className?: string;
  title?: string;
  action?: () => void;
  href?: string;
  size?: number; // size, in a Tailwinds width/height number
  children?: React.ReactNode;
};

/**
 * Props for button with icon
 */
type IconButtonProps = NavigationButtonProps & {
  icon: IconType;
  iconSide?: 'right' | 'left';
  iconClass?: string;
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
 * Accepts either action or href parameter;
 * If both passed, 'action' will be ignored.
 */
function BasicButton(props: IconButtonProps) {
  const { href, size, action, ...rest } = props;
  const dimensions = `w-${size || 12} h-${size || 12}`;
  if (href) {
    <Link href={href} title={props.title || href}>
      <Btn iconClass={dimensions} {...rest} />;
    </Link>;
  }
  return <Btn action={action} iconClass={dimensions} {...rest} />;
}

/**
 * Inner class for BasicButton
 */
const Btn = ({
  className,
  action,
  title,
  icon,
  iconSide,
  children,
  iconClass,
}: IconButtonProps) => {
  return (
    <button type="button" className={`${className || ''}`} onClick={action} title={title}>
      <span
        className={`flex justify-between space-x-2 ${
          iconSide === 'left' ? 'flex-row-reverse' : ''
        }`}
      >
        {children}
        {icon({ className: iconClass })}
      </span>
    </button>
  );
};
