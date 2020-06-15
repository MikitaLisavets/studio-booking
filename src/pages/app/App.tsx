import './App.scss';
import React, { Fragment } from 'react';
import AppRouter from '../../appRouter';
import ErrorPopup from '../../components/errorPopup/ErrorPopup';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getError } from '../../selectors/selectors';
import useAction from '../../hooks/useAction';
import { clearError } from '../../actions/Actions';

export default function App(): JSX.Element {
  const error = useShallowEqualSelector(getError);
  const handleCloseErrorPopup = useAction(clearError());


  return (
    <Fragment>
      <ErrorPopup error={error} onClose={handleCloseErrorPopup}/>
      <div className="container">
        <AppRouter/>
      </div>
    </Fragment>
  );
}