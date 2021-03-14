import { Data } from './dataType';

const profileImageRoot = './images/profile';
const photoImageRoot = './images/photo';

const data: Data = {
  photos: [
    `${photoImageRoot}/photo-1.png`,
    `${photoImageRoot}/photo-2.png`,
    `${photoImageRoot}/photo-3.png`,
    `${photoImageRoot}/photo-4.png`,
    `${photoImageRoot}/photo-5.png`,
    `${photoImageRoot}/photo-6.png`,
    `${photoImageRoot}/photo-7.png`,
  ],
  rooms: [
    {
      id: '1',
      avatarUrl: `${profileImageRoot}/profile-1.png`,
      displayName: '장만월 사장님',
      chats: [
        {
          id: '',
          type: 'image',
          message: '이병훈 입니다.',
          imageUrl: 'https://image.com',
          isMe: true,
          isRead: true,
          createdAt: 5,
        },
        {
          id: '',
          type: 'text',
          message: '안녕하세요.',
          isMe: true,
          isRead: false,
          imageUrl: null,
          createdAt: 5,
        },
        {
          id: '',
          type: 'image',
          message: '어딘데 출근 안하니, 죽고싶니?',
          isMe: true,
          isRead: false,
          imageUrl: null,
          createdAt: 6,
        },
      ],
    },
    {
      id: '2',
      avatarUrl: `${profileImageRoot}/profile-2.png`,
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
      avatarUrl: `${profileImageRoot}/profile-3.png`,
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
      avatarUrl: `${profileImageRoot}/profile-4.png`,
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
    {
      id: '5',
      avatarUrl: `${profileImageRoot}/profile-5.png`,
      displayName: '노준석 총지배인',
      chats: [
        {
          id: '',
          type: 'text',
          message:
            '휴가에서 언제 돌아오시는지요. 돌아오시면 가나다라마바사아아',
          isMe: true,
          isRead: true,
          imageUrl: null,
          createdAt: 161565031683,
        },
      ],
    },
    {
      id: '6',
      avatarUrl: `${profileImageRoot}/profile-6.png`,
      displayName: '김유나 인턴',
      chats: [
        {
          id: '',
          type: 'text',
          message: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
          isMe: true,
          isRead: true,
          imageUrl: null,
          createdAt: 161565031683,
        },
      ],
    },
    {
      id: '7',
      avatarUrl: `${profileImageRoot}/profile-7.png`,
      displayName: '구현모',
      chats: [
        {
          id: '',
          type: 'text',
          message: '술먹자',
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
