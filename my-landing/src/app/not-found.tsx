export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md">
            The page you're looking for doesn't exist. If you just published your project it may take a few seconds.
        </p>
      </div>
    </div>
  );
} 