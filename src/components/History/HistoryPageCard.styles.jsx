import styled from 'styled-components';

export const HistoryItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 150px;
    height: 150px;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
  padding-right: 10px;
`;

export const RemoveButtonContainer = styled.div`
  margin-left: auto;
  cursor: pointer;
`;
