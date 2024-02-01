import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <text style={{fontSize: '30px'}}>James Xiao </text>
       <br></br>
       <br></br>
       developing whatever itches my brain - <text style={{color:'orange'}}>powered by curiosity</text>
       <br></br><br></br><br></br>
       I started my programming journey with full stack development. Many of my designs and code attempt to follow minimalism - there's something beautiful about getting more done with less. My most recent interests include LLM architecture, systems design, and honestly ANYTHING that can be programmed. My current goal is to actually CODE out my ideas instead of letting them stay as thoughts.  
       <br></br>
	<br></br>
	<br></br>
	Shoutout to Obsidian & Vim! 
       <br></br><br></br>
       <br></br><br></br>
       Current Projects:
	<br></br>
	<br></br>
	1. Video Codec - [<a 
	target="_blank"
	rel="noopener norefferrer"
	style={{ color: 'blue'}}
	href="https://github.com/jamxiao2025/Video-Compressor"
	>media compression using SVD
	</a>]
	<br></br>
	<text style={{color:'orange'}}>Ideally this project will allow me to learn more about image/video processing and parallel processing. I will also have the opportunity to learn a new stack (React + Django) and hopefully other devtools as an extension to the current project.</text>
	<br></br>
	<br></br>
	<br></br>
	<br></br> 
       Past Projects: 
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
        href="https://github.com/jamxiao2025/Image-Gallery"
        >
          digitizing artistic vision 
        </a>]
	<br></br>
	<br></br>
	<br></br>
	<a
	target="_blank"
	rel="noopener noreferrer"
	style={{ color: 'blue'}}
	href="https://github.com/jamxiao2025"
	>github</a>
	<br></br>
	<a
	target="_blank"
	rel="noopener noreferrer"
	style={{ color: 'blue'}}
	href="https://linkedin.com/in/jamxiao"
	>linkedIn</a>
	<br></br>
	<a 
	target="_blank"
	rel="noopener noreferrer"
	style={{ color: 'blue'}}
	href="https://open.spotify.com/user/30s6wj6c2mgdxhi4j970mems1?si=lPvX9iTTTm-AOSIbNmxVMw"
	>spotify"</a>
      </div>
    </main>
  )
}
