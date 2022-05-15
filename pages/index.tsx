import type { GetServerSideProps, NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

interface IRepo {
  name: string
}

interface HomeProps {
  repos: IRepo[]
}

const Home = ({ repos }: HomeProps) => {

  return (
    <ul>
      {repos.map((repo, index) => <li key={index.toString()}>{repo.name}</li>)}
    </ul>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch("https://api.github.com/users/gabrielssantana/repos")
    const json = await response.json() as IRepo[]
    return {
      props: { repos: json }
    }
  } catch (error) {
    throw console.error(error)
  }
}

export default Home
