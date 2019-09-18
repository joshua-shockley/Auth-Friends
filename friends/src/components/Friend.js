import React from 'react';


 const Friend = (props) => {
console.log(props.friends)



    return(
        <div>
            {props.friends.map(list =>
                <div className="individual-friend">
                    <h3>{list.name}</h3>
                    <p>{list.age}</p>
                    <p>{list.email}</p>
                    <button onClick={() => props.deleteFriend(list.id) }>delete if bad person</button>
                </div>
                )}
        </div>
    );
}

export default Friend;