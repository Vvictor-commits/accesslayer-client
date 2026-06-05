import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

function App() {
	return (
		<>
			<Toaster
				toastOptions={{
					ariaProps: {
						role: 'status',
						'aria-live': 'polite',
					},
				}}
			/>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
