import React from "react";
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
    return (
        <p className={ styles.notificationWarning}>{ message}</p>);
};
Notification.propTypes = {
    message: PropTypes.string,
};
Notification.defaultProps = {
    message: "Something went wrong. Try to give feedback",
};

export default Notification;