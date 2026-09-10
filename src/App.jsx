import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load technologies:', err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };
  const handleRemove = (id) => {
    const item = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (item) {
      toast.info(`${item.name} removed from your stack.`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

 
  const handleRemoveAll = () => {
    setStack([]);
    toast.info('All technologies removed from your stack.', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info('All technologies removed from your stack.', {
      position: 'top-right',
      autoClose: 2000,
    });
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-4">
              <span className="loading loading-spinner loading-lg text-pink-500"></span>
              <p className="text-gray-500 text-lg">Loading technologies...</p>
            </div>
          </div>
        ) : (
          <Technologies
            technologies={technologies}
            stack={stack}
            onAddToStack={handleAddToStack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        )}
      </main>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
