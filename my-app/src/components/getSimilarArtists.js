export async function getSimilarArtists(artistName) {
    try {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await fetch(`${apiUrl}/similar-artists?artist=${encodeURIComponent(artistName)}`);
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }  