import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input
}

export const Small = () => <Input size='small'></Input>;
export const Medium = () => <Input size='medium'></Input>;
export const Large = () => <Input size='large'></Input>;