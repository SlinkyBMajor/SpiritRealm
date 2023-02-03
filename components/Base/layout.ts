import styled from '@emotion/styled';
import { Box } from './box';

export const Divider = styled(Box)`
  width: 100%;
  height: 1px;
  background-color: #eff1f3;
`;

// ******* GRID **********
const columnBaseWidth = 8.33333333;
type ColumnSpaces = 'small' | 'medium' | 'large';
type ColumnWidths = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

enum columnSpaceSize {
  'small' = '8px',
  'medium' = '12px',
  'large' = '16px',
}

export const Columns = styled(Box)<{ space?: ColumnSpaces }>`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -${({ space }) => (space ? columnSpaceSize[space] : 0)};
  margin-left: -${({ space }) => (space ? columnSpaceSize[space] : 0)};
  & > * {
    padding-left: ${({ space }) => (space ? columnSpaceSize[space] : 0)};
    padding-right: ${({ space }) => (space ? columnSpaceSize[space] : 0)};
  }
`;

export const Column = styled(Box)<{
  width?: ColumnWidths;
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
}>`
  display: flex;
  box-sizing: border-box;
  flex: 1 0 auto;
  flex-basis: 0;
  flex-direction: column;
  max-width: 100%;
  flex-basis: ${({ width }) => width && columnBaseWidth * width + '%'};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};
  max-width: ${({ width }) => width && columnBaseWidth * width + '%'};
`;
// ******* GRID END **********
