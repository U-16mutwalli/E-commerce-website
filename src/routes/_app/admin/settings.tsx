import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_app/admin/settings')({
  component: () => <div>Hello /_app/admin/settings!</div>,
});
