import React from 'react';

const UserContext = React.createContext({
  searchFunc: () => {},
  results: {}
})

export default UserContext;