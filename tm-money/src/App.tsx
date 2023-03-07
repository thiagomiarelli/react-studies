import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";
export function App() {

  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setNewTransactionModalOpen(false);
  }
  
  return (
    <div>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionModal isOpen={newTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle />
    </div>
  );
}