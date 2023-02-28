import React from 'react';
import Center from '../Center/Center';
import Button from './Button';

// A1: We can also the master component with `args` by adding the `args` object
// # Decorators
// Decorators are components that wrap a story
// i.e., <Center> {component} </Center>
export default {
  title: 'Components/Button',
  component: Button,
  decorators: [story => <Center>{story()}</Center>]
}


// renders the named exports (= components)
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>


// Q1: why write stories with `args`?
const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary args'
}

// A1: extend props from other stories
// with this, we can do more with less repetition
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: 'Long primary args'
}