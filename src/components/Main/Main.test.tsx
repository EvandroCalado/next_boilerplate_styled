import { render, screen } from '@/utils/test-utils';
import { Main } from '.';

describe('Main', () => {
  it('Should render headind', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: /next boilerplate/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
