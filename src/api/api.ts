import { useQuery } from "@tanstack/react-query";
import { Root } from "./api.types";

const getPodcastList: () => Promise<Root> = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );

  return response.json();
};

const useGetPodcastList = () => {
  return useQuery({
    queryKey: ["podcasts"],
    queryFn: getPodcastList
  });
};

export { getPodcastList, useGetPodcastList };
