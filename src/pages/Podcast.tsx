import { useParams } from "react-router-dom";
import { Root } from "../api/api.types";
import { LeftPanel } from "../components/LeftPanel";
import { useGetPodcast } from "../api/api";

export const Podcast = ({ data }: { data: Root | undefined }) => {
  const { id: podcastId = "" } = useParams();
  const { data: podcastInfo } = useGetPodcast(podcastId);

  console.log(podcastId, podcastInfo);

  const podcastData = data?.feed.entry.find(
    (entry) => entry.id.attributes["im:id"] === podcastId
  );

  const title = podcastData?.["im:name"].label || "";
  const src = podcastData?.["im:image"][0].label || "";
  const author = podcastData?.["im:artist"].label || "";
  const description = podcastData?.summary.label || "";

  console.log(podcastData);
  return (
    <div>
      <LeftPanel
        title={title}
        src={src}
        author={author}
        description={description}
      />
      Podcast
    </div>
  );
};
