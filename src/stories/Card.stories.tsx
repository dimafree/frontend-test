import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: any) => <Card {...args} />;

export const Primary = Template.bind({})
