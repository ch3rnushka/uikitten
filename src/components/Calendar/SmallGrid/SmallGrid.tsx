import styled from '@emotion/styled';

const SmallGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
`;

export default SmallGrid;
