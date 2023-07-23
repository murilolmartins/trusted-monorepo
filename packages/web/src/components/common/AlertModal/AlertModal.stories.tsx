import { useEffect } from 'react';

import { AlertModalType } from '@enums';
import { useAlertModal } from '@hooks';

import { AlertModal } from './AlertModal';

import type { Meta, StoryObj } from '@storybook/react';

const props = {
  title: AlertModalType.SUCCESS,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
