import React from 'react';
import DefaultInput from 'UI/defaultInput/DefaultInput';
import SelectDefault from 'UI/select/SelectDefault';
import s from './postFilter.module.css'

const PostFilter = ({filter, setFilter, limit, setLimit}) => {

    return (
        <div className={s.filterWrapper}>
            <DefaultInput 
                placeholder='Поиск постов...'
                value={filter.query}
                onChange={ e => setFilter({...filter, query: e.target.value})}
            />
            <div className={s.selectWrapper}>
                <SelectDefault
                    value={filter.query}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultName='Сортировка'
                    options={[
                        { value: 'title', name: 'По заголовку' },
                        { value: 'body', name: 'По тексту' },
                        { value: '', name: 'Сбросить' }
                    ]}
                />
                <div className={s.portionsWrapper}>
                    <p>Выберите количество подгружаемых постов:</p>
                    <SelectDefault value={limit} onChange={ value => setLimit(value)} defaultName='Количество постов на странице' options={[
                        {value: 5, name: '5'},
                        {value: 10, name: '10'},
                        {value: 25, name: '25'},
                        {value: -1, name: 'Загрузить все'}]
                    }/>
                </div>               
            </div>
        </div>
    );
};

export default PostFilter;