type Variant = 'primary' | 'secondary' | 'outline' | 'outlineDark';

type Props = {
  label: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function PrimaryButton({
  className,
  label,
  variant = 'primary',
  onClick,
  disabled = false,
}: Props) {
  const baseStyles = 'text-sm font-[200] border-[.5px] transition-all duration-200 px-6 py-3 cursor-pointer';

  const variants = {
    primary: 'bg-white text-(--secondary) border-white hover:bg-transparent hover:text-white',
    secondary: 'bg-(--secondary) text-white border-(--secondary) hover:opacity-90',
    outline: 'border border-white text-white hover:text-(--secondary) hover:bg-white',
    outlineDark: 'border border-(--secondary) text-(--secondary) hover:bg-white hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${baseStyles} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } mr-2`}
    >
      {label}
    </button>
  );
}