export async function searchItem(id) {
    const headers = { 'Content-Type': 'application/json',
    "TMG-Api-Key":"0J/RgNC40LLQtdGC0LjQutC4IQ=="}
    const response = await fetch(
      `http://tmgwebtest.azurewebsites.net/api/textstrings/${id}`, {headers} );
    const body = await response.json();
    return body;
  }
    
    

  

  