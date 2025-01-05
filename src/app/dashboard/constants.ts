export enum UserMode {
  View = 'view',
  Edit = 'edit',
}
export const USER_MODE_SEARCH_KEY = 'mode';
const UserModeSet = new Set<string>(Object.values(UserMode));

export const isUserMode = (str?: string | null): str is UserMode =>
  Boolean(str && UserModeSet.has(str));

export const LOCAL_DASHBOARD_STATE_CONTEXT_KEY = 'localDashboard';
