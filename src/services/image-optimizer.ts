const optimizeImage = (
  imageUrl: string,
  width: number = 600,
  height: number = 400
) => {
  return imageUrl.split("games").join(`crop/${width}/${height}/games`);
};

export default optimizeImage;
