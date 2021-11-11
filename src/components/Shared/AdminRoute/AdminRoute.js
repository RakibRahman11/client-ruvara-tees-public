import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';
import initFirebase from '../../Firebase/firebase.init';

initFirebase()

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin} = useFirebase()
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;