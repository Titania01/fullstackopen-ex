// const Statistics = ({ good, neutral, bad}) => {
//   const total = good + neutral + bad

const Statistics = ({text, execution}) => {



  return (
    <tr>
      <td>{text} </td>
      <td>{execution}</td>
      {/* <span>
        good {good} <br/> 
        neutral {neutral} <br/> 
        bad {bad} <br/> 
        All {total} <br/> 
        Average {total/3} <br/>
        Positive {(good/total * 100) || 0}%
      </span> */}
    </tr>
  )
}
export default Statistics