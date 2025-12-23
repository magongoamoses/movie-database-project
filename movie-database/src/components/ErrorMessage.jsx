const ErrorMessage = ({ message }) => {
    return (
        <div className="bg-red-900 border border-red-700 rounded p-4 text-center">
            <p className="text-red-200">
                {message || "An error occurred. Please try again."}
            </p>
        </div>
    );
};

export default ErrorMessage;