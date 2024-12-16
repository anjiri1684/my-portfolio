import { useNavigate } from "react-router-dom";

const MessageFailed = () => {
  const navigate = useNavigate();
  const gobackHome = () => {
    navigate("/");
  };

  const retry = () => {
    navigate("/contact");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">Message Failed</h2>
        <p className="text-sm text-gray-600 mb-4">
          Something went wrong. Please try again.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={retry}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Retry
          </button>
          <button
            onClick={gobackHome}
            className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageFailed;
