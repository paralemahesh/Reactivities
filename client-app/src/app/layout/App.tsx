import React, { useState, useEffect, Fragment, SyntheticEvent, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore'

const App = () => {
  const activityStore = useContext(ActivityStore);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sumbitting, setSubmitting] = useState(false);
  const [target, setTarget] = useState('');

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  const handleCreateActivity = (activity: IActivity) => {
    setSubmitting(true);
    agent.Activities.create(activity)
    .then(() => {
      setActivities([...activities, activity]);
      setSelectedActivity(activity);
      setEditMode(false);
    })
    .then(() => setSubmitting(false));
  }

  const handleEditActivity = (activity: IActivity) => {
    setSubmitting(true);
    agent.Activities.update(activity)
    .then(() => {
      setActivities([...activities.filter(a => a.id !== activity.id), activity])
      setSelectedActivity(activity);
      setEditMode(false);
    })
    .then(() => setSubmitting(false));
  }

  const handleDeleteActivity = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setSubmitting(true);
    setTarget(e.currentTarget.name);
    agent.Activities.delete(id)
    .then(() => {
      setActivities([...activities.filter(a => a.id !== id)])
    })
    .then(() => setSubmitting(false));
  }

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0]);
    setEditMode(false);
  };

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if(activityStore.loadingInitial){
    return <LoadingComponent content="Loading activities..."> </LoadingComponent>
  }
  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activityStore.activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={sumbitting}
          target={target}
        />
      </Container>
    </Fragment>
  );
};

export default observer(App);
