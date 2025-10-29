export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  startAt: string;
  endAt: string;
  status: string;
  options: PollOption[];
}
