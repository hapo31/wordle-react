import Word from "./Word";

type Props = {
  answer: string;
  question: string;
};

const Words = ({ answer, question }: Props) => {
  return (
    <div
      style={{
        width: "700px",
        display: "flex",
        gap: "10px",
      }}
    >
      {answer.split("").map((item, index) => (
        <Word
          key={`${item}-${index}`}
          index={index}
          question={question}
          content={item}
        />
      ))}
    </div>
  );
};

export default Words;
