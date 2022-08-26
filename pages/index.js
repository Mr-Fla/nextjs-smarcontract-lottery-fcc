import Head from "next/head";
import styles from "../styles/Home.module.css";
//import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Fla Contract Lottery</title>
                <meta name="description" content="Our Smart Fla Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader /> */}
            <Header />
            {/* header / connect button / nav bar */}
            <LotteryEntrance />
            <div className="p-5">
                <h4>Take your chance now!</h4>
            </div>
        </div>
    );
}
//Time 16:48:43
