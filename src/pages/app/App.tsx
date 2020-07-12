import './App.scss';
import React from 'react';
import AppRoutes, { history } from '../../appRoutes';
import ErrorPopup from '../../components/errorPopup/ErrorPopup';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getError } from '../../selectors/selectors';
import useAction from '../../hooks/useAction';
import { clearError } from '../../actions/Actions';
import Sidebar from '../../components/sidebar/Sidebar';
import { Router } from 'react-router-dom';

export default function App(): JSX.Element {
  const error = useShallowEqualSelector(getError);
  const handleCloseErrorPopup = useAction(clearError());

  return (
    <Router history={history}>
      <ErrorPopup error={error} onClose={handleCloseErrorPopup}/>
      <div className="container">
        <Sidebar/>
        <AppRoutes/>
      </div>
    </Router>
  );
}