const Statistics = ({ good, neutral, bad}) => {
const total = good + neutral + bad

return (
<div>
<h2>Statistics</h2>
<span>
good {good} <br/>
neutral {neutral} <br/>
bad {bad} <br/>
All {total} <br/>
Average {total/3} <br/>
Positive {(good/total \* 100) || 0}%
</span>
</div>
)
}
export default Statistics
