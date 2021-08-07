import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, PrevButton, NextButton } from './NextPage.style';

const Next = ({ prev, next, setPage }) => {
    const [state, setState] = useState(1);
    const initial = useRef(true);

    const nextPage = () => {
        setState(state + 1);

    }

    const prevPage = () => {
        setState(state - 1);
    }

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        setPage(state);
        window.scrollTo(0, 0);
    }, [setPage, state]);


    return (
        <Wrapper>
            {(state > 1) ?
                <PrevButton onClick={prevPage}>
                    {prev}
                </PrevButton>
                : null
            }
            <NextButton onClick={nextPage}>
                {next}
            </NextButton>
        </Wrapper>
    );
};

Next.propTypes = {
    prev: PropTypes.string,
    next: PropTypes.string,
    callback: PropTypes.func
};

export default Next;