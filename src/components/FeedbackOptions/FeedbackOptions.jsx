import { FeedbackOptionsVariants, FeedbackBtn } from './FeedbackOptions.styled'

export const FeedbackOptions = () => (
    <FeedbackOptionsVariants>
        <FeedbackBtn >Good</FeedbackBtn>
        <FeedbackBtn >Neutral</FeedbackBtn>
        <FeedbackBtn >Bad</FeedbackBtn>
    </FeedbackOptionsVariants>
);