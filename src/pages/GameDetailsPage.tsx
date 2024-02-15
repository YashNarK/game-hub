import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
    const {gamesId} = useParams()
  return <div>GameDetailsPage: {gamesId}</div>;
};

export default GameDetailsPage;
