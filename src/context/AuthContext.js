import { Auth, DataStore } from 'aws-amplify';
import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../models';

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const sub = authUser?.attributes?.sub;
  const phone = authUser?.attributes?.phone_number

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
  }, []);


  useEffect(() => {
    DataStore.query(User, (user) => user.sub('eq', sub)).then((users) =>
      setDbUser(users[0])
    );
  }, [sub]);

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser, phone }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
