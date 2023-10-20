// xxxxxxxxxxxxxxxxxxxx            UserCard          xxxxxxxxxxxxxxxxxxxxxxxxx


import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { StyledProfileWrapper, StyledAvatar, StyledName, StyledTag, StyledLocation, StyledStatItem,   StyledStatsWrapper,  StyledStatsLabel } from "./Profile.styled";

export const Profile = ({ user }) => {
    const { username, tag, location, avatar, stats } = user;
    return (
    <StyledProfileWrapper>
  
        <StyledAvatar src={avatar} alt="User avatar" />
        <StyledName>{username}</StyledName>
        <StyledTag>@{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>

        <StyledStatsWrapper>
          <StyledStatItem>
            <StyledStatsLabel>{stats.followers}</StyledStatsLabel>
          </StyledStatItem>
          <StyledStatItem>
            <StyledStatsLabel>{stats.views}</StyledStatsLabel>
          </StyledStatItem>
          <StyledStatItem>
            <StyledStatsLabel>{stats.likes}</StyledStatsLabel>
          </StyledStatItem>
        </StyledStatsWrapper>
    
    </StyledProfileWrapper>
  );
};

Profile.propTypes = {
    user: PropTypes.shape({
      username:PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      avatar: PropTypes.string,
      stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
      }),
    }),
  };

