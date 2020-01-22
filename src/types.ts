import { ActionConfig } from 'custom-card-helpers';

export interface LightalarmCardConfig {
  type: string;
  name?: string;
  time_entity: string;
  mode_entity: string;
  duration_entity: string;
}
