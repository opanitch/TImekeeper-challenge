import * as DURATION_TYPE from './constants';

export interface TimekeeperState {
  duration: number;
  durationType: string; // UnionOf<typeof DURATION_TYPE>
  endTime: number;
  startTime: number;
}
