import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';
import { buttonVariants } from './Button.styles';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button', { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      buttonVariants({ variant: 'primary', size: 'md' }),
    );
  });
});
