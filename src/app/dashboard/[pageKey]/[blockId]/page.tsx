import Plug from '@/_shared/components/plug/plug';
import { PageConfigClient } from '@/app/_sdk/PageConfigClient';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { FC } from 'react';
import { IFrameWidget } from '../../_blocks/iframe/iframe-widget.module';
import PlugWidgetComponent from '../../_blocks/plug-widget/plug-widget';
import { isIFrameWidget } from '../../_blocks/type-guards';

type BlockPageProps = {
  params: Promise<{ pageKey: string; blockId: string }>;
};

const BlockPage: FC<BlockPageProps> = async ({ params }) => {
  const { pageKey, blockId } = await params;
  const block = await PageConfigClient.getBlockConfigByPageKeyAndBlockId(
    pageKey,
    blockId,
  );
  if (!block) return <Plug message={'Not found widget'} />;

  if (isIFrameWidget(block)) {
    return <IFrameWidget {...block} />;
  } else {
    return <PlugWidgetComponent {...block} />;
  }
};

export default BlockPage;
