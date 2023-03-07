import {Container} from './styles'
import incomeImg from '../../assets/arrowUp.svg'
import outcomeImg from '../../assets/arrowDown.svg'
import totalImg from '../../assets/dolar.svg'

type SummaryCardProps = {
    type: 'income' | 'outcome' | 'total';
    amount: string;
}

export function SummaryCard(props: SummaryCardProps) {
    const defInfo = () => {
        if(props.type === 'income'){
            return {"title": "Entradas", "icon": incomeImg}
        }
        else if(props.type === 'outcome'){
            return {"title": "Saídas", "icon": outcomeImg}
        }
        else{
            return {"title": "Total", "icon": totalImg}
        }
    }
        
    return(
        <Container className='total'>
                <header>
                    <p>{defInfo()["title"]}</p>
                    <img src={defInfo()["icon"]} alt="Entradas"/>
                </header>
                <h3>{props.amount}</h3>
        </Container>
    )
}