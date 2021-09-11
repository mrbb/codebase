import React from 'react'
import { Box, Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const WalletTransactions: React.FC = () => {
  const { t } = useTranslation()


  return (
    <Box minHeight="120px">
      <Flex alignItems="center" justifyContent="space-between" mb="24px">
        <Text color="secondary" fontSize="12px" textTransform="uppercase" fontWeight="bold">
          {t('Recent Transactions')}
        </Text>
      </Flex>
    </Box>
  )
}

export default WalletTransactions
