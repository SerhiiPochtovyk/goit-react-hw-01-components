import styled from 'styled-components';

export const StyledProfileWrapper = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  width: 300px;
  // padding: 2px;
  margin: 0 auto;
  border: 1px solid #5ba394;
  border-radius: 8px;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
  }
`;

export const StyledAvatar = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #5f5aa2;
  object-fit: cover;
  margin-top: 20px;

  overflow: hidden;
`;

export const StyledName = styled.p`
  margin: 10px 20px;
  font-weight: 600;
  font-size: 20px;
`;

export const StyledTag = styled.p`
  margin: 10px 20px;
  font-weight: 400;
  font-size: 18px;
`;
export const StyledLocation = styled.p`
  margin: 10px 20px;
  font-weight: 400;
  font-size: 18px;
`;

export const StyledStatsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  background-color: rgb(181, 188, 223);
  border-radius: 8px;
`;
export const StyledStatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(147, 48, 48);
  border-radius: 4px;
`;
export const StyledSpanLabel = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const StyledSpanQuantity = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
