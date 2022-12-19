/**
 * This component is the basis for many of our shared components.
 * It acts as a higly configurable base, allowing for a common prop API.
 * You may import and use this instead of a normal div, or add styles upon it
 * using the styled(Box) API.
 *
 * Tip: Emotion supports the `as` prop. I.e you can use box like any component
 * while maintaining the box API.
 * <Box as="a" href="xyz.com">Link</Box>
 * https://emotion.sh/docs/styled#as-prop
 */

import styled from '@emotion/styled';

// Generic units used for size or spacing properties
type SizeUnits = 'none' | 'xs' | 'small' | 'medium' | 'large' | 'xl';

type BoxShadowUnits = 'none' | 'xsoft' | 'soft' | 'medium' | 'hard';

// Asymmetrical paddings, i.e more x padding than y
enum asymPaddingValues {
  'none' = '0',
  'xs' = '4px 8px',
  'small' = '12px 18px',
  'medium' = '16px 24px',
  'large' = '20px 28px',
  'xl' = '32px 38px',
}

enum marginValues {
  'none' = '0',
  'xs' = '8px',
  'small' = '16px',
  'medium' = '24px',
  'large' = '32px',
  'xl' = '40px',
}

enum boxShadowValues {
  'none' = 'none',
  'xsoft' = 'rgb(0 0 0 / 4%) 0px 0px 20px',
  'soft' = 'rgb(0 0 0 / 8%) 0px 0px 20px',
  'medium' = 'rgb(0 0 0 / 14%) 0px 0px 20px',
  'hard' = 'rgb(0 0 0 / 22%) 0px 0px 20px',
}

export interface BoxProps {
  padding?: SizeUnits;
  marginBottom?: SizeUnits;
  marginRight?: SizeUnits;
  boxShadow?: BoxShadowUnits;
  fluid?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  flexDirection?: 'row' | 'row-reversed' | 'column' | 'column-reversed';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  backgroundColor?: string;
  color?: string;
  display?: 'flex' | 'inline' | 'block' | 'inline-block';
  style?: React.CSSProperties;
}

export const Box = styled.div<BoxProps>`
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  box-sizing: border-box;
  width: ${({ fluid }) => fluid && '100%'};
  background-color: ${({ backgroundColor }) => backgroundColor && `var(--${backgroundColor})`};
  color: ${({ color }) => color && `var(--${color})`};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  padding: ${({ padding }) => asymPaddingValues[padding!]};
  margin-bottom: ${({ marginBottom }) => marginValues[marginBottom!]};
  margin-right: ${({ marginRight }) => marginValues[marginRight!]};
  box-shadow: ${({ boxShadow }) => boxShadowValues[boxShadow!]};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
`;

Box.defaultProps = {
  padding: 'none',
  marginBottom: 'none',
  marginRight: 'none',
  boxShadow: 'none',
  display: 'block',
};
