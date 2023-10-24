// api.giphy.com/v1/gifs/trending?api_key=lNPUWcsRA5rNT2mGqpOOFSniu0PVki6l&q=halloween
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lNPUWcsRA5rNT2mGqpOOFSniu0PVki6l&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gif = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gif)    
    return gif;
}