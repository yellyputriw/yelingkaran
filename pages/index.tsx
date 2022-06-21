import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { parse } from "node-html-parser";

const Home: NextPage = () => {
  const [r, setR] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setR(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(r);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>yelingkaran</title>
        <meta
          name="description"
          content="Generated by create next apWeb app with mobile layout for calculating the area of ​​a circle built with vanilla javascript."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.apptitle}>Hitung luas lingkaran</h1>
        <div className={styles.image}>
          <Image
            src="/lingkaran.png"
            alt="lingkaran"
            width={158}
            height={158}
          />
        </div>
        <form className={styles.form} action="" method="POST">
          <input
            type="text"
            id="radius"
            name="radius"
            className={styles.radius}
            placeholder="Masukan Panjang jari-jari"
            onChange={handleChange}
          />
          <button className={styles.btn} type="submit" onClick={handleSubmit}>
            Hitung
          </button>
        </form>
        <div className={styles.result}>
          <p className={styles.title}>Hasil :</p>
          <div className={styles.card}>
            <p>
              Rumus luas lingkaran adalah π x r<sup>2</sup>
            </p>
            <p>π = atau 3.14</p>
            <p>
              Maka jika r nya = <span className="r">{r}</span>
            </p>
            <p>
              Hasilnya adalah{" "}
              {r % 7 === 0
                ? parse("<span><sup>22</sup>&frasl;<sub>7</sub></span>")
                : parse("<span>3.14</span>")}{" "}
              x <span className="r">7</span>
              <sup>2</sup> = <span className={styles.content}>0</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;