interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
      <div className="flex">
        <div>
          <p className="text-red-700">
            {message || 'Something went wrong. Please try again later.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
