import React from 'react';

import { Table as StyledTable, THead, TBody, TH, TR, TD } from './styles';

type Table = {
  THead: typeof THead;
  TBody: typeof THead;
  TH: typeof TH;
  TR: typeof TR;
  TD: typeof TD;
} & React.FC;

const Table: Table = (props) => <StyledTable {...props} />;
Table.THead = THead;
Table.TBody = TBody;
Table.TH = TH;
Table.TR = TR;
Table.TD = TD;

export default Table;
