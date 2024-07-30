const headers = {
    Authorization: `Client-ID U7o3mWQdNPLqD5OLhtNTobaKR2RIyOMyu1B4rEjlDH4`
}

export const getPhotos = async () => {
    const url = new URL("https://api.unsplash.com/photos")

    url.searchParams.set("per_page", "10")
    url.searchParams.set("order_by", "popular")

    return await fetch(url, {
        headers
    })

}


export const getPhoto = async (id: string) => {
return await fetch(`https://api.unsplash.com/photo/${id}`, {
    headers
})
}