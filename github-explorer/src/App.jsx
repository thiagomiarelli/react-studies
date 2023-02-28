import RepositoryList from "./components/RepositoryList";
import Counter from "./components/Counter"

export function App() {
  const repositories = [
    {
      name: "unform",
      description: "Forms in React",
      link: "github.com/unform/unform",
    },
    {
      name: "unform2",
      description: "Forms in React",
      link: "github.com/unform/unform",
    },
  ];

  return (
    <div className="App">
      <RepositoryList repositories={repositories} />
      <Counter/>
    </div>
  );
}