import { Button } from '@components-common';

import * as S from './HomeRegisterUsersForm.styles';
import { useRegisterUsersForm } from './hooks/useRegisterUsers';

import { Form, Input } from 'antd';

const HomeRegisterUsersForm = () => {
  const { handleOnSubmit } = useRegisterUsersForm();
  return (
    <S.HomeRegisterUsersFormContainer
      initialValues={{ name: '' }}
      onFinish={(values) => handleOnSubmit(values as { name: string })}
    >
      <Form.Item
        name="name"
        style={{ flex: '1' }}
        rules={[
          { required: true, message: 'Insira um login' },
          { type: 'string', message: 'Insira um login válido' },
          { pattern: /^[a-z0-9]+$/i, message: 'Insira um login válido' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Adicionar</Button>
      </Form.Item>
    </S.HomeRegisterUsersFormContainer>
  );
};

export { HomeRegisterUsersForm };
