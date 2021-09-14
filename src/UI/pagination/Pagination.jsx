import IteratingPages from 'hooks/iteratingPages';
import React from 'react';
import ButtonDefault from 'UI/button/ButtonDefault';

const Pagination = ({currentPage, setCurrentPage, totalPages}) => {
    const totalPagesArray = IteratingPages(totalPages)
    return (
        <div className="button-wrapper">
            {
                totalPagesArray.map((p, index) => 
                <ButtonDefault key={index} onClick={(() => setCurrentPage(p))}  className={currentPage === p ? 'currentPage' : 'buttonDefault' }>{p}</ButtonDefault>
                )
            }
        </div>

    )
};

export default Pagination;