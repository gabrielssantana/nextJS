// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const hello = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await res.unstable_revalidate("/blog")
  return res.status(200).json({ name: 'John Doe' })
}

export default hello
