import React from 'react';
import { generateUniqueString } from '../../../helpers/uniqueStringGen';
import useCurrentPathname from '../../../hooks/useCurrentPath';
import { StyledMargin } from '../../styles/StyledMargin/StyledMargin';
import { StyledMarginNumber } from '../../styles/StyledMarginNumber/StyledMarginNumber';
import Theme from '../../styles/theme';

interface Props {
  marginCount: number;
}

export const Margin: React.FC<Props> = ({ marginCount }) => {
  const url = useCurrentPathname();
  const marginLength = new Array(marginCount).fill(marginCount);

  return (
    <StyledMargin
      role="Margin"
      theme={Theme}
      fontColor={url === '/' ? '' : Theme.colors.black}
    >
      {marginLength.map((val: null, index: number) => {
        return (
          <StyledMarginNumber key={generateUniqueString()} theme={Theme}>
            {index + 1}
          </StyledMarginNumber>
        );
      })}
    </StyledMargin>
  );
};
