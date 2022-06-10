import React, { useEffect, useState } from 'react'
import { baseUrl, helper } from '../../service'
import Card from '../common/card'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { HANDLE_MOVIE } from '../../redux/action/actionTypes';
import ModalComp from '../common/model';


function Movie({ setTab }) {
    const dispatch = useDispatch()
    const { movie } = useSelector((ele) => ele)
    const [loading, setLoading] = useState(false);
    const [modelOpen, setModelOpen] = useState(false);
    const [modelData, setModelData] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                setLoading(true);

                let res = await helper.getApi(null, `${baseUrl}movie/`);
                if (res && res.data && res.data.length >= 0) {
                    dispatch({ type: HANDLE_MOVIE, payload: { movieData: res.data } });
                } else {
                    dispatch({ type: HANDLE_MOVIE, payload: { movieData: [] } });
                }

                setLoading(false);
            } catch (error) {

            }
        }

        setTab("movie")
        if (movie && movie.movieData && movie.movieData.length === 0) getMovie()
    }, [])

    const setCardData = (ele) => {
        let data = {
            img_url: ele.poster,
            list: [
                {
                    key: "Name",
                    value: ele.name
                },
                {
                    key: "Directed By",
                    value: ele.directedBy
                },
            ],
            extraDta: ele
        };

        return data;
    }

    const setCardAddedData = (ele) => {
        let data = {
            img_url: ele.poster,
            list: [
                {
                    key: "Name",
                    value: ele.name
                },
                {
                    key: "Directed By",
                    value: ele.directedBy
                },
                {
                    key: "Written By",
                    value: ele.writtenBy
                },
                {
                    key: "Produced By",
                    value: ele.producedBy
                },
                {
                    key: "Cinematography",
                    value: ele.cinematography
                },
                {
                    key: "Release Date",
                    value: ele.releaseDate
                },
                {
                    key: "language",
                    value: ele.language
                },
            ]
        };

        return data;
    }

    const clickHandler = (ele)=>{
        setModelData(ele)
        setModelOpen(true)
    }

    const handleClose = ()=>{setModelOpen(false); setModelData({})}


    return (
        <>
            {
                modelOpen && <ModalComp
                    modelState={modelOpen}
                    data={ setCardAddedData(modelData) }
                    handleClose = {handleClose}
                />
            }
            {
                loading ? <div>Loading...</div> : movie.movieData.map((ele, index) => <Card index={index} data={setCardData(ele)} onClick={clickHandler}/>)
            } 
        </>
    )
}

export default Movie