import { darken, lighten } from 'polished';

export function fun() {
  return 'fun';
}

export function gradient({
  color,
  to = 'bottom',
  amount = 0.1,
  darker = true,
}) {
  const fn = darker ? darken : lighten;
  return `linear-gradient(to ${to}, ${color}, ${fn(amount, color)})`;
}
