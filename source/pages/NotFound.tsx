import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Card, Header } from 'Atoms';
import { FullWidthContainer } from 'Components';
import { Page } from 'Pages/types';

const NotFound: FunctionComponent<Page> = ({
  className: parentClasses,
  pageName,
}) => {
  return (
    <FullWidthContainer
      id={pageName}
      className={classnames('pb-5', parentClasses)}
    >
      {({ ChildContainer }) => (
        <ChildContainer className="flex items-center justify-center h-full text-center">
          <Card className="w-5/6 md:w-3/5 lg:w-1/2">
            <Header title="{{@ cms.not-found.title @}}" />
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default NotFound;
