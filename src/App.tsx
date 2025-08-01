import Header from './components/Header';
import AppRoutes from './routes/AppRoute';
import { useSelector } from 'react-redux';
import { type RootState } from './redux/store';

function App() {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <div className={`${theme} min-h-screen pt-20 transition-colors duration-300`}>
      <Header />
      <main className="p-4">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
