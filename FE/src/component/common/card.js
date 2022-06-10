import React from 'react'

function Card({ data, index, isBig = false, onClick = ()=>{}}) {
    return (
        <div key={index} className='card-common d-flex mb-3 align-items-center justify-content-around ' onClick={()=>onClick(data.extraDta)}>
            <div className='mr-6'>
                <img src={data.img_url} width={"150px"}  />
            </div>

            <div>
                {
                    data.list.map((ele, index) =>  <div key={index}>{ele.key} : {ele.value}</div> )
                }
            </div>
        </div>
    )
}

export default Card