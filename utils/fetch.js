

const requestOptions =(method, data, token)=> {
    return{
    method: method,
    withCredentials: true,
    credentials: 'include',
    
    headers: { "Content-Type": "application/json", "Authorization": token, },
    body: JSON.stringify(data),}
    
  };

export async function getData( method, link, data, token) {
    var option = requestOptions(method,data, token)
    const res = await fetch(link, {
        option
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }