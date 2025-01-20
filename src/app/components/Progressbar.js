export default function ProgressBar({ progress }) {
  
    return (
        <div className="w-full relative">
            <div className="right-0 top-[-20px] text-xs absolute">
                {`${progress}`} %
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
                className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: `${progress}%` }}
            ></div>
            </div>
        </div>
      
    );
  }