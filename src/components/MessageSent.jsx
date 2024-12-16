import { useNavigate } from "react-router-dom";

const MessageSent = () => {
  const navigate = useNavigate();

  const gobackHome = () => {
    navigate("/");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">Message Sent</h2>
        <p className="text-sm text-gray-600 mb-4">
          Your message has been sent successfully!
        </p>
        <button
          onClick={gobackHome}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageSent;
