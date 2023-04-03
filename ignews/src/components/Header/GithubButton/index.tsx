import { FaGithub } from 'react-icons/fa'

import styles from './styles.module.scss'

type GithubButtonProps = {
    isLogged: boolean;
}

export function GithubButton({ isLogged }: GithubButtonProps) {
    return isLogged ? (
        <button type="button" className={styles.githubButton}>
        <FaGithub color="#6817eb"/>
            Marcelo Pires
        </button>
    ) : (
        <button type="button" className={styles.githubButton}>
        <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    )
}