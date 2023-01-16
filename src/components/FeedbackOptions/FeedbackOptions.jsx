import { FeedbackOptionsVariants, FeedbackBtn } from './FeedbackOptions.styled'

// 


export const FeedbackOptions = ({ options }, onLeaveFeedback) => {
    // const options = {good, neutral, bad}
    return (
        <FeedbackOptionsVariants>
            {options.map(option => {
                return (
                    <FeedbackBtn onClick={()=> onLeaveFeedback()}>{option}</FeedbackBtn>
                )
            })}
            
            {/* <FeedbackBtn onClick={leaveFeedback}>Neutral</FeedbackBtn>
            <FeedbackBtn onClick={leaveFeedback}>Bad</FeedbackBtn> */}
        </FeedbackOptionsVariants>
    )
    
};