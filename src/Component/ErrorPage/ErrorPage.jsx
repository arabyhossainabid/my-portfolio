import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4 animate-bounce">Oops!</h1>
        <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <div className="mt-8">
        <a
          href="/"
          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition duration-200"
        >
          Go Back Home
        </a>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-400">Please try again later.</p>
      </div>
    </div>
  );
}
