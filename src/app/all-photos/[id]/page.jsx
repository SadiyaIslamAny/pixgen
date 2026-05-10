
const photoDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('http://localhost:3000/data.json')
    const photos = await res.json()


    const photo = photos.find(p=> p.id == id)
    console.log(photo)
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold">{photo.title}</h1>
                <p>{photo.prompt}</p>
            </div>
        </div>
    );
};

export default photoDetailsPage;