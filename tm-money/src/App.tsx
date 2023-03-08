import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";
export function App() {

  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setNewTransactionModalOpen(false);
  }

  Modal.setAppElement('#root');

  return (
    <div>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionModal isOpen={newTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle />
    </div>
  );
}