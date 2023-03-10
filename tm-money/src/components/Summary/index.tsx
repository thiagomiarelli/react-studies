import { Container } from "./styles";
import { SummaryCard } from "../SummaryCard";
import { useTransactions } from "../../hooks/useContext";

export function Summary(){
    const {transactions} = useTransactions();
    
    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })


    return(
       <Container>
            <SummaryCard amount={
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposits)
            } type="income"/>
            <SummaryCard amount={
                 new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)
            } type="outcome"/>
            <SummaryCard amount={
                 new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)
            } type="total"/>
        </Container>
    )
} 