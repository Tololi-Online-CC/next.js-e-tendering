import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Home() {
  const navigate = useRouter();

  const [selectedComponent, setSelectedComponent] = useState("");

  const handleSelection = (component) => {
    setSelectedComponent(component);
  };
  const handleSubmit = event => {
    event.preventDefault();

    navigate.push('/contractor/dashboard');
  };
  const handleSubmitOp = event => {
    event.preventDefault();

    navigate.push('/operator/dashboard');
  };
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  function NavigateLogin() {
    return (
      <div style={{ paddingLeft: "20px" }}>
        <span className="filter-a" onClick={() => handleSelection("Contractor")}>Contractor</span>
        <span className="filter-a" onClick={() => handleSelection("Operator")}>Operator</span>
      </div>
    );
  }
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);


  console.log(windowSize.width)

  if (windowSize.width) {
    if (windowSize.width < 767) {
      return (
        <div className='mobile'>
          <img src='logo.png'></img>
          <br />
          <h1>Currently not available on mobile</h1>
        </div>
      )
    }
  }
  if (windowSize.width) {
    if (windowSize.width > 767) {
      switch (selectedComponent) {
        case "Contractor":
          return (
            <>
              <Head>
                <title>E-Tendering System || Namcor</title>
                <meta name="description" content="Namcor E-tendering online platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <main className={styles.main}>
                <div className='login'>
                  <NavigateLogin/>
                  <form className="form" target="_blank" onSubmit={handleSubmit}>
                    <h2>CONTRACTOR LOGIN</h2>
                    <input type="email" name="Email" placeholder="Email" className="input" required /><br />
                    <input type="password" name="Password" placeholder="Password" className="input" required /><br />
                    <button className="btn" type="submit">Submit</button>
                  </form>
                  <Link href={'/register'} className='link' style={{ margin: 0 }}>Register</Link>
                </div>
              </main>
            </>
          );
        case "Operator":
          return (
            <>
              <Head>
                <title>E-Tendering System || Namcor</title>
                <meta name="description" content="Namcor E-tendering online platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <main className={styles.main}>
                <div className='login'>
                <NavigateLogin/>
                  <form className="form" target="_blank" onSubmit={handleSubmitOp}>
                    <h2>OPERATOR LOGIN</h2>
                    <input type="email" name="Email" placeholder="Email" className="input" required /><br />
                    <input type="password" name="Password" placeholder="Password" className="input" required /><br />
                    <button className="btn" type="submit">Submit</button>
                  </form>
                  <Link href={'/register'} className='link' style={{ margin: 0 }}>Register</Link>
                </div>
              </main>
            </>
          );
        default:
          return (
            <>
              <Head>
                <title>E-Tendering System || Namcor</title>
                <meta name="description" content="Namcor E-tendering online platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <main className={styles.main}>
                <div className='login'>
                <NavigateLogin/>
                  <form className="form" target="_blank" onSubmit={handleSubmit}>
                    <h2>CONTRACTOR LOGIN</h2>
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
    }
  }
}
