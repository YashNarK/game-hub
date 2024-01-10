import useGames from "../../hooks/useGames";

const GameGrid = () => {
  const { games, isLoading, httpErrors, setGames, setHttpErrors } = useGames();
  console.log(games);
  return <div>GameGrid</div>;
};

export default GameGrid;
