import { css } from "styled-components";

const alignCenter = css`
  display: flex;
  align-items: center;
`;

const alignBetween = css`
  ${alignCenter};
  justify-content: space-between;
`;

const center = css`
  ${alignCenter};
  justify-content: center;
`;

const justBetween = css`
  display: flex;
  justify-content: space-between;
`;

const fourteenFont = css`
  font-size: 14px;
  font-weight: 500;
`;

const styles = { alignCenter, alignBetween, center, justBetween, fourteenFont };
export { styles };
