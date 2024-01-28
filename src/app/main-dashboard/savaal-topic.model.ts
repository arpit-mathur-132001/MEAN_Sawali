export interface SavaalTopic {
  topic: string;
  description: string;
  isFlipped: boolean;
  flip(): void;
}
