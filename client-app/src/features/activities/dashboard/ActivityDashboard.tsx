import React from 'react'
import { IActivity } from '../../../app/models/activity';
import { ActivityList } from './ActivityList';

interface IProps {
    activities: IActivity[]
}

const ActivityDashboard : React.FC<IProps> = ({activities}) => {
    return (
        <ActivityList activities={activities}></ActivityList>
    );
}

export default ActivityDashboard;