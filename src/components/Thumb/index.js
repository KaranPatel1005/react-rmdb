import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Styled
import { Wrapper, Image, ImageMovie } from './Thumb.style';

const Thumb = ({ image, movieId, clickable, title }) => (
    <Wrapper>
        {clickable
            ? (
                <div className='thumb-height'>
                    <Link to={`/${movieId}`}>
                        <Image src={image} title={title} alt={`${title}-thumb`} />
                    </Link>
                </div>
            )
            : (
                <ImageMovie src={image} title={title} alt={`${title}-thumb`} />
            )
        }

    </Wrapper>
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
    title: PropTypes.string
};

export default Thumb;