import { DashboardStructure } from '@/_types/features/dashboard';

//todo:create a wrapper for sdk clients to catching errors
/** Client for fetching data */
export class PageConfigClient {
  private static basePath = `${process.env.BASE_URL || 'NOT_DEFINED_URL'}/api/dashboard-configs`;
  static async getPageConfigByKey(key: string): Promise<DashboardStructure> {
    const result: DashboardStructure = await fetch(`${this.basePath}/${key}`, {
      cache: 'no-cache',
    }).then((res) => res.json());
    return result;
  }
}
