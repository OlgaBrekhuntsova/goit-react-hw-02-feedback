import React from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
// import classNames from 'classnames';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
         return (
        <ul className={styles.buttonList}>
            {options.map(({ label}) => (
                <li key={label} className={ styles.btnItem}>
                    <button type="button" className={styles.btn} data_content={label} onClick={onLeaveFeedback}>{label}</button>
        </li>))
            }
               </ul>);
    };
 FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
})).isRequired,
    };
export default FeedbackOptions;