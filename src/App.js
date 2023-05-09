import logo from './logo.svg'
import './App.css'
import { useLocalStorage } from 'react-use'
import Post from './Post'

function App() {
  const [posts, setPosts] = useLocalStorage('post')

  const textFaker = () => {
    const longText = `
                Philosophy of Education is a label applied to the study of the purpose, process, nature and ideals of education. It can be considered a branch of both philosophy and education. Education can be defined as the teaching and learning of specific skills, and the imparting of knowledge, judgment and wisdom, and is something broader than the societal institution of education we often speak of.
                Many educationalists consider it a weak and woolly field, too far removed from the practical applications of the real world to be useful. But philosophers dating back to Plato and the Ancient Greeks have given the area much thought and emphasis, and there is little doubt that their work has helped shape the practice of education over the millennia.
                Plato is the earliest important educational thinker, and education is an essential element in "The Republic" (his most important work on philosophy and political theory, written around 360 B.C.). In it, he advocates some rather extreme methods: removing children from their mothers' care and raising them as wards of the state, and differentiating children suitable to the various castes, the highest receiving the most education, so that they could act as guardians of the city and care for the less able. He believed that education should be holistic, including facts, skills, physical discipline, music and art. Plato believed that talent and intelligence is not distributed genetically and thus is be found in children born to all classes, although his proposed system of selective public education for an educated minority of the population does not really follow a democratic model.
                Aristotle considered human nature, habit and reason to be equally important forces to be cultivated in education, the ultimate aim of which should be to produce good and virtuous citizens. He proposed that teachers lead their students systematically, and that repetition be used as a key tool to develop good habits, unlike Socrates' emphasis on questioning his listeners to bring out their own ideas. He emphasized the balancing of the theoretical and practical aspects of subjects taught, among which he explicitly mentions reading, writing, mathematics, music, physical education, literature, history, and a wide range of sciences, as well as play, which he also considered important.
                During the Medieval period, the idea of Perennialism was first formulated by St. Thomas Aquinas in his work "De Magistro". Perennialism holds that one should teach those things deemed to be of everlasting importance to all people everywhere, namely principles and reasoning, not just facts (which are apt to change over time), and that one should teach first about people, not machines or techniques. It was originally religious in nature, and it was only much later that a theory of secular perennialism developed.
                During the Renaissance, the French skeptic Michel de Montaigne (1533 - 1592) was one of the first to critically look at education. Unusually for his time, Montaigne was willing to question the conventional wisdom of the period, calling into question the whole edifice of the educational system, and the implicit assumption that university-educated philosophers were necessarily wiser than uneducated farm workers, for example`

    return (
      longText.substring(12, Math.floor(1500 * Math.random())) ||
      'not a great try !! '
    )
  }

  const httpReq = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          postId: Math.floor(Math.random() * 15000),
          postText: textFaker(),
          time: Date.now(),
        })
      }, 700)
    })
  }

  const addPostHandler = () => {
    let prev = Array.isArray(posts) ? posts : []

    setPosts([
      ...prev,
      {
        postId: Math.floor(Math.random() * 15000),
        postText: textFaker(),
        time: 'Date.now()',
      },
    ])

    httpReq()
      .then((res) => {
        console.log(res)
        let prev = Array.isArray(posts) ? posts : []

        setPosts([...prev, res])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          addPostHandler()
        }}
      >
        {' '}
        add post{' '}
      </button>

      {posts?.map?.((post) => {
        return <Post {...post} />
      })}
    </div>
  )
}

export default App
