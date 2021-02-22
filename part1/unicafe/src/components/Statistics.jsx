// const Statistics = ({ good, neutral, bad}) => {
//   const total = good + neutral + bad

const Statistics = ({text, execution}) => {



  return (
    <div>
      <h2>{text} {execution}</h2>
      {/* <span>
        good {good} <br/> 
        neutral {neutral} <br/> 
        bad {bad} <br/> 
        All {total} <br/> 
        Average {total/3} <br/>
        Positive {(good/total * 100) || 0}%
      </span> */}
    </div>
  )
}
export default Statistics