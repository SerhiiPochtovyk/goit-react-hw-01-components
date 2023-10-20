import styled from 'styled-components';

export const StyledProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
//   background-color: ${props => props.$color};
`;

export const StyledName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

export const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const StyledTag = styled.p`
  margin: 5px 0;
`;

export const StyledLocation = styled.p`
  margin-bottom: 10px;
`;

export const StyledStatsWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledStatItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const StyledStatsLabel = styled.span`
  font-weight: bold;
`;
