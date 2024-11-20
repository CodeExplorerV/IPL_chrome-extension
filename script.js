async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=173e6359-e9c8-432f-a1e1-d7af48702f2a&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];

            const relevantData = matchesList.filter(match => match.series_id == "e98b7f38-1b44-4251-b9de-5c57f90b5f90").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();
