import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--shape-tertiary);
    padding: 2rem 2rem;
    border-radius: 0.25rem;
    header {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    &.total {
        background-color: 'red';
    }

`;