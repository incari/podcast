import { useQuery } from "@tanstack/react-query";
import { Root } from "./api.types";

const getPodcastList: () => Promise<Root> = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );

  return response.json();
};

const getPodcast = async (podcastId: string) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${podcastId}`
  );
  return response.json();
};

const useGetPodcastList = () => {
  return useQuery({
    queryKey: ["podcasts"],
    queryFn: getPodcastList
  });
};

const useGetPodcast = (podcastId: string) => {
  return useQuery({
    queryKey: ["podcast", podcastId],
    queryFn: () => getPodcast(podcastId)
  });
};

export { useGetPodcastList, useGetPodcast };
