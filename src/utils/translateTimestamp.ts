type TranslateTimestamp = (
  timeStamp: number,
) => {
  year: string;
  month: string;
  date: string;
  isToday: boolean;
  translatedDate: string;
  translatedDay: typeof dayList[number];
  translatedHour: string;
  translatedMinute: string;
};

type IsToday = ({
  timeStamp,
  date,
}: {
  timeStamp: number;
  date: number;
}) => boolean;

const dayList = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
] as const;

const isToday: IsToday = ({ timeStamp, date }) => {
  const now = new Date();
  return (
    Math.abs(timeStamp - now.getTime()) < 1000 * 60 * 60 * 24 &&
    date === now.getDate()
  );
};

const translateTimestamp: TranslateTimestamp = (timeStamp) => {
  const time = new Date(timeStamp);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDay();
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();

  return {
    year: `${year}`,
    month: `${month}`,
    date: `${date}`,
    isToday: isToday({ timeStamp, date }),
    translatedDate: `${year}년 ${month}월 ${date}일`,
    translatedDay: dayList[day],
    translatedHour: hour < 10 ? `0${hour}` : `${hour}`,
    translatedMinute: minute < 10 ? `0${minute}` : `${minute}`,
  };
};

export default translateTimestamp;

// translateDate(1615628399612)

// result // {
//   year: '2021',
//   month: '5',
//   date: '7',
//   isToday: true,
//   translatedDate: '2021년 5월 7일',
//   translatedDay: '월요일',
//   translatedHour: '01'
//   translatedMinute: '09',
// }
