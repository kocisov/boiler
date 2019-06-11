import React from 'react';
import { AlertTriangle } from 'react-feather';
import Text, { InsideText } from './Text';
import Flex from './Flex';
import Icon from './Icon';
import { gradient } from '../funs';

const cl = gradient({ color: '#ea1d29' });

export default function App() {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        p={10}
        color="#fff"
        background={cl}
      >
        <Icon mr={1}>
          <AlertTriangle />
        </Icon>
        <Text m={0}>
          You are currently using
          <InsideText m={1} fontWeight={600}>
            Experimental
          </InsideText>
          channel.
        </Text>
      </Flex>
    </>
  );
}
