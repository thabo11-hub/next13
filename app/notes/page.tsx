async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30');
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div>
            <h3> notes</h3>
            <div>
            {notes?.map((notes) =>{
                return <Note key={note._id} note={note} />;
            }))}

            </div>
        </div>
    )
}