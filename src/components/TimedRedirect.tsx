import { useEffect, useState } from 'react';

const targetUrl = 'http://www.msftconnecttest.com/redirect';

export default function TimedRedirect() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = targetUrl;
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4">
      <div className="max-w-xl bg-slate-900/80 border border-slate-700 rounded-2xl p-8 text-center shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Redirecting...</h1>
        <p className="text-slate-300 mb-4">
          You will be redirected to <span className="font-semibold text-orange-300">{targetUrl}</span> in <span className="font-bold text-white">{countdown}</span> second{countdown !== 1 ? 's' : ''}.
        </p>
        <p className="text-sm text-slate-400">If the redirect does not happen automatically, <a href={targetUrl} className="text-orange-400 underline">click here</a>.</p>
      </div>
    </div>
  );
}
