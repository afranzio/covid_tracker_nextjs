import React from "react";
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import {useRouter} from 'next/router';

export default function NavBar() {
    const router = useRouter()
    const { isDark } = useTheme();
    return (
        <>
        <Navbar isBordered variant="floating">
            <Link href="/">
                <Navbar.Brand>
                    <Image
                        className={styles.logo}
                        src="/covid.svg"
                        alt="covid Logo"
                        width={25}
                        height={25}
                        priority
                    />
                    <Text b color="inherit" hideIn="xs" style={{ paddingLeft: "8px" }}>
                        Covid23
                    </Text>
                </Navbar.Brand>
            </Link>
            <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                <Navbar.Link isActive={router.pathname == '/global' ? true : false} href="/global">Global</Navbar.Link>
                <Navbar.Link isActive={router.pathname == '/countries' ? true : false} href="/countries">Countries</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link
                    color="inherit"
                    target="_blank"
                    href="https://afranzio.github.io/"
                >
                    Portfolio
                </Navbar.Link>
                <Navbar.Item>
                    <Button
                        auto
                        flat
                        as={Link}
                        target="_blank"
                        href="https://github.com/afranzio?tab=repositories"
                    >
                        GitHub
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
        </>
    );
}
