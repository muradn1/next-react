import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/counterSlice';
import { RootState } from '../../store/store'
import styles from './MyCounter.module.scss'

export default function MyCounter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <span className={styles.padding10pxLeftRight}>
                <IconButton
                    onClick={() => dispatch(decrement())}
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Decrement value'
                    icon={<MinusIcon />}
                />
            </span>

            <span>{count}</span>

            <span className={styles.padding10pxLeftRight}><IconButton
                onClick={() => dispatch(increment())}
                variant='outline'
                colorScheme='teal'
                aria-label='Increment value'
                icon={<AddIcon />}
            />
            </span>
        </div>
    )
}
