type Props = {
  src: string;
  title: string;
  author: string;
  description: string;
};
const LeftPanel = ({ src, title, author, description }: Props) => {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "rgba(256,256,256,0.1)",
        padding: "10px",
        textAlign: "left",
        borderRadius: "8px"
      }}
    >
      <div
        style={{
          backgroundImage: `url(${src})`,
          width: "80%",
          aspectRatio: "1/1",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          margin: "auto"
        }}
      />
      <div
        style={{
          borderTop: "1px solid gray",
          margin: "20px 0"
        }}
      ></div>

      <h4>{title}</h4>
      <p>by {author}</p>
      <div
        style={{
          borderTop: "1px solid gray",
          margin: "20px 0"
        }}
      ></div>
      <div>
        <h4>Description:</h4>

        <p
          style={{
            width: "300px",
            height: "100px",
            lineHeight: "20px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            MozBoxOrient: "vertical",
            boxOrient: "vertical",
            WebkitLineClamp: "5",
            lineClamp: 5,
            overflow: "hidden"
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export { LeftPanel };
