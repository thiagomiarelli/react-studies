import styled from "styled-components";


type RadioBoxProps = {
    isActive: boolean;
    activeColor: "green" | "red";
};

export const Container = styled.form`
    h2 {
        color: var(--title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: var(--background-dark);
        font-weight: 400;
        font-size: 1rem;

        &:focus {
        outline: none;
        border-color: var(--green);
        box-shadow: 0 0 0.5rem 0 var(--green);
        }

        &::placeholder {
        color: var(--placeholder);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s, box-shadow 0.2s;

        &:hover {
            filter: brightness(0.9);
            box-shadow: 0 0 0.5rem 0 var(--green);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
        height: 3rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        color: ${(props) => props.isActive ? `var(--white)` : `var(--text)`};
        background: ${(props) => props.isActive ? `var(--${props.activeColor})` : `var(--background-dark)`};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        transition: border-color 0.2s;

        &:hover {
            border-color: var(--green);
        }

        svg {
            color: ${(props) => props.isActive ? `var(--white)` : `var(--${props.activeColor})`};
        }
`;
