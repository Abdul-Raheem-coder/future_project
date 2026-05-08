import { Link } from 'react-router-dom';

/**
 * Reusable component with animated moving line on hover
 * @param {string} to - Router path (for Link)
 * @param {string} href - External URL (for anchor)
 * @param {string} children - Link text
 * @param {string} variant - 'default' | 'center' | 'accent'
 * @param {string} className - Additional tailwind classes
 */
export default function HoverLink({ 
  to, 
  href, 
  children, 
  variant = 'default',
  className = '' 
}) {
  const variantClass = {
    default: 'hover-line',
    center: 'hover-line-center',
    accent: 'hover-line-accent'
  }[variant];

  const baseClass = `${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={baseClass}>
      {children}
    </Link>
  );
}
