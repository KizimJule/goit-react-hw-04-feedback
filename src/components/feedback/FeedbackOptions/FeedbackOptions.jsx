import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer>
    {options.map((option, index) => (
      <Button key={index} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </ButtonContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// export const FeedbackOptions = ({
//   onHandleClickGood,
//   onHandleClickNeutral,
//   onHandleClickBad,
// }) => (
//   <ButtonContainer>
//     <Button type="button" onClick={onHandleClickGood}>
//       Good
//     </Button>
//     <Button type="button" onClick={onHandleClickNeutral}>
//       Neutral
//     </Button>
//     <Button type="button" onClick={onHandleClickBad}>
//       Bad
//     </Button>
//   </ButtonContainer>
// );
// FeedbackOptions.propTypes = {
//   onHandleClickGood: PropTypes.func.isRequired,
//   onHandleClickNeutral: PropTypes.func.isRequired,
//   onHandleClickBad: PropTypes.func.isRequired,
// };
