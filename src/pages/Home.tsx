import { useGetPodcastList } from "../api/api";

const Home = () => {
  const { data, isLoading } = useGetPodcastList();

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <ul>
        {data &&
          data?.feed?.entry?.map(({ id, title }) => (
            <li key={id.label}>{title.label}</li>
          ))}
      </ul>
    </div>
  );
};

export { Home };
