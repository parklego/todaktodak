import { atom } from "recoil";

export const storyState = atom({
  key: "story",
  default: {
    editTitle: "",
    editStory: "",
    allStory: 0,
  },
});
