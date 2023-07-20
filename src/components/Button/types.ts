export interface ButtonProps {
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
  type?: 'primary' | 'secondary' | 'tertiary'
  children?: React.ReactNode
  icon?: React.ReactNode; 
}
