import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/28318918/pexels-photo-28318918/free-photo-of-a-picnic-table-with-a-camera-cheese-and-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill/>
      </div>
    </div>
  );
};

export default AboutPage;
