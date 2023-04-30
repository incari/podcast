import { useParams } from "react-router-dom";

export const Episode = () => {
  const { episodeId } = useParams();

  return <div>Episode {episodeId}</div>;
};
