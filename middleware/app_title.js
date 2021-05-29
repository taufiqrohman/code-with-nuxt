export default ({ route, store }) => {
  const title = route.meta[0]
    ? route.meta[0].pageTitle
      ? route.meta[0].pageTitle
      : "AOne Dasboard"
    : "AOne Dashboard";
  store.commit("app/SET_TITLE", title);
};
