import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { BUTTON_VARIANTS } from './Button';

export default {
  title: 'Buttons',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [BUTTON_VARIANTS.PRIMARY, BUTTON_VARIANTS.SECONDARY],
      },
    },
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: BUTTON_VARIANTS.PRIMARY,
  children: 'Button',
  onClick: action('clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: BUTTON_VARIANTS.SECONDARY,
  children: 'Button',
  onClick: action('clicked'),
};

//how to create action on first button to show in action tab
