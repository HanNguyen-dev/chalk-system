import { Routes, Route } from 'react-router-dom';
import Exam from './Exam/Exam';

function AppRouter() {
  return (
    <Routes>
      <Route path="/exam"  element={<Exam />}>
      </Route>
    </Routes>
  );
}

export default AppRouter;