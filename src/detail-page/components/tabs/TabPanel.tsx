import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  getTabContent: (categoryId: string) => ReactElement;
}

export const TabPanel: React.FC<Props> = ({ getTabContent }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  return (
    <div role="tabpanel">
      {getTabContent(categoryId)}
    </div>
  );
};
