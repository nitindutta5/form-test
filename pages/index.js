import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="text" name="email" id="name" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="Msg">Msg</Label>
            <Input type="textarea" name="Message" id="msg" placeholder="Message" />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
