import { useParams } from "react-router-dom";

export const Podcast = () => {
  const { podcastId } = useParams();

  return <div>Podcast {podcastId}</div>;
};
