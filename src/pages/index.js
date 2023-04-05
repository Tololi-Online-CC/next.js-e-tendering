import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Home() {
  const navigate = useRouter();

  const handleSubmit = event => {
    event.preventDefault();

    navigate.push('/contractor/dashboard');
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Namcor E-tendering online platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className='login'>
          <form className="form" target="_blank" onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <input type="email" name="Email" placeholder="Email" className="input" required /><br />
            <input type="password" name="Password" placeholder="Password" className="input" required /><br />
            <button className="btn" type="submit">Submit</button>
          </form>
          <Link href={'/register'} className='link' style={{ margin: 0 }}>Register</Link>
        </div>
      </main>
    </>
  )
}
