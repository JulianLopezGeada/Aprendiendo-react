import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    name: "Miguel Angel Duran",
    userName: "midudev",
    isFollowing: true,
  },
  {
    name: "Pablo Hernandez",
    userName: "pheralb",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          isFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
