import React from 'react'
import styles from '../../style.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
const TableCadre = (props) => {
    return (
        <>
            <div className="mt-[70px] mb-[40px] flex justify-between">
                <h1 className='font-bold text-[33px] leading-[40px] relative -left-[20px]'>{props.listName} List</h1>
                <Link className={styles.btnPrimary + ' w-[300px]'} to={props.linkNew}>{props.link ? props.link : 'Add'} {props.addButton} <FontAwesomeIcon className='px-[20px]' icon={faRightLong} /></Link>
            </div>

            <table className='w-[1030px] border-separate border-spacing-y-[13px] text-left'>
                <thead className='text-[20px]'>
                    <tr>
                        {props.head}
                        <th>Edit</th>
                        <th>Delete</th>
                        {props.image ? <th>EditImage</th> : null}
                    </tr>
                </thead>
                <tbody className='text-white'>
                    {props.body}
                </tbody>
            </table>
        </>
    )
}

export default TableCadre