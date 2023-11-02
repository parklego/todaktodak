import { atom } from "recoil";

export const storyState = atom({
  key: "story",
  default: {
    editStory: "",
  },
});
