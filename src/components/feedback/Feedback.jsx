// import React, { Component } from 'react';
// // import { Button, ButtonContainer } from './Feedback.styled';
// import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
// import { Title } from './Title/Title';
// import { Statistics } from './Statistics/Statistics';

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClickGood = () => {
//     this.setState(prevStateGood => {
//       return {
//         good: prevStateGood.good + 1,
//       };
//     });
//   };
//   handleClickNeutral = () => {
//     this.setState(prevStateNeutral => {
//       return {
//         neutral: prevStateNeutral.neutral + 1,
//       };
//     });
//   };
//   handleClickBad = () => {
//     this.setState(prevStateBad => {
//       return {
//         bad: prevStateBad.bad + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const result = good + neutral + bad;
//     return result;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     if (good === 0) {
//       return 0;
//     }
//     const result = this.countTotalFeedback();
//     const positiveFeedback = (good * 100) / result;
//     return Math.round(positiveFeedback);
//   };

//   render() {
//     return (
//       <div>
//         <Title message="Please leave feedback" />

//         <FeedbackButtons
//           onHandleClickGood={this.handleClickGood}
//           onHandleClickNeutral={this.handleClickNeutral}
//           onHandleClickBad={this.handleClickBad}
//         />
//         <Statistics
//           onGood={this.state.good}
//           onNeutral={this.state.neutral}
//           onBad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positive={this.countPositiveFeedbackPercentage()}
//         />
//       </div>
//     );
//   }
// }
