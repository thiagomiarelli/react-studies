import RepositoryItem from "./RepositoryItem"

export default function RepositoryList({repositories} = props){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            {repositories.map(repository => <RepositoryItem repository={repository} key={repository.name}/>)}
        </section>
    )
}