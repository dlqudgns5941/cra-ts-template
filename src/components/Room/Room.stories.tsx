import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Room, { RoomProps } from './index';

export default {
  title: 'RoomList/Room',
  component: Room,
} as Meta;

const Template: Story<RoomProps> = (args) => <Room {...args} />;

export const PrimayRoom = Template.bind({});
PrimayRoom.args = {
  avatarUrl: '',
  displayName: '장만월 사장님',
  lastChatMessage: '어딘데 출근 안하니, 죽고싶니?',
  lastUpdatedAt: 1615654120484,
  unreadCount: 0,
};

export const UnreadcountRoom = Template.bind({});
UnreadcountRoom.args = {
  avatarUrl: '',
  displayName: '신정근 바텐더',
  lastChatMessage: '오시는 길에 와인 몇병만 사다주세요.',
  lastUpdatedAt: 1615650316,
  unreadCount: 2,
};
