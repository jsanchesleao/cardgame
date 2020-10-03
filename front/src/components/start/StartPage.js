import React from 'react'

import {Container, BlockList, Block, FormControl} from './styled';
import {Button, TextInput} from '../theme/inputs';

export default function StartPage() {
  return (
    <Container>
      <BlockList>
        <Block>
          <FormControl>
            <Button>host</Button>
          </FormControl>
          <FormControl>
            <TextInput placeholder="Room Id"></TextInput>
          </FormControl>
        </Block>
        <Block>
          <FormControl>
            <Button>join</Button>
          </FormControl>
          <FormControl>
            <TextInput placeholder="Room Id"></TextInput>
          </FormControl>
        </Block>
      </BlockList>
    </Container>
  )
}