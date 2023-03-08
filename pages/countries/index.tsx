import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Loader from '../../public/loader.gif'
import { Card, Grid, Text, Link } from "@nextui-org/react";

import { Layout } from "../components/navbar/Layout";
import NavBar from "../components/navbar/Navbar";

export default function ContentGenerator() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  const pressAbleCard = (element: any) => {
    return (
      <>
        <Card key={element['country']} css={{ p: "$6", mw: "400px", m: "$6" }}>
          <Card.Header>
            <Grid.Container>
              <Grid xs={12}>
                <Text className={styles.country_name} h3 css={{ lineHeight: "$xs" }}>
                  {element['country']}
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <div className={styles.dataTable}>
              <div>
                <div>Infected</div>
                <div>{element['infected'] ? element['infected'] : "NA"}</div>
              </div>
              <div>
                <div>Deceased</div>
                <div>{element['deceased'] ? element['deceased'] : "NA"}</div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link
              color="primary"
              target="_blank"
              href={element['sourceUrl'] ? element['sourceUrl'] : "#"}
            >
              Visit source.
            </Link>
          </Card.Footer>
        </Card>
      </>
    );
  }

  return (
    <>
      <main className={styles.fontFamily}>
        <div>
          <Layout>
            <NavBar />
            {isLoading ? <Image alt='loader' className={styles.loader} src={Loader} width={100} height={100} /> :
              <div className={styles.card_container}>
                {data.map((element) => (
                  pressAbleCard(element)
                ))}
              </div>
            }
          </Layout>
        </div>
      </main>
    </>
  )
}

