export const state = () => ({
  title: "AOne Dashboard"
});

export const mutations = {
  SET_TITLE(state: any, title: string) {
    state.title = title;
  }
};
