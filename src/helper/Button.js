import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => (props.$primary ? '#ee3425' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#ee3425')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

export default Button;
