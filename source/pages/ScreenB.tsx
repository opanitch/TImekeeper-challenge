import React, { FunctionComponent } from 'react';

import { SCREEN_B as SCREEN_B_FORM } from 'CONSTANTS/forms';

import { Card, Header } from 'Atoms';
import { FullWidthContainer, TimeKeeperStats } from 'Components';
import { Page } from 'Pages/types';

import TimeKeeperForm from 'Forms/TimeKeeper';

const ScreenB: FunctionComponent<Page> = ({
  className: parentClasses,
  pageName,
}) => (
  <FullWidthContainer id={pageName} className={parentClasses}>
    {({ ChildContainer }) => (
      <ChildContainer className="flex items-center justify-center h-full">
        <Card className="w-5/6 md:w-3/5 lg:w-1/2">
          <Header
            className="mb-2 text-center"
            headerLevel={2}
            title={`{{@ cms.screen_b.title @}}`}
          />
          <TimeKeeperForm
            description="{{@ cms.screen_b.form.description @}}"
            id={SCREEN_B_FORM}
            title="{{@ cms.screen_b.form.title @}}"
          />
          <TimeKeeperStats className="mt-3" />
        </Card>
      </ChildContainer>
    )}
  </FullWidthContainer>
);

export default ScreenB;
