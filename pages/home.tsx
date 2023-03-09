import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Card, Text, Link } from "@nextui-org/react";
import styles from '../styles/Home.module.css'

export default function HomeOption() {

  return (
    <>
      <Head>
        <title>
          Statistics
        </title>
      </Head>
      <div className='container'>
        <div className={styles.homePageContainer}>
          <div className='d-flex justify-content-around w-100'>
            <Card isHoverable variant="bordered" className="w-25">
              <Link className='text-center align-self-center pb-0 mb-0' href="/global">
                <Card.Body style={{overflow: 'hidden'}}>
                  <u>
                    <h4>
                    Global
                    </h4>
                  </u>
                  <div className='w-100 d-flex justify-content-center mt-3'>
                    <Image
                      className={styles.logo}
                      style={{ textAlign: 'center', display: 'flex', marginLeft: '0' }}
                      src="/global.png"
                      alt="Global Icon"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </Card.Body>
              </Link>
            </Card>
            <Image
              className='rounded'
              style={{ textAlign: 'center', display: 'flex', marginLeft: '0' }}
              src="/covid19.gif"
              alt="Covid19"
              width={200}
              height={200}
              priority
            />
            <Card isHoverable variant="bordered" className="w-25">
              <Link className='text-center align-self-center pb-0 mb-0' href="/countries">
                <Card.Body style={{overflow: 'hidden'}}>
                  <u>
                    <h4>
                    Countries
                    </h4>
                  </u>
                  <div className='w-100 d-flex justify-content-center mt-3'>
                    <Image
                      className={styles.logo}
                      style={{ textAlign: 'center', display: 'flex', marginLeft: '0' }}
                      src="/global.png"
                      alt="Global Icon"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </Card.Body>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
};
