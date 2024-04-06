import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import img1 from "../images/pic1.jpg"
import img2 from "../images/pic2.jpg"
import img3 from "../images/pic3.jpg"
import img4 from "../images/pic4.jpg"
const Dashboard = () => {
    return (
        <div className='dash'>
            <div className='dash1'>
                <div className='box'>
                    <div className='box2'>
                        <div>
                            <div className='text4'>Revenue</div>
                            <div className='text3'>
                                <FaIndianRupeeSign size={25} />
                                25,00,000
                            </div>
                        </div>
                        <div className='progress'>
                            <CircularProgressbar style={{ width: 10, height: 10 }} value={70} text={`+70%`} />
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='box2'>
                        <div>
                            <div className='text4'>Visits</div>
                            <div className='text3'>
                                {/* <FaIndianRupeeSign size={25} /> */}
                                2,359
                            </div>
                        </div>
                        <div className='progress'>
                            <CircularProgressbar style={{ width: 10, height: 10 }} value={70} text={`+70%`} />
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='box2'>
                        <div>
                            <div className='text4'>Results</div>
                            <div className='text3'>
                                {/* <FaIndianRupeeSign size={25} /> */}
                                6,789
                            </div>
                        </div>
                        <div className='progress'>
                            <CircularProgressbar style={{ width: 10, height: 10 }} value={70} text={`+70%`} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='text5'>Users</div>
                <div className='dash2'>
                    <div className='dashpart'>
                        <img className="img2" src={img1}></img>
                        <div className='text7'>Person1</div>
                        <div className='text6'>23 min ago</div>
                    </div>
                    <div className='dashpart'>
                        <img className="img2" src={img2}></img>
                        <div className='text7'>Person1</div>
                        <div className='text6'>23 min ago</div>
                    </div>
                    <div className='dashpart'>
                        <img className="img2" src={img3}></img>
                        <div className='text7'>Person1</div>
                        <div className='text6'>23 min ago</div>
                    </div>
                    <div className='dashpart'>
                        <img className="img2" src={img4}></img>
                        <div className='text7'>More</div>
                        
                    </div>
                </div>
            </div>
            <div>
                <div className='text5'>Orders</div>
                <div className='dash3'>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard