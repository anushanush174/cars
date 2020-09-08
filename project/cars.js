const carList = [
    {
        "Model": "4Â½-Litre Supercharged 'Blower' Bentley Single-Seater",
        "Brand": "Bentley",
        "Date": "1929",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Alfa Romeo 6C 1750 Supercharged Gran Sport Spider",
        "Brand": "Alfa Romeo",
        "Date": "1931",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "Sedan",
    },
    {
        "Model": "Alfa Romeo 6C 2500 Competizione",
        "Brand": "Alfa Romeo",
        "Date": "1948",
        "Horsepower": "265",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Alfa Romeo 8C 2300 'Le Mans' Tourer",
        "Brand": "Alfa Romeo",
        "Date": "1934",
        "Horsepower": "290",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Alfa Romeo 8C 2300 Castagna Drop Head Coupe",
        "Brand": "Alfa Romeo",
        "Date": "1933",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Alfa Romeo 8C 2300 Monza",
        "Brand": "Alfa Romeo",
        "Date": "1933",
        "Horsepower": "270",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Alfa Romeo 8C 2900B Pinin Farina Cabriolet",
        "Brand": "Alfa Romeo",
        "Date": "1937",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Alfa Romeo Tipo 256 Cabriolet Sportivo",
        "Brand": "Alfa Romeo",
        "Date": "1939",
        "Horsepower": "170",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Aston Martin DB3S",
        "Brand": "Aston Martin",
        "Date": "1955",
        "Horsepower": "170",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Aston Martin DB3S",
        "Brand": "Aston Martin",
        "Date": "1956",
        "Horsepower": "220",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Aston Martin DB5",
        "Brand": "Aston Martin",
        "Date": "1964",
        "Horsepower": "220",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bentley 4 Litre \"The Green Hornet\"",
        "Brand": "Bentley",
        "Date": "1931",
        "Horsepower": "220",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bentley 4Â½ Litre Le Mans Sports 'Bobtail'",
        "Brand": "Bentley",
        "Date": "1928",
        "Horsepower": "220",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bentley 4Â½ Litre Supercharged Le Mans",
        "Brand": "Bentley",
        "Date": "1931",
        "Horsepower": "220",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bentley 8 Litre Sports Coupe Cabriolet",
        "Brand": "Bentley",
        "Date": "1931",
        "Horsepower": "250",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bentley Speed Six Tourer",
        "Brand": "Bentley",
        "Date": "1930",
        "Horsepower": "220",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bugatti Royale Berline de Voyager",
        "Brand": "Bugatti",
        "Date": "1931",
        "Horsepower": "220",
        "Transmission": "Automatic",
        "Class": "Wagon"
    },
    {
        "Model": "Bugatti Royale Kellner Coupe",
        "Brand": "Bugatti",
        "Date": "1931",
        "Horsepower": "220",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bugatti Type 18 5-litre Sports Two-seater",
        "Brand": "Bugatti",
        "Date": "1913",
        "Horsepower": "300",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bugatti Type 57S Atalante",
        "Brand": "Bugatti",
        "Date": "1937",
        "Horsepower": "330",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bugatti Type 57SC Atalante",
        "Brand": "Bugatti",
        "Date": "1937",
        "Horsepower": "340",
        "Transmission": "Automatic",
        "Class": "Wagon"
    },
    {
        "Model": "Bugatti Type 57SC Atalante Coupe",
        "Brand": "Bugatti",
        "Date": "1937",
        "Horsepower": "340",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Bugatti Veyron 16.4 Grand Sport",
        "Brand": "Bugatti",
        "Date": "2009",
        "Horsepower": "450",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Chevrolet Corvette L88",
        "Brand": "Chevrolet",
        "Date": "1967",
        "Horsepower": "180",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Chevrolet Corvette L88 Convertible",
        "Brand": "Chevrolet",
        "Date": "1967",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "De Dion, Bouton et TrÃ©pardoux Dos-Ã -Dos Steam Runabout \"La Marquise\"",
        "Brand": "De Dion, Bouton et TrÃ©pardoux Dos-Ã -Dos Steam Runabout",
        "Date": "1884",
        "Horsepower": "250",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "De Dion, Bouton et TrÃ©pardoux Dos-Ã -Dos Steam Runabout \"La Marquise\"",
        "Brand": "De Dion, Bouton et TrÃ©pardoux Dos-Ã -Dos Steam Runabout",
        "Date": "1884",
        "Horsepower": "184",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Delahaye 135 Competition Court Torpedo Roadster",
        "Brand": "Delahaye",
        "Date": "1939",
        "Horsepower": "184",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Delahaye Type 175S Roadster",
        "Brand": "Delahaye",
        "Date": "1949",
        "Horsepower": "184",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Duesenberg Model J Long-Wheelbase Coupe",
        "Brand": "Duesenberg",
        "Date": "1931",
        "Horsepower": "184",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Duesenberg Model SJ Convertible Coupe",
        "Brand": "Duesenberg",
        "Date": "1935",
        "Horsepower": "184",
        "Transmission": "Automatic",
        "Class": "Wagon"
    },
    {
        "Model": "Duesenberg SJ Roadster",
        "Brand": "Duesenberg",
        "Date": "1935",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Duesenberg SJ Speedster \"Mormon Meteor\"",
        "Brand": "Duesenberg",
        "Date": "1935",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 166 MM Barchetta",
        "Brand": "Ferrari",
        "Date": "1950",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 212 Export Berlinetta",
        "Brand": "Ferrari",
        "Date": "1951",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT",
        "Brand": "Ferrari",
        "Date": "1957",
        "Horsepower": "184",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT Berlinetta Competizione",
        "Brand": "Ferrari",
        "Date": "1955",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT Cabriolet",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "325",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT California",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "325",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT California LWB Competizione Spyder",
        "Brand": "Ferrari",
        "Date": "1960",
        "Horsepower": "325",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT California LWB Prototype Spyder",
        "Brand": "Ferrari",
        "Date": "1957",
        "Horsepower": "333",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Ferrari 250 GT LWB 'Tour de France' Berlinetta",
        "Brand": "Ferrari",
        "Date": "1958",
        "Horsepower": "333",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Ferrari 250 GT LWB Berlinetta 'Tour de France'",
        "Brand": "Ferrari",
        "Date": "1956",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 250 GT LWB Berlinetta Tour de France",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "325",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 250 GT LWB California",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "184",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Ferrari 250 GT LWB California Competizione Spider",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "225",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Ferrari 250 GT LWB California Spider",
        "Brand": "Ferrari",
        "Date": "1958",
        "Horsepower": "175",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT LWB California Spider",
        "Brand": "Ferrari",
        "Date": "1958",
        "Horsepower": "205",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT LWB California Spider",
        "Brand": "Ferrari",
        "Date": "1958",
        "Horsepower": "205",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT LWB California Spider",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "205",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT LWB California Spider",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "240",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT LWB Tour de France",
        "Brand": "Ferrari",
        "Date": "1958",
        "Horsepower": "275",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 250 GT Series 1",
        "Brand": "Ferrari",
        "Date": "1958",
        "Horsepower": "240",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT Series 1 Cabriolet",
        "Brand": "Ferrari",
        "Date": "1958",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT Series I Cabriolet",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "185",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 250 GT SWB \"Competition\" Berlinetta Speciale",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "255",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT SWB Berlinetta Competizione",
        "Brand": "Ferrari",
        "Date": "1960",
        "Horsepower": "275",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT SWB California Spider",
        "Brand": "Ferrari",
        "Date": "1961",
        "Horsepower": "300",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT SWB California Spider",
        "Brand": "Ferrari",
        "Date": "1961",
        "Horsepower": "295",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 250 GT SWB California Spyder",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "275",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 GT SWB Speciale Aerodinamica",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "320",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 250 GTO",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "320",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Ferrari 250 LM",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "103",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 LM",
        "Brand": "Ferrari",
        "Date": "1964",
        "Horsepower": "190",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Ferrari 250 LM",
        "Brand": "Ferrari",
        "Date": "1964",
        "Horsepower": "103",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 LWB California Spider",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "140",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 LWB California Spider Competizione",
        "Brand": "Ferrari",
        "Date": "1959",
        "Horsepower": "140",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 MM Berlinetta",
        "Brand": "Ferrari",
        "Date": "1953",
        "Horsepower": "140",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 SWB Berlinetta",
        "Brand": "Ferrari",
        "Date": "1961",
        "Horsepower": "350",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Ferrari 250 SWB Berlinetta",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "350",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Ferrari 250 SWB Berlinetta Competizione",
        "Brand": "Ferrari",
        "Date": "1960",
        "Horsepower": "180",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 SWB California Spider",
        "Brand": "Ferrari",
        "Date": "1960",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 SWB California Spider",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "240",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 SWB Competizione \"SEFAC Hot Rod\"",
        "Brand": "Ferrari",
        "Date": "1961",
        "Horsepower": "145",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 Testa Rossa",
        "Brand": "Ferrari",
        "Date": "1957",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 250 Testa Rossa",
        "Brand": "Ferrari",
        "Date": "1957",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 275 GTB",
        "Brand": "Ferrari",
        "Date": "1967",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Wagon"
    },
    {
        "Model": "Ferrari 275 GTB Alloy",
        "Brand": "Ferrari",
        "Date": "1967",
        "Horsepower": "180",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 275 GTB Long ose Alloy",
        "Brand": "Ferrari",
        "Date": "1965",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 275 GTB/4",
        "Brand": "Ferrari",
        "Date": "1967",
        "Horsepower": "295",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 275 GTB/4",
        "Brand": "Ferrari",
        "Date": "1967",
        "Horsepower": "295",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 275 GTB/4 ART Spyder Alloy",
        "Brand": "Ferrari",
        "Date": "1967",
        "Horsepower": "165",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 275 GTB/4*S ART Spider",
        "Brand": "Ferrari",
        "Date": "1967",
        "Horsepower": "275",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 275 GTB/C",
        "Brand": "Ferrari",
        "Date": "1966",
        "Horsepower": "185",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Ferrari 275 GTB/C Speciale",
        "Brand": "Ferrari",
        "Date": "1964",
        "Horsepower": "250",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 330 P3",
        "Brand": "Ferrari",
        "Date": "1966",
        "Horsepower": "255",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 330 TRI/LM Spider",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 330 TRI/LM Spider",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "232",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 333 SP",
        "Brand": "Ferrari",
        "Date": "1998",
        "Horsepower": "215",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Ferrari 340 Mexico Berlinetta",
        "Brand": "Ferrari",
        "Date": "1952",
        "Horsepower": "250",
        "Transmission": "Automatic",
        "Class": "Wagon"
    },
    {
        "Model": "Ferrari 340 Mexico Coupe",
        "Brand": "Ferrari",
        "Date": "1952",
        "Horsepower": "150",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 340 MM Competition Spyder",
        "Brand": "Ferrari",
        "Date": "1953",
        "Horsepower": "220",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 340 MM Spider",
        "Brand": "Ferrari",
        "Date": "1953",
        "Horsepower": "150",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 340/375 MM Berlinetta 'Competizione'",
        "Brand": "Ferrari",
        "Date": "1953",
        "Horsepower": "150",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 340/375 MM Berlinetta Competizione",
        "Brand": "Ferrari",
        "Date": "1953",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 375 MM Berlinetta",
        "Brand": "Ferrari",
        "Date": "1955",
        "Horsepower": "150",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 375 MM Berlinetta",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 375 MM Spider",
        "Brand": "Ferrari",
        "Date": "1953",
        "Horsepower": "180",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Ferrari 375-Plus Spider Competizione",
        "Brand": "Ferrari",
        "Date": "1954",
        "Horsepower": "215",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Ferrari 400 Superamerica",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "150",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Ferrari 400 Superamerica",
        "Brand": "Ferrari",
        "Date": "1962",
        "Horsepower": "230",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari 410 Sport",
        "Brand": "Ferrari",
        "Date": "1956",
        "Horsepower": "215",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Ferrari 410S",
        "Brand": "Ferrari",
        "Date": "1955",
        "Horsepower": "232",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 412S",
        "Brand": "Ferrari",
        "Date": "1958",
        "Horsepower": "200",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 500 Mondial Spider Series I",
        "Brand": "Ferrari",
        "Date": "1954",
        "Horsepower": "132",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 500 TRC",
        "Brand": "Ferrari",
        "Date": "1957",
        "Horsepower": "132",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 500 TRC",
        "Brand": "Ferrari",
        "Date": "1957",
        "Horsepower": "150",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 512",
        "Brand": "Ferrari",
        "Date": "1971",
        "Horsepower": "150",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 512S",
        "Brand": "Ferrari",
        "Date": "1970",
        "Horsepower": "224",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 625 TRC Spider",
        "Brand": "Ferrari",
        "Date": "1957",
        "Horsepower": "224",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 750 Monza Spider",
        "Brand": "Ferrari",
        "Date": "1955",
        "Horsepower": "239",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ferrari 857 Sport",
        "Brand": "Ferrari",
        "Date": "1955",
        "Horsepower": "201",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari Dino 206SP",
        "Brand": "Ferrari",
        "Date": "1966",
        "Horsepower": "232",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ferrari F2004",
        "Brand": "Ferrari",
        "Date": "2004",
        "Horsepower": "210",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Ford GT40",
        "Brand": "Ford",
        "Date": "1967",
        "Horsepower": "110",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ford GT40",
        "Brand": "Ford",
        "Date": "1968",
        "Horsepower": "130",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ford GT40 Prototype",
        "Brand": "Ford",
        "Date": "1964",
        "Horsepower": "170",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Ford GT40 Roadster",
        "Brand": "Ford",
        "Date": "1965",
        "Horsepower": "130",
        "Transmission": "Automatic",
        "Class": "Wagon"
    },
    {
        "Model": "GM Futurliner",
        "Brand": "General Motors",
        "Date": "1950",
        "Horsepower": "130",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Gordini Type 24S",
        "Brand": "Gordini",
        "Date": "1953",
        "Horsepower": "130",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Gurney Eagle Mk1",
        "Brand": "All American Racers",
        "Date": "1966",
        "Horsepower": "193",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Horch 853A Special Roadster",
        "Brand": "Horch",
        "Date": "1939",
        "Horsepower": "193",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Jaguar C-Type",
        "Brand": "Jaguar",
        "Date": "1952",
        "Horsepower": "260",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Jaguar C-Type",
        "Brand": "Jaguar",
        "Date": "1953",
        "Horsepower": "155",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Jaguar D-Type",
        "Brand": "Jaguar",
        "Date": "1955",
        "Horsepower": "155",
        "Transmission": "Automatic",
        "Class": "Wagon"
    },
    {
        "Model": "Jaguar D-Type",
        "Brand": "Jaguar",
        "Date": "1955",
        "Horsepower": "201",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Jaguar D-Type",
        "Brand": "Jaguar",
        "Date": "1956",
        "Horsepower": "280",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Jaguar D-Type",
        "Brand": "Jaguar",
        "Date": "1956",
        "Horsepower": "275",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Jaguar E2A",
        "Brand": "Jaguar",
        "Date": "1960",
        "Horsepower": "190",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Maserati 450S Prototype",
        "Brand": "Maserati",
        "Date": "1956",
        "Horsepower": "285",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Maserati A6G/2000 Spyder",
        "Brand": "Maserati",
        "Date": "1955",
        "Horsepower": "325",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Maserati Tipo 61",
        "Brand": "Maserati",
        "Date": "1960",
        "Horsepower": "160",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "McLaren F1",
        "Brand": "McLaren",
        "Date": "1995",
        "Horsepower": "240",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "McLaren F1",
        "Brand": "McLaren",
        "Date": "1997",
        "Horsepower": "160",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "McLaren F1",
        "Brand": "McLaren",
        "Date": "1997",
        "Horsepower": "240",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "McLaren F1 GTR Longtail",
        "Brand": "McLaren",
        "Date": "1997",
        "Horsepower": "127",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "McLaren M16C",
        "Brand": "McLaren",
        "Date": "1974",
        "Horsepower": "115",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Mercedes-Benz 300SL",
        "Brand": "Mercedes-Benz",
        "Date": "1955",
        "Horsepower": "117",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Mercedes-Benz 38/250 SSK",
        "Brand": "Mercedes-Benz",
        "Date": "1929",
        "Horsepower": "115",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Mercedes-Benz 500K Roadster",
        "Brand": "Mercedes-Benz",
        "Date": "1935",
        "Horsepower": "160",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Mercedes-Benz 540K Special Roadster",
        "Brand": "Mercedes-Benz",
        "Date": "1936",
        "Horsepower": "93",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Mercedes-Benz 540K Special Roadster",
        "Brand": "Mercedes-Benz",
        "Date": "1937",
        "Horsepower": "160",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Mercedes-Benz 540K Special Roadster",
        "Brand": "Mercedes-Benz",
        "Date": "1939",
        "Horsepower": "160",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Mercedes-Benz 540K Spezial Coupe",
        "Brand": "Mercedes-Benz",
        "Date": "1936",
        "Horsepower": "73",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Mercedes-Benz 540K Spezial Roadster",
        "Brand": "Mercedes-Benz",
        "Date": "1937",
        "Horsepower": "240",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Mercedes-Benz 540K Spezial Roadster",
        "Brand": "Mercedes-Benz",
        "Date": "1939",
        "Horsepower": "240",
        "Transmission": "Automatic",
        "Class": "Minivan"
    },
    {
        "Model": "Mercedes-Benz 680S Torpedo Roadster",
        "Brand": "Mercedes-Benz",
        "Date": "1928",
        "Horsepower": "240",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Mercedes-Benz SSK Roadster",
        "Brand": "Mercedes-Benz",
        "Date": "1929",
        "Horsepower": "240",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Mercedes-Benz W196",
        "Brand": "Mercedes-Benz",
        "Date": "1954",
        "Horsepower": "316",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Oldsmobile F-88",
        "Brand": "General Motors",
        "Date": "1954",
        "Horsepower": "103",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Oldsmobile Limited Five-Passenger Touring",
        "Brand": "General Motors",
        "Date": "1912",
        "Horsepower": "103",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Packard Twelve Runabout Speedster",
        "Brand": "Packard Motor",
        "Date": "1934",
        "Horsepower": "103",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Pontiac Bonneville Special",
        "Brand": "Packard Motor",
        "Date": "1954",
        "Horsepower": "138",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Porsche 550/1500 RS Spyder",
        "Brand": "Porsche",
        "Date": "1955",
        "Horsepower": "138",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Porsche 911 Carrera RSR Turbo 2.14",
        "Brand": "Porsche",
        "Date": "1974",
        "Horsepower": "138",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Porsche 917 Interserie Spyder",
        "Brand": "Porsche",
        "Date": "1970",
        "Horsepower": "173",
        "Transmission": "Automatic",
        "Class": "SUV"
    },
    {
        "Model": "Porsche 917/10",
        "Brand": "Porsche",
        "Date": "1972",
        "Horsepower": "170",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Porsche 917/30",
        "Brand": "Porsche",
        "Date": "1973",
        "Horsepower": "170",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Porsche 956",
        "Brand": "Porsche",
        "Date": "1982",
        "Horsepower": "172",
        "Transmission": "Automatic",
        "Class": "Sports"
    },
    {
        "Model": "Porsche RS60",
        "Brand": "Porsche",
        "Date": "1960",
        "Horsepower": "194",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Rolls-Royce 10 hp Two-Seater",
        "Brand": "Rolls-Royce",
        "Date": "1904",
        "Horsepower": "194",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Shelby Cobra 427 Super Snake",
        "Brand": "AC Cars",
        "Date": "1966",
        "Horsepower": "280",
        "Transmission": "Automatic",
        "Class": "Wagon"
    },
    {
        "Model": "Shelby Daytona Cobra Coupe",
        "Brand": "AC Cars",
        "Date": "1965",
        "Horsepower": "315",
        "Transmission": "Automatic",
        "Class": "Wagon"
    },
    {
        "Model": "Talbot-Lago Lago Special Teardrop Coupe",
        "Brand": "Talbot-Lago",
        "Date": "1938",
        "Horsepower": "260",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Talbot-Lago T150-C SS",
        "Brand": "Talbot-Lago",
        "Date": "1938",
        "Horsepower": "280",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Talbot-Lago T150C Lago Speciale Teardrop Coupe",
        "Brand": "Talbot-Lago",
        "Date": "1938",
        "Horsepower": "260",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Talbot-Lago T150C SS Teardrop CoupÃ©",
        "Brand": "Talbot-Lago",
        "Date": "1938",
        "Horsepower": "255",
        "Transmission": "Automatic",
        "Class": "Sedan"
    },
    {
        "Model": "Talbot-Lago T150C SS Teardrop coupe",
        "Brand": "Talbot-Lago",
        "Date": "1939",
        "Horsepower": "340",
        "Transmission": "Automatic",
        "Class": "Sedan"
    }
];
localStorage.setItem("carList", JSON.stringify(carList))
