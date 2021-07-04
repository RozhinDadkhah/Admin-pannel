import React from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Productrows } from '../../../data';
import { useState } from 'react';


export default function ProductList() {

    const [data, setData] = useState(Productrows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.img} alt='' />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 130 },
        {
            field: 'status',
            headerName: 'Atatus',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row.id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>

                )
            }
        }
    ];


    return (
        <div className='productList'>
            <DataGrid rows={data} columns={columns} pageSize={3} checkboxSelection />
        </div>
    )
}
