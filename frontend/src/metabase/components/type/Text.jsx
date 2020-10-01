import styled from "styled-components";
import { space, typography } from "styled-system";
import { color } from "metabase/lib/colors";

const Text = styled.div`
  ${space};
  ${typography};
  color: ${props => color(`text-${props.color}`)};
`;

Text.defaultProps = {
  fontSize: "14px",
  color: "medium",
  mb: "8px",
  mt: "4px",
};

export default Text;
