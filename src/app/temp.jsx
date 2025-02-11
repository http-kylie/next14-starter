import styles from './home.module.css'
import Image from 'next/image';

const Home = () => {
  return (
	<div className={styles.container}>HomePage
		<div className={styles.textContainer}>
			<h1>Creative Thoughts Agency</h1>
			<p>
				Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus accumsan netus potenti finibus efficitur auctor efficitur leo. Vitae vehicula pretium natoque tempor aenean blandit.
			</p>
			<div className={styles.buttons}>
				<button className={styles.button}>Learn More</button>
				<button className={styles.button}>Contact</button>
			</div>
			<div className={styles.brands}>
				<Image src="/brands.png" alt="" fill className={styles.brangImg}/>
			</div>
		</div>
		<div className={styles.imageContainer}>
			<Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
		</div>
	</div>
	);
};

export default Home;