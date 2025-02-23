import React from 'react';
import { Pagination } from '../Pagination';
import { Group } from '../../Group/Group';

function Wrapper(props: any) {
  return (
    <Group position="center">
      <Pagination total={10} {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `<Pagination total={10}${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
  ],
};
