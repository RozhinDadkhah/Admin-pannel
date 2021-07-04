import React from 'react'
import './UserList.css'
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Userrows } from '../../../data';
import { useState } from 'react';

export default function UserList() {

    const [data, setData] = useState(Userrows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='useListUser'>
                        <img className='userListImg' src={params.row.avatar} alt='' />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'status',
            headerName: 'Atatus',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='userListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>

                )
            }
        }
    ];


    return (

        <div className='userlist' >
            <DataGrid rows={data} columns={columns} pageSize={3} checkboxSelection />
        </div>
    )
}
