import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsStyle,
} from '@mantine/tests';
import { Paper } from '../Paper/Paper';
import { Card } from './Card';

describe('@mantine/core/Card', () => {
  itSupportsOthers(Card, {});
  itSupportsClassName(Card, {});
  itSupportsRef(Card, {}, HTMLDivElement, 'elementRef');
  itRendersChildren(Card, {});
  itSupportsStyle(Card, {});

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(
      <Card<'a'> component="a" href="https://mantine.dev">
        Card
      </Card>
    );
    const withComponent = shallow(
      <Card<typeof TestComponent> component={TestComponent}>Card</Card>
    );

    expect(withTag.dive().type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.dive().type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });

  it('passes padding and radius to Paper component', () => {
    const element = shallow(
      <Card radius="xl" padding={29}>
        test-card
      </Card>
    );
    expect(element.find(Paper).prop('padding')).toBe(29);
    expect(element.find(Paper).prop('radius')).toBe('xl');
  });

  it('has correct displayName', () => {
    expect(Card.displayName).toEqual('@mantine/core/Card');
  });
});
