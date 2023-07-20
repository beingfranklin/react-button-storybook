import { Meta, StoryFn } from '@storybook/react'
// import { FaBeer } from 'react-icons/fa'
import { Button } from './Button'
import { ButtonProps } from './types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'Yooo it clicked' },
  },
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary', 
  children: 'Secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
  children: 'Tertiary',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  type: 'primary',
  children: 'With Icon',
  // icon: <FaBeer />,
}

// export const Loading = Template.bind({})
// Loading.args = {
//   type: 'primary', 
//   children: 'Loading',
//   isLoading: true,
// }

// export const Disabled = Template.bind({})
// Disabled.args = {
//   type: 'primary', 
//   children: 'Disabled',
//   isDisabled: true, 

// export const Pressed = Template.bind({})
// Pressed.args = {
//   variant: 'primary',
//   children: 'Pressed',
//   isPressed: true,
// }
