import { useParams } from "react-router-dom";

export const Episode = () => {
  const { id: episodeId } = useParams();

  return <div>Episode {episodeId}</div>;
};
