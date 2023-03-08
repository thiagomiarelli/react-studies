import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox} from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { api } from '../../services/api';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

type TransactionType = 'income' | 'outcome';

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    
    const [type, setType] = useState('income' as TransactionType);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');




    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            amount,
            category,
            type
        }

        api.post ('/transactions', data)
        onRequestClose();
    }

    return(
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type='button' onClick={onRequestClose} className="react-modal-close">
            <X size={24} color="white"/>
        </button>
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <input
              type="number"
              placeholder="Valor"
              value={amount}
              onChange={event => setAmount(+event.target.value)}/>
            <TransactionTypeContainer>
                <RadioBox
                  type="button"
                  onClick={() => setType("income")}
                  isActive={type === 'income'}
                  activeColor="green"
                  >
                    <ArrowCircleUp size={20}/>
                    Entrada
                </RadioBox>
                <RadioBox
                  type="button"
                  onClick={() => setType("outcome")}
                  isActive={type === 'outcome'}
                  activeColor="red"
                >
                    <ArrowCircleDown size={20}/>
                    Saída
                </RadioBox>
            </TransactionTypeContainer>
            <input
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )
   
}