export default function RepositoryItem(props){
    return (
        <li>
            <a href= {props.repository.link}>
                <strong>{props.repository.name ?? 'Default'}</strong>
            </a>
        </li>
    )
}