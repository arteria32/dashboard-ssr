import { DashboardStructure } from '@/_types/features/dashboard';
import { FC, Fragment } from 'react';
import DashboardBlock from '../../_blocks';
import ViewWidgetWrapper from './widget-wrapper/widget-wrapper';

type ViewDashboardWrapperProps = { dashboard: DashboardStructure };

const ViewDashboardWrapper: FC<ViewDashboardWrapperProps> = ({ dashboard }) => {
  return (
    <Fragment>
      {dashboard.content.map((block) => (
        <DashboardBlock
          key={block.id}
          block={block}
          renderWidget={(props) => <ViewWidgetWrapper {...props} />}
        />
      ))}
    </Fragment>
  );
};

export default ViewDashboardWrapper;
