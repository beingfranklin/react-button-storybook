import './Button.styles.css'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  onClick,
  isDisabled = false,
  isLoading = false,
  type = 'primary',
  children,
}) => {
  // Not using Dynamic class names
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  let buttonClasses = 'button '

  if (type === 'primary') {
    buttonClasses += isDisabled ? ' button-primary-disabled' : ' button-primary'
  } else if (type === 'secondary') {
    buttonClasses += isDisabled
      ? ' button-secondary-disabled'
      : ' button-secondary'
  } else if (type === 'tertiary') {
    buttonClasses += isDisabled
      ? ' button-tertiary-disabled'
      : ' button-tertiary'
  }

  return (
    <button
      className={`inline-flex items-center gap-2.5 px-6 py-3 font-Montserrat font-semibold text-btn leading-extra-loose rounded-extra-2xl ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      } ${buttonClasses}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
