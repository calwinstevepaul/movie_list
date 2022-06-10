import React, { useEffect, useState,useHistory } from 'react'
import { baseUrl, helper } from '../../service'
import Card from '../common/card'
import moment from 'moment';

function Rockets({setTab}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getRockets = async () => {
            try {
                setLoading(true);

                let res = await helper.getApi(null, `${baseUrl}v3/rockets`);
                if (res && res.data && res.data.length >= 0) {
                    setData(res.data);
                } else {
                    setData([]);
                }
                
                setLoading(false);
            } catch (error) {

            }
        }

        setTab('rockets')
        getRockets()
    }, [])

    const setCardData = (ele) => {
        let data = {
            img_url: ele.flickr_images[0],
            list: [
                {
                    key: "Rocket Name",
                    value: ele.rocket_name
                },
                {
                    key: "Rocket id",
                    value: ele.rocket_id
                },
                {
                    key: "First Flight",
                    value: moment(ele.first_flight, "yyyy-mm-dd").format("MMM Do YY")
                },
                {
                    key: "Height",
                    value: `${ele.height.feet} feet`
                },
                {
                    key: "Diameter",
                    value: `${ele.diameter.feet} feet`
                },
                {
                    key: "Mass",
                    value: `${ele.mass.kg} kg`
                }
            ]
        };

        return data;
    }

    return (
        <>
            {
                loading ? <div>Loading...</div> : data.map((ele, index) => <Card index={index} data={setCardData(ele)} />)
            }
        </>
    )
}

export default Rockets