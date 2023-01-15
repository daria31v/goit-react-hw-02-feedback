import { FeedbackOptionsVariants, FeedbackBtn } from './FeedbackOptions.styled'

// onLeaveFeedback = () => {
//   this.setState(prevState => ({
//             value: prevState.value + 1,
//         }));
//   }


export const FeedbackOptions = () => (
    <FeedbackOptionsVariants>
        <FeedbackBtn onClick={evt => { console.log("Good!", evt) }}>Good</FeedbackBtn>
        <FeedbackBtn onClick={evt => { console.log("Neutral", evt) }}>Neutral</FeedbackBtn>
        <FeedbackBtn onClick={evt => { console.log("Bad", evt) }}>Bad</FeedbackBtn>
    </FeedbackOptionsVariants>
);