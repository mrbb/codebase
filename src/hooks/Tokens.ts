/* eslint-disable no-param-reassign */
import { parseBytes32String } from '@ethersproject/strings'
import { Currency, ETHER, Token } from '@pancakeswap/sdk'
import { useMemo } from 'react'
import { arrayify } from 'ethers/lib/utils'
import useActiveWeb3React from 'hooks/useActiveWeb3React'



import { isAddress } from '../utils'




export function useDefaultTokens(): { [address: string]: Token } {
  return null
}

export function useAllTokens(): { [address: string]: Token } {
  return null
}

export function useAllInactiveTokens(): { [address: string]: Token } {
  return null
}

export function useUnsupportedTokens(): { [address: string]: Token } {
  return null
}


// used to detect extra search results
export function useFoundOnInactiveList(searchQuery: string): Token[] | undefined {
  const { chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (!chainId || searchQuery === '') {
      return undefined
    }
    return null
  }, [chainId, searchQuery])
}


// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[a-fA-F0-9]{64}$/

function parseStringOrBytes32(str: string | undefined, bytes32: string | undefined, defaultValue: string): string {
  return str && str.length > 0
    ? str
    : // need to check for proper bytes string and valid terminator
    bytes32 && BYTES32_REGEX.test(bytes32) && arrayify(bytes32)[31] === 0
    ? parseBytes32String(bytes32)
    : defaultValue
}

// undefined if invalid or does not exist
// null if loading
// otherwise returns the token
export function useToken(tokenAddress?: string): Token | undefined | null {
  const { chainId } = useActiveWeb3React()
  const tokens = useAllTokens()

  const address = isAddress(tokenAddress)
  const token: Token | undefined = address ? tokens[address] : undefined

  const tokenName = undefined
  const tokenNameBytes32 = undefined
  const symbol = undefined
  const symbolBytes32 = undefined
  const decimals = undefined

  return useMemo(() => {
    if (token) return token
    if (!chainId || !address) return undefined
    if (decimals.loading || symbol.loading || tokenName.loading) return null
    if (decimals.result) {
      return new Token(
        chainId,
        address,
        decimals.result[0],
        parseStringOrBytes32(symbol.result?.[0], symbolBytes32.result?.[0], 'UNKNOWN'),
        parseStringOrBytes32(tokenName.result?.[0], tokenNameBytes32.result?.[0], 'Unknown Token'),
      )
    }
    return undefined
  }, [
    address,
    chainId,
    decimals.loading,
    decimals.result,
    symbol.loading,
    symbol.result,
    symbolBytes32.result,
    token,
    tokenName.loading,
    tokenName.result,
    tokenNameBytes32.result,
  ])
}

export function useCurrency(currencyId: string | undefined): Currency | null | undefined {
  const isBNB = currencyId?.toUpperCase() === 'BNB'
  const token = useToken(isBNB ? undefined : currencyId)
  return isBNB ? ETHER : token
}
