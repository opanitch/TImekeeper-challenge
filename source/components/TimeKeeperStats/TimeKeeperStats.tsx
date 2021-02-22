import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import { TimekeeperState } from 'API/data/timekeeper/types';

import getTimekeeperStatsView from './view-state';

const TimeKeeperStats: FunctionComponent<DivType> = ({
  className: parentClasses,
}) => {
  const viewState = useSelector(getTimekeeperStatsView);
  const viewStateProps = Object.keys(viewState);

  return (
    <div className={classnames('flex flex-col', parentClasses)}>
      {viewStateProps.map((timerProp, index) => (
        <div
          className={classnames('flex justify-between px-2 py-1', {
            ['bg-grey-6']: index % 2 === 0,
          })}
          key={index}
        >
          <p>{timerProp}</p>
          <p>
            {viewState[timerProp as keyof TimekeeperState]}
            {timerProp === 'duration' ? ' min' : ''}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TimeKeeperStats;
