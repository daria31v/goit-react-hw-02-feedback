import { FeedbackOptionsVariants, FeedbackBtn } from './FeedbackOptions.styled'

// onLeaveFeedback = () => {
//   this.setState(prevState => ({
//             value: prevState.value + 1,
//         }));
//   }


export const FeedbackOptions = () => (
    <FeedbackOptionsVariants>
        <FeedbackBtn onClick>Good</FeedbackBtn>
        <FeedbackBtn>Neutral</FeedbackBtn>
        <FeedbackBtn>Bad</FeedbackBtn>
    </FeedbackOptionsVariants>
);