import { Container } from "./styles";

import { SummaryCard } from "../SummaryCard";

export function Summary(){
    return(
       <Container>
            <SummaryCard amount="R$1200,00" type="income"/>
            <SummaryCard amount="R$1200,00" type="outcome"/>
            <SummaryCard amount="R$0" type="total"/>
        </Container>
    )
} 