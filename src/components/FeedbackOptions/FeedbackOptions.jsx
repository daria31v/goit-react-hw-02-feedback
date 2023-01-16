import { FeedbackOptionsVariants, FeedbackBtn } from './FeedbackOptions.styled'

// 


export const FeedbackOptions = ({ options , onLeaveFeedback}) => {
   
    return (
        <FeedbackOptionsVariants>
            {options.map(option => {
                return (
                    <FeedbackBtn key={option} onClick={()=> onLeaveFeedback(option)}>{option}</FeedbackBtn>
                )
            })}
        </FeedbackOptionsVariants>

        



    )
    
};  