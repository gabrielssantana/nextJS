import type { GetServerSideProps } from 'next'

interface IRepo {
  name: string
}

interface HomeProps {
  repos: IRepo[],
  date: string
}

const Home = ({ repos, date }: HomeProps) => {

  return (
    <>
      <h1>Server date: {date}</h1>
      <ul>
        {repos.map((repo, index) => <li key={index.toString()}>{repo.name}</li>)}
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch("https://api.github.com/users/gabrielssantana/repos")
    const json = await response.json() as IRepo[]
    return {
      props: {
        repos: json,
        date: new Date().toISOString()
      }
    }
  } catch (error) {
    throw console.error(error)
  }
}

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     const response = await fetch("https://api.github.com/users/gabrielssantana/repos")
//     const json = await response.json() as IRepo[]
//     return {
//       props: {
//         repos: json,
//         date: new Date().toISOString()
//       },
//       revalidate: 60 * 60,
//     }
//   } catch (error) {
//     throw console.error(error)
//   }
// }

export default Home
