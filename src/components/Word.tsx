import "./word.css";

type Props = {
  content: string;
  index: number;
  question: string;
};

const Word = ({ content, index, question }: Props) => {
  const hintType = calcWordHint(content, index, question.split(""));

  const className = `word ${
    hintType === 1 ? "correct" : hintType === 0 ? "contain" : "incorrect"
  }`;

  return <div className={className}>{content}</div>;
};

export default Word;

function calcWordHint(answer: string, index: number, question: string[]) {
  if (question[index] === answer) {
    return 1; // 完全一致
  } else if (question.includes(answer)) {
    return 0; // 含まれてる
  } else {
    return -1; // 不一致
  }
}
