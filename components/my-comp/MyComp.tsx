
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import styles from './MyComp.module.scss'
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query zips {
    allZips(limit:10){
        city
        pop
      }
  }
`;

type Zip = {
    city: string;
    pop: number
}

export default function MyComp() {
    const [clickedCount, setClickedCount] = useState(0);
    const { data, loading, error } = useQuery(QUERY);



    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }

    const zips: Zip[] = data.allZips.slice();

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
            <div className={styles.paddingTopBottom10px}>
                {zips ?
                    <div>
                        zips:
                        {zips.map(zip => (
                            <div key={zip.city}>
                                {`city: ${zip.city}, pop: ${zip.pop}`}
                            </div>
                        ))}
                    </div>
                    : null}
            </div>
        </>
    )
}
