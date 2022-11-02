'use client';

// export default function Test() {
//   return (
//     <div>
//       <h1>Create Note</h1>
//     </div>
//   );
// }

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async() => {
    // const db = new PocketBase('http://127.0.0.1:8090');

    // await db.records.create('notes', {
    //   title,
    //   content,
    // });

    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent('');
    setTitle('');

    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        Create note
      </button>
    </form>
  );
}
//import Image from 'next/legacy/image'

// const myLoader = ({ src, width, quality }) => {
//   return `https://imgs.search.brave.com/I89N79oEi5Im8M-4hQmtO5NepNLtXksKsD1Pu4dM71I/rs:fit:256:256:1/g:ce/aHR0cHM6Ly9yZXMt/MS5jbG91ZGluYXJ5/LmNvbS9jcnVuY2hi/YXNlLXByb2R1Y3Rp/b24vaW1hZ2UvdXBs/b2FkL2NfbHBhZCxo/XzI1Nix3XzI1Nixm/X2F1dG8scV9hdXRv/OmVjby9rYWx6ZGdw/cmFvZW1vaHBvcXFm/Zg/${src}?w=${width}&q=${quality || 75}`
// }

// const MyImage = (_props: any) => {
//     return (
//         <Image
//             loader={myLoader}
//             src="me.png"
//             alt="Picture of the author"
//             width={500}
//             height={500}
//         />
//     )
// }