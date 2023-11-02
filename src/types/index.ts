export interface StoryItem {
  name: string;
  title: string;
  text: string;
  reply: string;
  timestamp: {
    nanoseconds: number;
    seconds: number;
  };
}
