import Link from "next/link";
import logoImg from '../assets/logo.png'
import Image  from "next/image";
import styles from './main-header.module.css'

export default function MainHeader(){
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={'/'}>
        <Image src={logoImg} alt="NextLevel Food logo" />
        <span>NextLevel Food</span>
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={'/meals'}>Browse Meals</Link>
          </li>
          <li>
            <Link href={'/community'}>Foodie Community is here</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
