
type RepositoryItemProps = {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}
export default function RepositoryItem({repository}: RepositoryItemProps){
    
    return (
        <li>
            <a href= {repository.html_url}>
                <strong>{repository.name ?? 'Default'}</strong>
            </a>
        </li>
    )
}