// Allowed: the API's plugin list imports the modules through their entry points.
import { EverConnectPlugin } from '@dinary/plugin-ever-connect';
import { EverStatsPlugin } from '@dinary/plugin-ever-stats';
export const plugins = [EverConnectPlugin, EverStatsPlugin];
