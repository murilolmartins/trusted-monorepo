import { useEffect } from 'react';

import { videoListValues } from '@constants';
import { useAlertModal } from '@hooks';

import { AlertModal } from './AlertModal';

import type { Meta, StoryObj } from '@storybook/react';

const props = {
  title: videoListValues[0].title,
  description: videoListValues[0].description,
  url: videoListValues[0].url
};

const meta: Meta<typeof AlertModal> = {
  title: 'Components/AlertModal',
  component: AlertModal
};

type Story = StoryObj<typeof AlertModal>;

const Component = () => {
  const { handleOpenAlertModal } = useAlertModal();

  useEffect(() => {
    handleOpenAlertModal(props);
  }, [handleOpenAlertModal]);

  return <AlertModal />;
};

export const Basic: Story = {
  render: () => <Component />
};

export default meta;
