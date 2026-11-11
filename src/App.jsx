import './App.css'
import { Show, SignIn, UserButton } from '@clerk/react'

function App() {
  return (
    <>
      <header>
        <show when="signed-out">
          <SignIn />
        </show >
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App