const ErrorMessage = ({ message }) => {
    return (
        <div className="bg-red-900 border border-red-700 rounded p-3 sm:p-4 text-center mx-4 sm:mx-0">
            <p className="text-red-200 text-sm sm:text-base">
                {message || "An error occurred. Please try again."}
            </p>
        </div>
    );
};

export default ErrorMessage;