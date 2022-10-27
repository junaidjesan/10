import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import jsPDF from 'jspdf'


const DetailsCart = () => {
    const data = useLoaderData()
    const { author, details, enrolled, thumbnail_url, title } = data
    const { published_date, name } = author

    const generatPDF = () => {
        var doc = new jsPDF("p-8", "pt", "a2");
        doc.html(document.querySelector('#content'), {
            callback: function (pdf) {
                pdf.save(`${title}.pdf`)
            }
        })
    }


    return (
        <div>
            <div className="tooltip tooltip-bottom" data-tip="click for download free file">
                <button onClick={generatPDF} type="primary"><h1 className=' border-2 my-8 mx-auto hover:shadow-md px-4 w-80'>{title}</h1></button>
            </div>
            <div className='mx-30' id='content'>
                <div>
                    <img className='w-full h-80 shadow-md' src={thumbnail_url} alt="" />
                </div>
                <div className=''>
                    <div className='text-justify p-5'>
                        <h1 className='text-2xl text-pink-800 mx-auto'>{title}</h1>
                        {details}
                    </div>
                    <div className='p-5 flex justify-between'>
                        <div>
                            <h1>{published_date}</h1>
                            <div className='flex'>Total Enrolled- <h1>{enrolled}</h1></div>
                            <h1 className='flex gap-1'><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /></h1>
                        </div>
                        <div>
                            <Link to={`/enrolled/${data.id}`}><button className='btn btn-outline btn-primary'>Get premium access</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsCart;