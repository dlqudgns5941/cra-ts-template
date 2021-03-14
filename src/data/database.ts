import { Data } from './dataType';

const data: Data = {
  rooms: [
    {
      id: '13213',
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
      id: 'afa',
      avatarUrl: '',
      displayName: '신정근 바텐더',
      chats: [],
    },
    {
      id: 'dwqdwq',
      avatarUrl: '',
      displayName: '이미라 의사',
      chats: [],
    },
  ],
};

export default data;
