import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_app/admin/users')({
  component: () => <div>Hello /_app/admin/users!</div>,
});
