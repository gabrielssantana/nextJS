import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next"

const Post = ({ date, postID }: { date: string, postID?: string }) => {
  return (
    <div>
      <h1>Salve {`${date}, ${postID}`}</h1>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { postID: 'any' } }], //receberia uma lista de possiveis params e postids para criar uma página estática para cada um
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<{ postID?: string }, any>) => {
  return ({
    props: {
      date: new Date().toISOString(),
      postID: params?.postID
    }
  })
}

export default Post