const getTitleByHyphen = (title) => {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
    .join("-");
};

export default getTitleByHyphen;
