import Image from 'next/legacy/image'


// const myLoader = ({ src, width, quality }) => {
//   return `https://imgs.search.brave.com/I89N79oEi5Im8M-4hQmtO5NepNLtXksKsD1Pu4dM71I/rs:fit:256:256:1/g:ce/aHR0cHM6Ly9yZXMt/MS5jbG91ZGluYXJ5/LmNvbS9jcnVuY2hi/YXNlLXByb2R1Y3Rp/b24vaW1hZ2UvdXBs/b2FkL2NfbHBhZCxo/XzI1Nix3XzI1Nixm/X2F1dG8scV9hdXRv/OmVjby9rYWx6ZGdw/cmFvZW1vaHBvcXFm/Zg/${src}?w=${width}&q=${quality || 75}`
// }

const MyImage = (_props: any) => {
  return (
    <Image
    //   loader={myLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
export default function HomePage(){
    return (
        <div>
            <h1>Home page</h1>
            <p>Content</p>
        </div>
    );
}