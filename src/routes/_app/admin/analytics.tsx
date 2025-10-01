import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_app/admin/analytics')({
  component: () => <div>Hello /_app/admin/analytics!</div>,
});
