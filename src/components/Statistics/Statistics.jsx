import {Option} from './Statistics.styled'

export const Statistics = ({good, neutral, bad, total}) => (
    <div>
        <Option>Good: {good}</Option>
        <Option>Neutral: {neutral} </Option>
        <Option>Bad: {bad} </Option>
        <Option>Total: {total} </Option>
        <Option>Bad: </Option>
    </div>
)