import { Lifeguard } from './lifeguard.model';
import { People } from './people.model';

export interface Event {
  id: string;
  datetime: Date;
  lifeguards?: Lifeguard[];
  identified_people?: People[];
  mission_results?: string;
  complete_mission_log?: string;
}
