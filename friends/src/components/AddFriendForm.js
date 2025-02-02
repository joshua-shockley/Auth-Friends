import React, {useEffect, useState} from 'react';


export default function AddFriendForm(props){
console.log(props);


const [newPerson, setNewPerson] = useState({name:'', age:'', email: ''})

const handleChange = (e) => {
    setNewPerson({...newPerson, [e.target.name]: e.target.value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    props.addFriend(newPerson);
    setNewPerson({name: '', age:'', email: ''});
};

    return(
        <form onSubmit={handleSubmit}>
            <fieldset className="friend-form">
             <h1>Did You Make A New Friend?..</h1>
            <h3>Add Them Friendlies Here.</h3>

                <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Freindlies Name"
                value={newPerson.name}
                onChange={handleChange}
                />

                <input
                className="input-field"
                type="text"
                name="age"
                placeholder="Age"
                value={newPerson.age}
                onChange={handleChange}
                />
                <input
                className="input-field"
                type="text"
                name="email"
                placeholder="Email"
                value={newPerson.email}
                onChange={handleChange}
                />
                <button className="submit-btn" >Submit New Friendly</button>
            </fieldset>
        </form>
    );    
}
