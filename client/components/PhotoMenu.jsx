import React from 'react';
import MenuRows from './MenuRows.jsx';

const PhotoMenu = props => {
  const { photos, onClick, currIdx, menuFirstIdx } = props;
  const menuLastIdx = menuFirstIdx + 20;
  return photos === undefined
    ? <MenuRows photos={ [] } /> // if page is still loading, return blanks
    : (
      <MenuRows
        photos={ photos.slice(menuFirstIdx, menuLastIdx) }
        onClick={onClick}
        currIdx={currIdx}
      />
    );
};

export default PhotoMenu;
