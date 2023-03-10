import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'

/**
 * This sets `cookie` using the `res` object
 */

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: string,
  options: CookieSerializeOptions = {}
) => {
    
  res.setHeader('Set-Cookie', serialize(name, value, options))
}