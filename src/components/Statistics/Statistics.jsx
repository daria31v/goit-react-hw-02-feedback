import {Option} from './Statistics.styled'

// onLeaveFeedback = () => {
//   this.setState(prevState => ({
//             value: prevState.value + 1,
//         }));
//   }


export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <Option>Good: {good}</Option>
        <Option>Neutral: {neutral} </Option>
        <Option>Bad: {bad} </Option>
        <Option>Total: {total} </Option>
        <Option>Positive feedback: {positivePercentage} </Option>
    </div>
)