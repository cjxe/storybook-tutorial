import React from 'react';
import Button from './Button';

// adds an entry in the side nav
export default {
  title: 'Atoms/Button',
  component: Button
}

// renders the named exports (= components)
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>