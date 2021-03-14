import React from 'react';
import styled from 'styled-components';
import Header from '@components/Header';
import { ReactComponent as ImgUploadIcon } from '@assets/icons/upload.svg';
import { ReactComponent as BackIcon } from '@assets/icons/back.svg';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';
import Room from '@components/Room';
import Chat from '@components/Chat';

const Container = styled.div`
  ${Header} {
    .upload-icon {
      margin-right: 1.063rem;
    }
  }
`;

const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1rem;
`;

const RoomDetailPage = () => {
  return (
    <Container>
      <Header>
        <BackIcon />
        <div className="page-title">장만월 사장님</div>
        <div>
          <ImgUploadIcon className="upload-icon" />
          <SearchIcon />
        </div>
      </Header>
      <ChatBody>
        <Chat isMe={false} message={'출근했니?'} createdAt={100} />
        <Chat isMe={false} message={'출근했냐구?'} createdAt={100} />
        {/* ToDo 구분선 넣어주기 */}
        <hr />
        <Chat isMe={false} message={'어딘데 출근 안하니?'} createdAt={100} />
        {/* ToDo margin-botoom 넣어주기 같은 경우는 0.625rem 달라지는 경우는 1.25rem*/}
        <Chat isMe={true} message={'해외 출장중입니다.'} createdAt={100} />
        {/* ToDo 메시지 전송 창 만들기 */}
      </ChatBody>
    </Container>
  );
};

export default RoomDetailPage;
