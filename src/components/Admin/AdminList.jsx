import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import styles from '../../style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'

import TableCadre from './TableCadre';

const AdminList = (props) => {
  const [users , setUsers] = useState([]);
    useEffect(() =>{
        axios.get('/Users/GetAllAdmin')
        .then(response => {
            setUsers(response.data)
        })
        .catch(error =>{
            console.log(error);
        })
    })
    const deleteusers=(id)=>{
        axios.delete(`/Users/DeleteUser/${id}`)
        .then(response => {
            console.log(response);
            // window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
    }
    const makeAdmin=(idU, role)=>{
        axios.put(`/Users/ChangeRole?UserId=${idU}&Role=${role === 'admin' ? 'user' : 'admin'}`)
        .then(response => {
            console.log(response);
            // window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
    }
  return (
    
    <TableCadre 
        listName='Admins'
        link='List Users'
        linkNew='/users'
        head={
        <>
            <th className='p-[10px]'>Username</th>
            <th>Email</th>
            <th>Role</th>
        </>
        }
        image={false}
        body={
            <>
            {users.map(user => (
                <tr key={user.id} className='bg-secondary '>
                <td className='p-[20px]'>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><button className={`${styles.btnTable}`} onClick={(e) => makeAdmin(user.id , user.role)}>{user.role === 'admin' ? 'make User' : 'Make Admin'}</button></td>
                <td className='text-white text-[18px] pl-[10px]'><button onClick={(e) => deleteusers(user.id)}><FontAwesomeIcon icon={faCircleXmark} /></button></td>
                </tr>
            ))}
            </>
        }
    />
         
  )
}

export default AdminList