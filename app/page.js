import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <text style={{fontSize: '30px'}}>James Xiao </text>
       <br></br>
       <br></br>
       site status: <text style={{color:'orange'}}>under construction</text>
       <br></br><br></br><br></br>
       <br></br>
       <br></br>
       Currently experimenting with LLM frameworks for meaningful data indexing and retrieval. Interested in the role vector embeddings play within these processes.
       <br></br>
       <br></br><br></br>
       <br></br><br></br>
       Past projects include: 
       <br></br>
       <br></br>
        1. BU Spark! Data Portal - [
          <a 
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'blue' }}
          href="https://github.com/BU-Spark/infra-public-data-portal"
          >
            making data accessible 
          </a>]
        <br></br>
        2. Stake the Stigma - [
        <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'blue' }}
        href="https://github.com/elaineleiyoung/StakeTheStigma"
        >
          destigmatizing women's health issues
        </a>]
        <br></br>
        3. benma.world - [
        <a 
         target="_blank"
         rel="noopener noreferrer"
         style={{ color: 'blue' }}
        href="https://benmaimages.herokuapp.com"
        >
          digitizing artistic vision 
        </a>]
      </div>
    </main>
  )
}
