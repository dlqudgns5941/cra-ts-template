import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import translateTimestamp from '@utils/translateTimestamp';
import sampleImg from './sample.png';

const StyledWrapper = styled.div<{ unreadCount: number }>`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.625rem;
  padding: 0.562rem 1rem;
  text-decoration: none;
  width: 100%;

  img {
    border-radius: 50%;
    margin-right: 0.938rem;
    height: 3.5rem;
    width: 3.5rem;
  }

  .main {
    width: 100%;

    .user {
      color: #464052;
      font-size: 1rem;
      font-weight: bold;
      letter-spacing: -0.2px;
      margin: 0.9rem 0 0.188rem 0;
    }

    .message {
      color: #a4a6b0;
      font-size: 0.813rem;
      font-weight: 500;
      letter-spacing: -0.1px;
      margin: 0.188rem 0 0;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .timestamp {
      color: #363a42;
      font-size: 0.688rem;
      font-weight: 500;
      margin: 0.75rem 0 0.375rem 0.813rem;
      opacity: 0.4;
      width: 1.812rem;
    }

    .unread-count {
      background-color: #5b36ac;
      border-radius: 50%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.625rem;
      font-weight: bold;
      letter-spacing: -0.08px;
      opacity: ${({ unreadCount }) => (unreadCount === 0 ? 0 : 1)};
      height: 1.125rem;
      width: 1.125rem;
    }
  }
`;

export interface RoomProps {
  id: string;
  avatarUrl: string;
  displayName: string;
  lastChatMessage: string;
  lastUpdatedAt: number;
  unreadCount: number;
}

const Room: React.FC<RoomProps> = ({
  id,
  avatarUrl,
  displayName,
  lastChatMessage,
  lastUpdatedAt,
  unreadCount,
}) => {
  const displayedMessage =
    lastChatMessage.length > 24
      ? `${lastChatMessage.slice(0, 24)}..`
      : lastChatMessage;

  const {
    isToday,
    translatedHour,
    translatedMinute,
    translatedDay,
  } = translateTimestamp(lastUpdatedAt);

  const displayedTimestamp = isToday
    ? `${translatedHour}:${translatedMinute}`
    : translatedDay;

  return (
    <Link style={{ textDecoration: 'none' }} to={`/room/${id}`}>
      <StyledWrapper unreadCount={unreadCount}>
        {/*<img src={avatarUrl} alt={displayName} />*/}
        <img src={avatarUrl} alt={displayName} />
        {/* <img src={avatarUrl}/> */}
        <div className="main">
          <div className="user">{displayName}</div>
          <div className="message">{displayedMessage}</div>
        </div>
        <div className="right">
          <div className="timestamp">{displayedTimestamp}</div>
          <div className="unread-count">{unreadCount}</div>
        </div>
      </StyledWrapper>
    </Link>
  );
};

export default Room;
