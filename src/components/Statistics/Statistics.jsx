import React, { Component} from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

class Statistics extends Component {
 
//     countTotalFeedback();
//     countPositiveFeedbackPercentage();
//   static defaultProps = {};

static propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
    
    render() {
      const { good, neutral, bad, total, positivePercentage } = this.props;
      return (<ul>
          <li>Good: <span className={styles.dataStatistics}>{good}</span></li>
          <li>Neutral: <span className={styles.dataStatistics}>{neutral}</span></li>
          <li>Bad: <span className={styles.dataStatistics}>{bad}</span></li>
          <li>Total: <span className={styles.dataStatistics}>{total}</span></li>
           <li>Positive feedback: <span className={styles.dataStatistics}>{positivePercentage} %</span></li>
              </ul>)
  }
}

// const  Statistics = (good, neutral, bad, total, positivePercentage) => {
//     return (console.log('Statistics'));
// };
export default Statistics;