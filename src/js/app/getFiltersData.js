
function getFiltersData() {
    fetch('/assets/cities.json')
        .then(response => response.json())
        .then(jsonData => 
            {
                let cities = jsonData

                try {
                fetch('http://90.156.208.88:8080/bryansk/api/shared/get-all-age-category-by-name?name=')
                .then(response => response.json())
                .then(jsonData2 => 
                    {
                        fetch('http://90.156.208.88:8080/bryansk/api/shared/get-all-sex-category-by-name?name=')
                        .then(response => response.json())
                        .then(jsonData3 => 
                            {
                                fetch('http://90.156.208.88:8080/bryansk/api/shared/get-all-team-info-by-name?name=')
                                .then(response => response.json())
                                .then(jsonData4 => 
                                    {

                                        fetch('http://90.156.208.88:8080/bryansk/api/shared/get-all-calendar-sport-type')
                                        .then(response => response.json())
                                        .then(jsonData5 => 
                                            {
                                                fetch('http://90.156.208.88:8080/bryansk/api/shared/get-all-calendar-sport')
                                                .then(response => response.json())
                                                .then(jsonData6 => 
                                                    {
                                                        fetch('http://90.156.208.88:8080/bryansk/api/shared/get-all-program-info')
                                                        .then(response => response.json())
                                                        .then(jsonData7 => 
                                                            {
                                                
                                                                fetch('/assets/cached_maps.json')
                                                                .then(response => response.json())
                                                                .then(jsonData8 => 
                                                                    {
                                                                        console.log(jsonData8)
                                                        
                                                                        let data = {
                                                                            cities: cities.city,
                                                                            ageCategory: jsonData2.data,
                                                                            sexCategory: jsonData3.data,
                                                                            teamInfo: jsonData4.data,
                                                                            calendarSportType: jsonData5.data,
                                                                            calendarSport: jsonData6.data,
                                                                            programInfo: jsonData7.data,
                                                                            disciplineInfo: jsonData8
                                                                        }

                                                                        localStorage.setItem('filtersData', JSON.stringify(data))
                                                                        
                                                                    })
                                                                
                                                            })
                                                        
                                                    })

                                                
                                            })
                    
                                        
                                    })
                
                            })

        
                    })
                } catch {
                    let data = {
                        cities: cities.city,
                        ageCategory: [],
                        sexCategory: [],
                        teamInfo: [],
                        calendarSportType: [],
                        calendarSport: [],
                        programInfo: [],
                        disciplineInfo: [],
                    }
                    for (let key in data) {
                        if (!data[key] || (Array.isArray(data[key]) && data[key].length === 0)) {
                            data[key] = [];
                        }
                    }
                    localStorage.setItem('filtersData', JSON.stringify(data))

                    console.log('Fetch error')
                    
                }
                

            })
    
}       


export default getFiltersData;