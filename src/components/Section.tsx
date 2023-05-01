import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  author: string;
  src: string;
};
export const Section = ({ id, title, author, src }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div
        style={{
          backgroundImage: `url(${src})`,
          height: "100px",
          borderRadius: "50px",
          aspectRatio: "1/1",
          margin: "auto",
          position: "relative",
          zIndex: 1
        }}
      />
      <div
        style={{
          backgroundColor: "rgba(256,256,256,0.1)",
          padding: "10px",
          paddingTop: "60px",
          top: "-50px",
          position: "relative",
          zIndex: 0,
          borderRadius: "8px"
        }}
      >
        <h4> {title} </h4>
        <p>Author: {author}</p>
      </div>
    </div>
  );
};
