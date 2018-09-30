import React from 'react';
import ButtonAppBar from './style-components/ButtonAppBarComponent';

export const Header = () => {
  const menuItems = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Full Roster',
      link: '/roster'
    }
  ];

  return <ButtonAppBar menuItems={menuItems} />;
};
