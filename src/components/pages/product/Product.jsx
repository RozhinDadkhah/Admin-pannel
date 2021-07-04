import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Chart from '../../../components/chart/Chart'
import { productData } from '../../../data'
import Publish from '@material-ui/icons/Publish'

export default function Product() {
    return (
        <div className='product'>
            <div className='productTitleContainer'>
                <h1 className="productTitle">product</h1>
                <Link to='/newProduct'>
                    <button className="productAddBtn">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey='Sales' title='Sales Performance' />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://www.apple.com/newsroom/images/product/ipad/standard/apple_new-ipad-air_new-design_09152020.jpg.news_app_ed.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Apple AirIpads</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales</span>
                            <span className="productInfoValue">563</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Ipad' />
                        <label>In stock</label>
                        <select name="inStock" id="idStock">
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="idActive">
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://cdn.vox-cdn.com/thumbor/FZ9eAkzFHihYJmvwQsh6nd8Vmn0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21883188/ipadair3.jpg" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id='file' style={{display:'none'}}/>
                        </div>
                        <button className="productBtn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
