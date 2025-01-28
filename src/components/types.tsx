export type Job = {
  id: string;
  schedule: string;
  name: string;
  status: boolean;
  task: string;
};

export type Log = {
  id: string;
  executionTime: string;
  duration: number;
  status: boolean;
  errorMessage: string;
};