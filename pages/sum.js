import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


const sum = (props) => {
    const router = useRouter()
    console.log(router.query)
    return (
        <div>
            <Link href = "/">
                <a>
                    Go Back
                </a>
            </Link>
            The sum is {parseInt(router.query.x)+parseInt(router.query.y)}
        </div>
    )
}

export default sum
