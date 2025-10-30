import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');

  return (
    <div className="h-screen bg-blue-400 flex flex-col justify-center items-center">
      <h2 className="text-9xl text-green-50">404</h2>
      <p className="text-blue-950 mb-6">Page Not Found</p>
      <button
        className="bg-blue-950 text-white px-5 py-3 rounded-4xl cursor-pointer"
        onClick={goToHome}
      >
        Go to Home
      </button>
    </div>
  );
}

export default NotFound;
