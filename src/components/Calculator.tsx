import React,{useState} from 'react'
import './stylings/calculator.css'

const Calculator = () => {

  const displayRes = document.getElementById("calc-op") as HTMLElement | null;
  const [calc, setCalc] = useState("");
  const [res, setRes] = useState("");
  const handleClick: any = (e: any): void => {
    setCalc(calc.concat(e.target.value));
  }
  const calculateResult: any = () => {
    let temp = eval(calc).toFixed(2)
    setRes(parseFloat(temp).toString())
    
    if (displayRes) {
      displayRes.style.boxShadow = "0px 0px 10px 10px white"
      displayRes.style.backgroundColor="#F5EDDC"
    }
  }
  const resetDisplay: any = () => {
    setCalc("")
    setRes("")
    if (displayRes) {
      displayRes.style.boxShadow = ""
      displayRes.style.backgroundColor=""
    }
  }
  const ops: string[] = ["0", "\=","C"];
  const populate = (a:number,b:number|string,c:string) => {
    const digits: any[] = [];
    for (let i: number = a; i < b; i++){
      const btnName:string = `btn${i} calc-btn`
      digits.push(<button onClick={handleClick} value={i} className={btnName }>{i}</button>)
    }
    if (a === 0) {
      for (let items of ops) {
        const buttonOp = `btn${items} calc-btn`
        if (items === "="){
          digits.push(<button onClick={calculateResult} value={items} className={buttonOp}>{items}</button>)
        }
        else if(items==="C") {
          digits.push(<button onClick={resetDisplay} value={items} className={buttonOp}>{items}</button>)
        }
        else {
           digits.push(<button onClick={handleClick} value={items} className={buttonOp}>{items}</button>)
        }
      }} 
  const buttonOp = `btn${c} calc-btn`
  digits.push(<button onClick={handleClick} value={c} className={buttonOp}>{c}</button>)
  return digits
  }
  console.log(res)
  return (
    <div id='calc-section'>
      <span className='display'>
        <p id='calc-op'>{res}</p>
        <p className='calc-res'>{calc}</p>
      </span>
      <div className='calc-display-wrapper'>
        <span className='calc-buttons'>{populate(1, 4,"+")}</span>
        <span className='calc-buttons'>{populate(4, 7,"/")}</span>
        <span className='calc-buttons'>{populate(7, 10, "*")}</span>
        <span className='calc-buttons'>{populate(0, "=","-")}</span>
      </div>
    </div>
    
  )
}

export default Calculator