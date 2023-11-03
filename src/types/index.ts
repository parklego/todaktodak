export interface StoryItem {
  name: string;
  title: string;
  text: string;
  reply: string;
  email?: string;
  id?: string;
  timestamp: {
    nanoseconds: number;
    seconds: number;
  };
}
