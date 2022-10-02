import './StepsList.css'
import React from 'react';

function StepList(props) {
    // Create the list items using map
    const stepListItems = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each step
            <li key={index} className={ step.prepared ? 'prepared' : '' } >
                { step.name }
            </li>
        );
    });

    // return the HTML for the component
    // stepListItems will be rendered as li elements
    return (
        <ol>
            { stepListItems }
        </ol>
    );
}

export default StepList;