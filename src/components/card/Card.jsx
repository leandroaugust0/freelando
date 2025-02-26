import styled from "@emotion/styled";

const DivEstilizada = styled.div`
  padding: ${(props) => props.theme.spacing.s};
  background: ${(props) => props.theme.colors.secondaries.a};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.primaries.a}
  border-radius: ${(props) => props.theme.spacing.s};
`;

export const Card = ({ children }) => {
  return <DivEstilizada>{children}</DivEstilizada>;
};
