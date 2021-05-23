import React from 'react';

import {
  Container,
  Table as StyledTable,
  THead,
  TBody,
  TFoot,
  TH,
  TR,
  TD,
} from './styles';

type Table = {
  THead: typeof THead;
  TBody: typeof TBody;
  TFoot: typeof TFoot;
  TH: typeof TH;
  TR: typeof TR;
  TD: typeof TD;
} & React.FC;

const Table: Table = (props) => (
  <Container>
    <StyledTable {...props} />
  </Container>
);

Table.THead = THead;

Table.TBody = TBody;

Table.TFoot = TFoot;

Table.TH = TH;

Table.TR = TR;

Table.TD = TD;

export default Table;
