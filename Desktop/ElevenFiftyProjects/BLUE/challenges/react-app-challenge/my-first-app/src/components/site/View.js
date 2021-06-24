import { PropTypes } from 'prop-types';


const View = (props) =>
{
    return (
        <div className = "view">
            
            <h3>Name: {props.name}
            </h3>
            <br />
            
            <h3>
                Age: {props.age}
            </h3>
            
            <br />
            <h3>
                Hobbies: {props.hobbies}
            </h3>
            <br />
            
        </div>
        
);

};

export default View;
//child to recieve props and display them 

