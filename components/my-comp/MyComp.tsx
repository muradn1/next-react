
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import styles from './MyComp.module.scss'

export default function MyComp() {
    const [clickedCount, setClickedCount] = useState(0);

    function handleClick() {
        setClickedCount(clickedCount + 1);
    }

    return (
        <>
            <div className={styles.paddingTopBottom10px}>MyComp</div>
            <Button colorScheme='blue' variant='outline' onClick={handleClick}>
                Button
            </Button>
            <div className={styles.paddingTopBottom10px}>
                {clickedCount > 0 && `clicked count: ${clickedCount}`}
            </div>
        </>
    )
}
