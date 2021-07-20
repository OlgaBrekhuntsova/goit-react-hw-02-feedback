import React, { useState} from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
// import classNames from 'classnames';
  
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    /*Хук для динамического стиля кнопки: бєкграунд при ховере*/
        function  HookFunc({ label, bgC, bgCHover }) {
                const [bg, setBg] = useState(bgC)
        const styleB = { background: `${bg}`, };
        const handleHover = color => {
            setBg(color);
        };
        return (            
            <button type="button" className={styles.btn} style={styleB} onMouseEnter={() => handleHover(bgCHover)}
            onMouseLeave={() => handleHover(bgC)} data_content={label} onClick={onLeaveFeedback}>{label}</button>  
        )            
};
               return (
                   <ul className={styles.buttonList}>
                                 
                       {(options.map(({ label, bgC, bgCHover }) => <li key={label} className={styles.btnItem}>   {HookFunc({ label, bgC, bgCHover })}</li> ))}
                </ul >);
          
    
        };
 FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
})).isRequired,
    };
export default FeedbackOptions;