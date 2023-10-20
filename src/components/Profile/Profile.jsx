// xxxxxxxxxxxxxxxxxxxx            UserCard          xxxxxxxxxxxxxxxxxxxxxxxxx

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  StyledProfileWrapper,
  StyledAvatar,
  StyledName,
  StyledTag,
  StyledLocation,
  StyledStatsWrapper,
  StyledStatItem,
  StyledSpanLabel,
  StyledSpanQuantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <StyledProfileWrapper>
      <div className="description">
        <StyledAvatar src={avatar} alt="User avatar" />
        <StyledName>{username}</StyledName>
        <StyledTag>@{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </div>

      <StyledStatsWrapper>
        <StyledStatItem>
          <StyledSpanLabel>Followers</StyledSpanLabel>
          <StyledSpanQuantity>{stats.followers}</StyledSpanQuantity>
        </StyledStatItem>
        <StyledStatItem>
          <StyledSpanLabel>Views</StyledSpanLabel>
          <StyledSpanQuantity>{stats.views}</StyledSpanQuantity>
        </StyledStatItem>
        <StyledStatItem>
          <StyledSpanLabel>Likes</StyledSpanLabel>
          <StyledSpanQuantity>{stats.likes}</StyledSpanQuantity>
        </StyledStatItem>
      </StyledStatsWrapper>
    </StyledProfileWrapper>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
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
