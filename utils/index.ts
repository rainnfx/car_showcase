export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'f198d89682msh4fc18c280d09698p191e79jsn2b63ae6467d5',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json;

    return result
}