'use client';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`section-heading ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={isCenter ? 'flex justify-center' : ''}>
          <span className="section-eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle" style={isCenter ? {} : { marginLeft: 0 }}>{subtitle}</p>}
      <div className={`section-divider ${isCenter ? '' : 'justify-start'}`}>
        <div className="section-divider-dot"></div>
      </div>
    </div>
  );
}
