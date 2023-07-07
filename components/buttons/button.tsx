// Generic colored buttons

type ButtonColor =
  | 'green'
  | 'green-light'
  | 'green-dark'
  | 'yellow'
  | 'red'
  | 'red-light'
  | 'red-dark'
  | 'orange'
  | 'gray'
  | 'gray-light'
  | 'gray-dark'
  | 'blue'
  | 'blue-light'
  | 'blue-dark'
  | 'aqua'
  | 'violet';

type ButtonProps = {
  className?: string;
  color?: ButtonColor;
  onClick?: () => void;
  children: React.ReactNode;
};

const buttonColorToClassName = (color: ButtonColor | undefined) => {
  switch (color) {
    case 'green' || 'green-light': {
      return 'bg-green-200';
    }
    case 'green-dark': {
      return 'bg-green-400';
    }
    case 'yellow': {
      return 'bg-yellow-400';
    }
    case 'red-light': {
      return 'bg-red-400';
    }
    case 'red' || 'red-dark': {
      return 'bg-red-600';
    }
    case 'orange': {
      return 'bg-orange-400';
    }
    case 'gray' || 'gray-light': {
      return 'bg-gray-200';
    }
    case 'gray-dark': {
      return 'bg-gray-400';
    }
    case 'blue' || 'blue-light': {
      return 'bg-blue-200';
    }
    case 'blue-dark': {
      return 'bg-blue-400';
    }
    case 'aqua': {
      return 'bg-aqua-400';
    }
    case 'violet': {
      return 'bg-violet-400';
    }
    default: {
      return 'bg-gray-200';
    }
  }
};

/**
 * Generic button with solid background color and white text
 */
export function ButtonSolid({ children, className, onClick, color }: ButtonProps) {
  const bgColor = buttonColorToClassName(color);
  return (
    <button
      className={`rounded-md shadow-lg shadow-gray-400 drop-shadow-lg p-2 px-4 text-lg text-white ${bgColor} ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
