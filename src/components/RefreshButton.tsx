'use client';

import { Button } from '@/components/ui/Button'; // Example of using a component from shadcn/ui

const RefreshButton = ({ onRefresh }: { onRefresh: () => void }) => {
  return (
    <Button onClick={onRefresh} className="mb-4">
      Refresh Task List
    </Button>
  );
};

export default RefreshButton;
