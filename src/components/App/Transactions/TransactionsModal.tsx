import React, { useMemo, useCallback } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useDispatch } from 'react-redux'
import { Modal, ModalBody, Text, Button, Flex, InjectedModalProps } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { AppDispatch } from 'state'
import { AutoRow } from '../../Layout/Row'
// import Transaction from './Transaction'

const TransactionsModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
  
  return (
    <Modal title={'Recent Transactions'} headerBackground="gradients.cardHeader" onDismiss={onDismiss}>
      {true && (
        <ModalBody>
          <Text>{'No recent transactions'}</Text>
        </ModalBody>
      )}
    </Modal>
  )
}

export default TransactionsModal
