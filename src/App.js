import './App.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export function App() {
  const [searched, setSearchedQuery] = useState([]);

  const handleAddSearch = search => {
    const localStorageListRaw = localStorage.getItem("searchQuery") || "[]";
    const localStorageList = JSON.parse(localStorageListRaw);

    if (!localStorageList.map(entry => entry.id).includes(search.id)) {
      localStorageList.push(search);
      setSearchedQuery([...localStorageList]);
      localStorage.setItem("searchQuery", JSON.stringify(localStorageList));
    } else {
      const filteredList = localStorageList.filter(entry => entry.id !== search.id);
      localStorage.setItem("searchQuery", JSON.stringify(filteredList));
      setSearchedQuery([...filteredList]);
    }
  }

  useEffect(() => {
    const localStorageListRaw = localStorage.getItem("searchQuery");
    localStorageListRaw && setSearchedQuery(JSON.parse(localStorageListRaw));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" 
        element={<HomePage searched={searched} handleAdd={handleAddSearch}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


