export default function Toast({ message, type = 'success' }) {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  
  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg animate-pulse z-50`}>
      <p className="font-semibold">{message}</p>
    </div>
  );
}
