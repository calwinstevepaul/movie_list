import React, { useEffect } from 'react'

function Home({ setTab }) {
    useEffect(() => {
        setTab("home")
    }, [])

    return (
        <div>
            <div className='mt-3'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/India_film_clapperboard_%28variant%29.svg/330px-India_film_clapperboard_%28variant%29.svg.png" width={"150px"} />
            </div>

            <div>
                <div className='mt-3'>
                    <b>
                        Tamil cinema
                    </b>
                </div>
                <div>
                    Tamil cinema, also known as Kollywood, is an Indian film industry of Tamil-language motion pictures. It is based in Chennai, Tamil Nadu,[2] in the Kodambakkam neighbourhood, the word being a portmanteau of Kodambakkam and Hollywood.[3][4][5] The first Tamil silent film, Keechaka Vadham, was made by R. Nataraja Mudaliar in 1918.[6] The first talking motion picture, Kalidas, was a multilingual film directed by H M Reddy and was released on 31 October 1931, less than seven months after India's first talking motion picture Alam Ara.[7] By the end of the 1930s, the legislature of the State of Madras passed the Entertainment Tax Act of 1939.
                    <br></br>
                    Tamil cinema later had a profound effect on other filmmaking industries of India, establishing Madras (now Chennai) as a secondary hub for Hindi cinema, other South Indian film industries, as well as Sri Lankan cinema.[8] Over the last quarter of the 20th century, Tamil films from India established a global presence through distribution to an increasing number of overseas theatres in Singapore, Sri Lanka, Malaysia, Japan, the Middle East, parts of Africa, Oceania, Europe, North America and other countries.[9][10] The industry also inspired independent filmmaking in Sri Lanka and Tamil diaspora populations in Malaysia, Singapore, and the Western Hemisphere.[11]
                </div>
            </div>
        </div>
    )
}

export default Home