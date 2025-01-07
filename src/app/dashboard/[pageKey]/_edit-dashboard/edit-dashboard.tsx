'use client';

import { DashboardStructure } from '@/_types/features/dashboard';
import { FC, Fragment } from 'react';
import DashboardBlock from '../../_blocks';
import EditableWrapper from './widget-wrapper/editable-wrapper';

type EditDashboardWrapperProps = { dashboard: DashboardStructure };

const EditDashboardWrapper: FC<EditDashboardWrapperProps> = ({ dashboard }) => {
  return (
    <Fragment>
      {dashboard.content.map((block) => (
        <DashboardBlock
          key={block.id}
          block={block}
          renderWidget={(props) => <EditableWrapper {...props} />}
        />
      ))}
    </Fragment>
  );
};

export default EditDashboardWrapper;
