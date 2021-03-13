const data = {
  rooms: [
    {
      id: '',
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
      id: '',
      avatarUrl: '',
      displayName: '신정근 바텐더',
      unreadCount: 0,
      lastChatMessage: '오시는 길에 와인 몇병만 사다주세요.',
      lastUpdatedAt: '',
    },
    {
      id: '',
      avatarUrl: '',
      displayName: '이미라 의사',
      unreadCount: 0,
      lastChatMessage: '',
      lastUpdatedAt: '',
    },
  ],
  chats: [],
};

// ToDo Naming 이 구린데...
const getRoomChatInfo = (chats) =>
  chats.reduce(
    (acc, chat) => {
      let { unreadCount, lastChatMessage, lastUpdatedAt } = acc;
      const { message, createdAt, isRead } = chat;

      // 읽지 않은 글 카운트
      if (!isRead) {
        unreadCount = unreadCount + 1;
      }

      // 더 최신에 작성한 챗인 경우
      if (createdAt > lastUpdatedAt) {
        lastUpdatedAt = createdAt;
        lastChatMessage = message;
      }

      return {
        unreadCount,
        lastChatMessage,
        lastUpdatedAt,
      };
    },
    {
      unreadCount: 0,
      lastChatMessage: '',
      lastUpdatedAt: 0,
    },
  );

// getRooms
// ToDo add sorting lastUpdatedAt 기준으 ex) reduce(...).sort(...)
const getRooms = () =>
  data.rooms.reduce((acc, room) => {
    const { id, avatarUrl, displayName, chats } = room;

    acc.push({
      id,
      avatarUrl,
      displayName,
      ...getRoomChatInfo(chats),
    });

    return acc;
  }, []);

// export const getRooms = () => {
// const result = [
//   {
//     id: 'string',
//     avatarUrl: 'string',
//     displayName: ' string',
//     unreadCount: 3,
//     lastChatMessage: '',
//     lastUpdatedAt: 3,
//   },
// ];
// const rooms = data.rooms.reduce((room) => {
//   room.chats;
// }, []);
// };

// getChat

// getMyImages
