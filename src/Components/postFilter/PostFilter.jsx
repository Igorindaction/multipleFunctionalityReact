import React from 'react';
import DefaultInput from 'UI/defaultInput/DefaultInput';
import SelectDefault from 'UI/select/SelectDefault';

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <DefaultInput 
                placeholder='Поиск...'
                value={filter.query}
                onChange={ e => setFilter({...filter, query: e.target.value})}
            />
            <SelectDefault
                value={filter.query}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultName='Сортировка'
                options={[
                    { value: 'title', name: 'По заголовку' },
                    { value: 'body', name: 'По тексту' }
                ]}
            />
            
        </div>
    );
};

export default PostFilter;