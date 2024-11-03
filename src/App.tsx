import './App.css'
import Header from './components/Header'
import GoalList from './components/GoalList';

function App() {
  return (
    <>
      <Header />
      <main>
        <p>My name is Noriyo Akita.</p>
        <p>
          I am a software engineer, and I love to learn new things. I am
          passionate about programming, and I am always looking for new
          challenges.
        </p>
        <GoalList />
      </main>
    </>
  );
}

export default App
