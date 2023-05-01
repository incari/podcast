import { useGetPodcastList } from "../api/api";
import { Section } from "../components/Section";

const Home = () => {
  const { data, isLoading } = useGetPodcastList();

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  console.log(data?.feed.entry.length);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )"
        }}
      >
        {data &&
          data?.feed?.entry?.map((entry) => {
            const id = entry.id.attributes["im:id"];
            const title = entry["im:name"].label;
            const src = entry["im:image"][0].label;
            const author = entry["im:artist"].label;
            return (
              <Section
                key={id}
                id={id}
                title={title}
                src={src}
                author={author}
              />
            );
          })}
      </div>
    </div>
  );
};

export { Home };
