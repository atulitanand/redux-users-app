import React from 'react'

function UserCard({ user }) {
    return (
        <> {!user ? <></> :
            <div>
                {console.log(user)}
                <div className="name-id">
                    <span className="id"
                        style={{
                            color: '#F29E4C',
                            fontSize: '3rem',
                            borderRadius: '50%',
                            padding: '1.1rem',
                        }}
                    >{user.id}.</span>
                    <span className="name"
                        style={{
                            marginLeft: '1rem'
                        }}
                    ><strong>{user.name}</strong></span>
                </div>
                <div className="username-email">
                    <span className="username">{user.username}</span>
                    <span className="email">{user.email}</span>
                </div>
                <div className="address">
                    <p><span>{user.address.street}</span><span>, {user.address.suite}</span></p>
                    <p><span>{user.address.city}</span><span>, {user.address.zipcode}</span></p>
                </div>
                <div className="phone"><span>{user.phone}</span></div>
                <div className="website"><span>{user.website}</span></div>
                <div className="little-card">
                    <h3>Company Details: </h3>
                    <p>{user.company.name}</p>
                    <p><em>{user.company.catchPhrase}</em></p>
                    <p>BS: <u>{user.company.bs}</u></p>
                </div>
            </div>
        }
        </>
    );
}

export default UserCard;