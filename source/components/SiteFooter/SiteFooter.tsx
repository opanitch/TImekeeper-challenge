import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import mainNavItems from 'CONFIG/main-nav';

import { List, ListItem } from 'Atoms';

import { FullWidthContainer } from 'Components';

const SiteFooter: FunctionComponent<DivType> = ({
  className: parentClasses,
}) => {
  return (
    <FullWidthContainer
      className={classnames('relative bg-blue-800 ', parentClasses)}
    >
      {({ ChildContainer }) => (
        <ChildContainer>
          <footer className="mt-3 text-white">
            <div className="flex items-start justify-between w-full">
              <nav className="pr-50 md:pr-100">
                <List
                  className="flex pt-2 leading-none font-nugo text-scale-2"
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
            </div>
            <div className="flex items-end justify-end w-full">
              <p className="py-2 text-scale-n1">
                {`{{@ cms.site.copyright @}}`}
              </p>
            </div>
          </footer>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default SiteFooter;
