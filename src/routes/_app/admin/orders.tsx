import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_app/admin/orders')({
  component: () => <div>Hello /_app/admin/orders!</div>,
});
