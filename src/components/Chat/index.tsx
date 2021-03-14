import React from 'react';
import styled from 'styled-components';
import palette from '../../assets/styles/palette';
import translateTimestamp from '@utils/translateTimestamp';

// ToDo storybook 절대 경로 오류;

const Container = styled.div<{ isMe: boolean }>`
  display: flex;
  justify-content: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
  align-items: flex-end;
`;

const Message = styled.div<{ isMe: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 12px;
  color: ${({ isMe }) => (isMe ? palette.white : palette.charcoalGreyTwo)};
  background-color: ${({ isMe }) => (isMe ? palette.purple : palette.white)};
  box-shadow: 0 2px 4px 0
    ${({ isMe }) => (isMe ? 'rgba(0, 0, 0, 0.1)' : 'rgba(91, 56, 177, 0.4)')};
  font-size: 0.875rem;
  font-weight: 600;
`;

const Time = styled.span<{ isMe: boolean }>`
  color: ${palette.charcoalGreyTwo};
  margin-left: ${({ isMe }) => (isMe ? '0' : '0.25rem')};
  margin-right: ${({ isMe }) => (isMe ? '0.25rem' : '0')};
  opacity: 0.4;
  font-size: 0.75rem;
  font-weight: 500;
`;

export interface ChatProps {
  isMe: boolean;
  message: string;
  createdAt: number;
}

const Chat: React.FC<ChatProps> = ({ message, isMe, createdAt }) => {
  // ToDo createdAt 으로 time 변환 후 넣어주기;
  return (
    <Container isMe={isMe}>
      {isMe ? <Time isMe={isMe}>02:36</Time> : null}
      <Message isMe={isMe}>{message}</Message>
      {isMe ? null : <Time isMe={isMe}>02:36</Time>}
    </Container>
  );
};

export default Chat;
