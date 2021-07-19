import React, { Component} from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

class Statistics extends Component {
     static defaultProps = {
    total:0,
    positivePercentage:"No data",
};

static propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
    total: PropTypes.number,
  positivePercentage: PropTypes.string,
  
};
    
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        
      return (<ul>
          <li>Good: <span className={styles.dataStatistics}>{good}</span></li>
          <li>Neutral: <span className={styles.dataStatistics}>{neutral}</span></li>
          <li>Bad: <span className={styles.dataStatistics}>{bad}</span></li>
          <li>Total: <span className={styles.dataStatistics}>{total}</span></li>
           <li>Positive feedback: <span className={styles.dataStatistics}>{positivePercentage}%</span></li>
              </ul>) 
  }
};
export default Statistics;