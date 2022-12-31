import Image from 'next/image'
import ContentGenerator from './countriesData'
import styles from '../../styles/Home.module.css'
import { Text } from "@nextui-org/react";

export default function Container() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.center}>
                    <div>
                        <div className={styles.h1}>
                            <Text h3 css={{ lineHeight: "$xs", textGradient: "45deg, $yellow600 -20%, $red600 100%", }}>
                                COVID-19 Countries Tracker
                            </Text>
                        </div>
                    </div>
                    <Image
                        className={styles.logo}
                        src="/covid.svg"
                        alt="covid Logo"
                        width={50}
                        height={50}
                        priority
                    />
                </div>
                <ContentGenerator />
            </div>
        </>
    )
}
