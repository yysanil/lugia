import React from 'react';
import { NumberInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
`;
export default class RangeNumberInput extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <NumberInput
          max={100}
          min={10}
          step={5}
          defaultValue="5"
        />
        <NumberInput
          max={1}
          min={0.01}
          step={0.01}
          defaultValue="0.50"
        />
        <NumberInput
          max={100}
          min={10}
          step={5}
          defaultValue="10"
        />
      </Wrapper>
    );
  }
}
