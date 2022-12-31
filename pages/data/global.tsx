import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Loader from '../../public/loader.gif'
import { Text } from "@nextui-org/react";
import { useState, useEffect } from 'react';

export default function GlobalData() {

    const [worldData, setWorldData] = useState({});
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("https://disease.sh/v3/covid-19/all")
            .then((res) => res.json())
            .then((data) => {
                setWorldData(data)
                setLoading(false)
            })
    }, [])

    function convertToInternationalCurrencySystem(labelValue:number) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9

            ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
            // Six Zeroes for Millions 
            : Math.abs(Number(labelValue)) >= 1.0e+6

                ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
                // Three Zeroes for Thousands
                : Math.abs(Number(labelValue)) >= 1.0e+3

                    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + " K"

                    : Math.abs(Number(labelValue));

    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.center}>
                    <div>
                        <div className={styles.h1}>
                            <Text h3 css={{ lineHeight: "$xs", textGradient: "45deg, $yellow600 -20%, $red600 100%", }}>
                                COVID-19 Global Data
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
                {isLoading ?
                    <Image alt='loader' src={Loader} width={100} height={100} />
                    :
                    <table className={styles.table}>
                        <thead className={styles.tableHead}>
                            <tr>
                                <th>
                                    <h2>
                                        Variants
                                    </h2>
                                </th>
                                <th>
                                    <h2>
                                        Counts
                                    </h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(worldData).map((key: any, index: number) => (
                                <tr key={index} id={index.toString()}>
                                    <td>{key.toUpperCase()}</td>
                                    <td style={{ "paddingLeft": "5rem" }}>{convertToInternationalCurrencySystem(worldData[key])}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}
