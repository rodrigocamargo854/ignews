import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession } from 'next-auth/client';

import styles from "./styles.module.scss";

export function SignInButton() {

  const [session] = useSession()

  console.log('session :>> ', session);
  
  return session ? (
      <button
          className={styles.signInButton}
          type="button"
      >
          <FaGithub color="#04d361"/>
          {session.user.name}
          <FiX color="#737380" className={styles.closedIcon}/>
      </button>
  ) :
   (
      <button
          className={styles.signInButton}
          type="button"
          onClick={() => signIn('github')}
      >
          <FaGithub color="#eba417"/>
          Sign in with Github
      </button>
  );
}

