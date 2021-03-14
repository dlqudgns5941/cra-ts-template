import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Chat, { ChatProps } from './index';

export default {
  title: 'ChatList/Chat',
  component: Chat,
} as Meta;

const Template: Story<ChatProps> = (args) => <Chat {...args} />;

export const MyChat = Template.bind({});
MyChat.args = {
  message: 'send data from me',
  isMe: true,
};

export const NotMyChat = Template.bind({});
NotMyChat.args = {
  message: 'receive message from others',
  isMe: false,
};
