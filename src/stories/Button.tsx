import Button from '@mui/material/Button';

interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  label: string;
  radius?: number;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MuiButton = ({
  variant = 'contained',
  backgroundColor = undefined,
  size = 'large',
  color = 'primary',
  label,
  radius = 1,
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: radius,
      }}
      {...props}
    >
      {label}
    </Button>
  );
};
