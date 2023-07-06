import { useRouter } from 'next/navigation';

function ActiveLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className || ''}>
      {children}
    </a>
  );
}

export default ActiveLink;
