const ErrorMessage = ({ message }) => {
    return (
        <div>
            <p>{message || "An error occurred. Please try again."}</p>
        </div>
    );
};

export default ErrorMessage;