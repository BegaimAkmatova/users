import { useState, useEffect, Fragment } from 'react';
import Users from '../components/Users';
import classes from './UserFinder.module.css'

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julia' },
];

const UserFinder = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredUsers(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
        );
    },[searchTerm]);

    const searchChangeHandler = (e) => {
        setSearchTerm(e.target.value)
    };

    return(
        <Fragment>
            <div className={classes.filter}>
                <input type='search' onChange={searchChangeHandler}/>
            </div>
            <Users users={filteredUsers}/>
        </Fragment>
    );
};
export default UserFinder;