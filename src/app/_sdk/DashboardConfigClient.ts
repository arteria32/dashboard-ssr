import {
  Block,
  DashboardState,
  DashboardStructure,
} from '@/_types/features/dashboard';

//todo:create a wrapper for sdk clients to catching errors
/** Client for fetching data */
export class DashboardConfigClient {
  private static basePath = `${process.env.BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? 'NOT_DEFINED_URL'}/api/dashboard-configs`;

  static async getDashboardConfigByKey(
    key: string,
  ): Promise<DashboardStructure> {
    const result: DashboardStructure = await fetch(`${this.basePath}/${key}`, {
      cache: 'no-cache',
    }).then((res) => res.json());
    return result;
  }

  static async getDashboardStateByKey(key: string): Promise<DashboardState> {
    const result: DashboardStructure = await fetch(`${this.basePath}/${key}`, {
      cache: 'no-cache',
    }).then((res) => res.json());
    return result.state;
  }

  static async updateDashboardStateByKey(
    key: string,
    state: DashboardState,
  ): Promise<DashboardState> {
    const result: DashboardStructure = await fetch(`${this.basePath}/${key}`, {
      method: 'PATCH',
      body: JSON.stringify({ state }),
    }).then((res) => res.json());
    return result.state;
  }

  static async getBlockConfigByPageKeyAndBlockId(
    key: string,
    blockId: string,
  ): Promise<Block> {
    const result: Block = await fetch(`${this.basePath}/${key}/${blockId}`, {
      cache: 'no-cache',
    }).then((res) => res.json());
    return result;
  }
}
