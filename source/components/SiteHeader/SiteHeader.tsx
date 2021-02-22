import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import mainNavItems from 'CONFIG/main-nav';

import { Header, Link, List, ListItem } from 'Atoms';

import { FullWidthContainer } from 'Components';

const SiteHeader: FunctionComponent<DivType> = ({
  className: parentClasses,
}) => {
  return (
    <FullWidthContainer
      className={classnames('relative bg-blue-800 shadow-2xl', parentClasses)}
    >
      {({ ChildContainer }) => (
        <ChildContainer>
          <header className="flex items-end justify-between mb-4 text-white h-100">
            <Header
              className="mb-2 text-scale-8 font-logo"
              headerLevel={1}
              title="{{@ cms.site.title @}}"
            />
            <nav className="flex flex-col items-end">
              <List
                className="flex leading-none font-nugo text-scale-4 pl-50 md:pl-100"
                isOrdered={false}
              >
                {mainNavItems.map((navItem, index) => {
                  return (
                    <ListItem
                      className={classnames({ 'ml-3': index > 0 }, 'px-1')}
                      key={index}
                    >
                      <NavLink to={navItem.href}>{navItem.text}</NavLink>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </header>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default SiteHeader;
