//IMPORTS
import {
    Form,
    InputGroup,
    Input,
    InputGroupText,
    Button
} from 'reactstrap';
import { useState } from 'react';



const Inputs = (props) => {
    
    let nameInput = document.getElementById("nameInput");
    let ageInput = document.getElementById("ageInput");
    let hobbiesInput = document.getElementById("hobbiesInput");
    
    const [name, setName] = useState(" ");
    const [age, setAge] = useState(0);
    const [hobbies, setHobbies] = useState(" ");
  
    const changeName = (event) => {
        name !== " " ? setName(nameInput.value) : setName(" ")
    };
    
    const changeAge = () => {
         age !== 0 ? setName(ageInput.value) : setAge(" ")
  
     }
    
     const changeHobbies = () => {
        hobbies !== " " ? setName(hobbiesInput.value) : setHobbies(" ")
    }
    
    return (
        <div className="form">
            <h2>Let's get to know each other</h2>
            <br />
            <Form>
                <InputGroup> 
                    <Input id="nameInput" placeholder="name" name={name} >
                    </Input>
                </InputGroup>
                <br />
                <Button onClick="changeName()">submit
                </Button>
                <br />
                 <br />
                <InputGroup>
                    <Input id="ageInput" placeholder="age" age={age}>
                    </Input>
                </InputGroup>
                <br />
                 <Button onClick="changeAge()">submit
                </Button>
                <br />
                 <br />
                <InputGroup>
                    <Input id="hobbiesInput" placeholder="hobbies" hobbies={hobbies} >
                    </Input>
                </InputGroup>
                <br />
                <Button onClick="changeHobbies()">submit
                </Button>
                <br />
                
            </Form>
        </div>
)

}

export default Inputs;


