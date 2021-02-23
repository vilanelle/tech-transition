import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  getTabContent: (categoryId: string) => ReactElement;
  syncTabWithPath: (categoryId: string) => void;
}

export const TabPanel: React.FC<Props> = ({ getTabContent, syncTabWithPath }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  useEffect(() => {
    syncTabWithPath(categoryId);
  }, [categoryId, syncTabWithPath]);
  return (
    <div role="tabpanel">
      {getTabContent(categoryId)}
    </div>
  );
};
