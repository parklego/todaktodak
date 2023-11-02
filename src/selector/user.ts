import { selector } from "recoil";
import { storyState } from "../atom/story";

export const storyStateSelector = selector({
  key: "isEdit",
  get: ({ get }) => {
    const story = get(storyState);

    return story.editStory.length !== 0;
  },
});
