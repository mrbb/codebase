import { Currency, ETHER, Token } from '@pancakeswap/sdk'
import { BinanceIcon } from '@pancakeswap/uikit'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import getTokenLogoURL from '../../utils/getTokenLogoURL'
import Logo from './Logo'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = 'https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f7f9e5ecc663413ecbc7_logo-example6.svg' // useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)



  return <StyledLogo size={size} srcs={[]} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
