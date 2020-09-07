import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const ListBox = styled.div`
  background: #333;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  border-top: 1px solid #555;
  div {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    h3 {
      margin-bottom: 0;
    }
    p {
      margin: 0;
    }
  }
`;
