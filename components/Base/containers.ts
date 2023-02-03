import styled from '@emotion/styled';
import { Box } from './box';

export const Card = styled(Box)`
  background-color: white;
  border-radius: 4px;
`;

// Default props
Card.defaultProps = {
  padding: 'medium',
};

export const Badge = styled(Box)`
  border-radius: 4px;
  width: fit-content;
  font-size: 10px;
`;

Badge.defaultProps = {
  padding: 'xs',
};
