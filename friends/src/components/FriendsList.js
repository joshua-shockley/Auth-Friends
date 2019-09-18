import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';

const FriendsList = (props) => {

const [friends, setFriends] = useState([]);

useEffect(()=>{
axiosWithAuth()
.get('/friends')
.then(res => {
    setFriends(res.data);
})
.catch(err => console.log(err));
},[]);

const deleteFriend = id => {


    axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => {
            alert('nope');
        });
};

const addFriend = (newPerson) => {
        axiosWithAuth()
    .post('/friends', newPerson )
    .then(res => {
        console.log(res.data);
        setFriends(res.data);

    })
    .catch(err => {console.log(err);
    });

};



console.log(friends);
    return(
        <div>

            <div>
                <AddFriendForm  
                addFriend={addFriend}
                friends={friends}/>
                
                <h1 className="title">The List Of The Friendlies...!</h1>         

                <Friend 
                friends={friends}
                deleteFriend={deleteFriend}
                />
            </div>
        </div>
    );
};

export default FriendsList;