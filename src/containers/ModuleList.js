import React from 'react'
import ModuleListItem from '../component/ModuleListItem';

export default class ModuleList
    extends React.Component {
    render() { return (
        <ul className="list-group">
            <ModuleListItem/>
            <ModuleListItem/>
        </ul>
    );
    }
}
