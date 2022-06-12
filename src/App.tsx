import { VscGithubInverted } from "react-icons/vsc";
import { Content } from "./components/Content";


export function App() {
  return (
    <>
      <Content />
      
      <a target="_blank" href="https://github.com/GustavoTxFreitas">
        <VscGithubInverted size={20} />
        <span>GitHub</span>
      </a>
    </>
  )
}
