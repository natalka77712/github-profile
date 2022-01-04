import React from 'react';
import './repository.scss';

type PropsType = {
    hrefName: string
    name: string
    description?: string | null
}
const Repository = ({hrefName, name, description}: PropsType) => {
    return <div className="repository">
        <a href={hrefName} target="_blank" rel="noreferrer" >{name}</a>
        <p>{description}</p>
    </div>
}
export default Repository
