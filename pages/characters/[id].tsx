import {
  GetServerSideProps,
  NextPage,
  GetStaticPaths,
  GetStaticProps,
} from "next";
import Image from "next/image";
import styles from "../../styles/pages/Character.module.css";
import Link from "next/link";
import { Character } from "../../types/types";

interface Props {
  character: Character;
}

const CharacterPage: NextPage<Props> = ({ character }) => {
  const { fullName, family, imageUrl, title } = character;
  return (
    <div className={styles.container}>
      <p>
        <Link href="/">back</Link>
      </p>
      <div>
        <Image
          alt={fullName}
          src={imageUrl}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <h1>{fullName}</h1>
      <h3>{title}</h3>
      <h3>{family}</h3>
    </div>
  );
};

// SSR
export const getServerSideProps: GetServerSideProps = async context => {
  const res = await fetch(
    `http://localhost:3000/api/characters/${context.query.id}`
  );
  const data: Character = await res.json();

  return {
    props: {
      character: data,
    },
  };
};

// STATIC
// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch("https://thronesapi.com/api/v2/Characters");
//   const results: GetCharactersData = await res.json();
//   const paths = results.map(({ id: i }: number) => {
//     return { params: { id: String(i) } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({
//   params,
// }: {
//   params: { id: string };
// }) => {
//   const res = await fetch(
//     `https://thronesapi.com/api/v2/Characters/${params.id}`
//   );
//   const character = await res.json();

//   return {
//     props: {
//       character,
//     },
//   };
// };

export default CharacterPage;
