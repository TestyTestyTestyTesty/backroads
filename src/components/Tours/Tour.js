import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Tour = ({tour}) => {
    const {name,price,country,days,slug,images} = tour;
    console.log(images)
    return (
        <div>
            Single Tour
        </div>
    )
}

export default Tour
