type Variant = 'primary' | 'secondary' | 'outline';

type Props = {
  label: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({
  label,
  variant = 'primary',
  onClick,
  disabled = false,
}: Props) {
  const baseStyles = 'font-[200] border-[.5px] transition-all duration-200 px-6 py-2';

  const variants = {
    primary: 'bg-white text-(--secondary) hover:opacity-90',
    secondary: 'bg-secondary text-white hover:opacity-90',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {label}
    </button>
  );
}