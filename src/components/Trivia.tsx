import React,{useState,useRef} from 'react'
import './stylings/trivia.css'
import axios, { AxiosResponse } from 'axios'

interface TriviaD{
  id: number;
  category: string;
  correctAnswer: string;
  incorrectAnswers:string [];
  question: string;
}
const Trivia:React.FC=()=> {
  const trivia_url = "https://the-trivia-api.com/api/questions?limit=1&difficulty=easy"
  const [triviaData, setTriviaData] = useState<TriviaD[]>()!;
  const [correct, setCorrect]: any[] = useState(0)!;
  const [wrong, setWrong]: any = useState(0)!;
  const [reRun, setReRun]: any = useState(true);
  const [userAnswer,setUserAnswer]: any = useState();
  const wrongCounter:any = useRef(0);
  const correctCounter:any = useRef(0);
  const getTrivia = () => {
    axios.get(trivia_url).then((response: AxiosResponse) => {
      setTriviaData(response.data)
      setReRun(() => true)
    })
  };
  let choice: any = [];
  let randomChoice: any = [];
  let correctAnswer:string=""
  const handleClick = (e: any) => {
    if (correctAnswer === e.target.value) {
      correctCounter.current = correctCounter.current + 1;
      setCorrect(correctCounter.current);
      setUserAnswer(e.target.value);
    } else {
      wrongCounter.current = wrongCounter.current + 1;
      setWrong(wrongCounter.current);
      setUserAnswer(e.target.value);
    }
    setReRun(()=>false);
  }
  const setAnswers = (items: any) => {
      choice = [
        items.correctAnswer,
        items.incorrectAnswers[0],
        items.incorrectAnswers[1],
        items.incorrectAnswers[2],
      ];
    correctAnswer = choice[0];
    randomChoice = choice.sort(() => Math.random() - 0.5).slice(0, 5);
    //console.log("asnswers are set", randomChoice, items)
    return (<span className='trivia-btn-span'>
      <button onClick={handleClick} value={randomChoice[0]} className='a trivia-btn'>{randomChoice[0]}</button>
      <button onClick={handleClick} value={randomChoice[1]} className='b trivia-btn'>{randomChoice[1]}</button>
      <button onClick={handleClick} value={randomChoice[2]} className='c trivia-btn'>{randomChoice[2]}</button>
      <button onClick={handleClick} value={randomChoice[3]} className='d trivia-btn'>{randomChoice[3]}</button>
    </span>);
  };
  return (
    <>
    <div className='score'>
        <span style={{color:"green"}} className='correct'>Correct:{correct}  </span>
        <span style={{color:"red"}} className='wrong'>Wrong:{wrong} </span>
      </div>
    <div className='trivia-wrapper'>
        {triviaData && triviaData.map((items: any) => 
          <>
            <b key={items.id}
            className='category'>Category is {items.category}
          </b><span className='question'>{items.question}</span><div className='trivia-multipleChoice'>
              {reRun && setAnswers(items)}
          {!reRun &&
              <p style={{ margin: "auto", fontSize: "1.5rem" }}> The Correct Answer is{" " + items.correctAnswer}
                <hr/>
                And you answered { userAnswer}</p>}
          </div>
          </>
        )}
  </div>
       <button className='get-trivia-btn' onClick={getTrivia}>Get Question</button>
  </>
  )
}

export default Trivia