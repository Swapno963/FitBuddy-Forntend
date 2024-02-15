import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-md text-center">
          <h1 className="text-4xl text-red-500 font-bold mb-4">Oops!</h1>
          <p className="text-gray-700 mb-2">Sorry, an unexpected error has occurred.</p>
          <p className="text-gray-500 italic mb-4">{error.statusText || error.message}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </div>
  );
}