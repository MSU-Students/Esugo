
export interface IApplication {
  id?: number;
  jobID: number;
  workerID: number;
  employerID: number;
  status: 'pending' | 'taken' | 'done' | 'canceled' | 'reported';
}
