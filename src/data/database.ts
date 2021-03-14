import { Data } from './dataType';

const data: Data = {
  rooms: [
    {
      id: '1',
      avatarUrl: '',
      displayName: '장만월 사장님',
      chats: [
        {
          id: '',
          type: 'text',
          message: '이병훈 입니다.',
          imageUrl: null,
          isMe: true,
          isRead: true,
          createdAt: 5,
        },
        {
          id: '',
          type: 'text',
          message: '안녕하세요.',
          isMe: true,
          isRead: true,
          imageUrl: null,
          createdAt: 3,
        },
        {
          id: '',
          type: 'image',
          message: '사진을 보냈습니다.',
          isMe: true,
          isRead: false,
          imageUrl: 'https://image.com',
          createdAt: 6,
        },
      ],
    },
    {
      id: '2',
      avatarUrl: '',
      displayName: '신정근 바텐더',
      chats: [
        {
          id: '',
          type: 'text',
          message: '오시는 길에 와인 몇병만 사다주세요.',
          isMe: true,
          isRead: true,
          imageUrl: null,
          createdAt: 1615650316,
        },
      ],
    },
    {
      id: '3',
      avatarUrl: '',
      displayName: '이미라 의사',
      chats: [
        {
          id: '',
          type: 'text',
          message: '휴가 잘 보내고 계신가요? 다름이 아니라 지 가나다라마바',
          isMe: true,
          isRead: true,
          imageUrl: null,
          createdAt: 16156503168,
        },
      ],
    },
    {
      id: '4',
      avatarUrl: '',
      displayName: '구찬성 지배인',
      chats: [
        {
          id: '',
          type: 'text',
          message: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
          isMe: true,
          isRead: true,
          imageUrl: null,
          createdAt: 161565031683,
        },
      ],
    },
  ],
};

export default data;
