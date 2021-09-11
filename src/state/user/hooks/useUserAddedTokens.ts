import { useMemo } from 'react'
import { ChainId, Token } from '@pancakeswap/sdk'
import { useSelector } from 'react-redux'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { AppState } from '../../index'
import { deserializeToken } from './helpers'

export default function useUserAddedTokens(): Token[] {
  const { chainId } = useActiveWeb3React()
  const serializedTokensMap = null

  return useMemo(() => {
    if (!chainId) return []
    return []
  }, [serializedTokensMap, chainId])
}
