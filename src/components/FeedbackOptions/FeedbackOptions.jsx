import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
import classNames from 'classnames';
class FeedbackOptions extends Component {
    // state:
    //     options, onLeaveFeedback;
    
    // static defaultProps = {};

    static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
};
    onLeaveFeedback = ()=>{ console.log('clicked')};
    render() {
        const { onLeaveFeedback, options } = this.props;
        return (
            <div>
                <button type="button" className={classNames(styles.btn, styles.btnGood)} onClick={() => { this.onLeaveFeedback() }}>Good</button>
                <button type="button" className={classNames(styles.btn, styles.btnNeutral)}>Neutral</button>
                <button type="button" className={classNames(styles.btn, styles.btnBad)}>Bad</button>
            </div>);
    };
 };
export default FeedbackOptions;