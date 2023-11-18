import Image from 'next/image'
import CountButton from "./CountButton.jsx"
import CountButtonTwo from "./CountButtonTwo.jsx"
import SearchBar from "./SearchBar.jsx"

export default function Home() {
  return (
    <main>
      <CountButton></CountButton>
      <CountButtonTwo></CountButtonTwo>
      
      <a href="https://github.com/SethUllman/NextJS">My Github Repo</a>
      
      <p>Search Bar</p>
      <SearchBar></SearchBar>
    </main>
  )
}
