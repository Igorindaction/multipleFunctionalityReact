import IteratingPages from 'hooks/iteratingPages';
import React from 'react';
import ButtonDefault from 'UI/button/ButtonDefault';

const Pagination = ({page, changePage, totalPages}) => {
    
    const totalPagesArray = IteratingPages(totalPages)
    console.log(`Общение количество страниц = ${totalPagesArray}`)
    return (
        <div className="button-wrapper">
            {
                totalPagesArray.map((p, index) => 
                <ButtonDefault key={index} onClick={(() => changePage(p))}  className={page === p ? 'currentPage' : 'buttonDefault' }>{p}</ButtonDefault>
                )
            }
        </div>

    )
};

export default Pagination;