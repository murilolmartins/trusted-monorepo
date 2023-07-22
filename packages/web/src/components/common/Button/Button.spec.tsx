import { ButtonType } from '@enums';

import { Button } from './Button';

import { customRender } from '@test';
import userEvent from '@testing-library/user-event';

describe('<Button/>', () => {
  it('should render Button with secondary type.', async () => {
    const onClickFn = jest.fn();

    const { getByRole } = customRender(
      <Button onClick={onClickFn} buttontype={ButtonType.SECONDARY}>
        Button
      </Button>
    );

    const button = getByRole('button', { name: 'Button' });

    await userEvent.click(button);

    expect(onClickFn).toHaveBeenCalledTimes(1);
    expect(button).toBeVisible();
  });
});
