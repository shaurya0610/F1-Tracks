export async function GET() {
    return new Response(JSON.stringify([
        {
            track: "Albert Park Grand Prix Circuit",
            gp: "Australian Grand Prix",
            layout: "/australia.png",
            dates: "14-16 Mar"
        },
        {
            track: "Shanghai International Circuit",
            gp: "Chinese Grand Prix",
            layout: "/china.png",
            dates: "21-23 Mar"
        },
        {
            track: "Suzuka Circuit",
            gp: "Japanese Grand Prix",
            layout: "/japan.png",
            dates: "04-06 Apr"
        },
        {
            track: "Bahrain International Circuit",
            gp: "Bahrain Grand Prix",
            layout: "/bahrain.png",
            dates: "11-13 Apr"
        },
        {
            track: "Jeddah Corniche Circuit",
            gp: "Saudi Arabian Grand Prix",
            layout: "/saudi.png",
            dates: "18-20 Apr"
        },
        {
            track: "Miami International Autodrome",
            gp: "Miami Grand Prix",
            layout: "/miami.png",
            dates: "02-04 May"
        },
        {
            track: "Autodromo Internazionale Enzo e Dino Ferrari",
            gp: "Gran Premio dell'Emilia-Romagna",
            layout: "/imola.png",
            dates: "16-18 May"
        },
        {
            track: "Circuit de Monaco",
            gp: "Grand Prix de Monaco",
            layout: "/monaco.png",
            dates: "23-25 May"
        },
        {
            track: "Circuit de Barcelona-Catalunya",
            gp: "Gran Premio de España",
            layout: "/catalunya.png",
            dates: "30 May-1 Jun"
        },
        {
            track: "Circuit Gilles-Villeneuve",
            gp: "Grand Prix du Canada",
            layout: "/canada.png",
            dates: "13-15 Jun"
        },
        {
            track: "Red Bull Ring",
            gp: "Austrian Grand Prix",
            layout: "/redbullring.png",
            dates: "27-29 Jun"
        },
        {
            track: "Silverstone Circuit",
            gp: "British Grand Prix",
            layout: "/silverstone.png",
            dates: "04-06 Jul"
        },
        {
            track: "Circuit de Spa-Francorchamps",
            gp: "Belgian Grand Prix",
            layout: "/spa.png",
            dates: "25-27 Jul"
        },
        {
            track: "Hungaroring",
            gp: "Hungarian Grand Prix",
            layout: "/hungaroring.png",
            dates: "01-03 Aug"
        },
        {
            track: "Circuit Zandvoort",
            gp: "Dutch Grand Prix",
            layout: "/zandvoort.png",
            dates: "29-31 Aug"
        },
        {
            track: "Autodromo Nazionale Monza",
            gp: "Gran Premio d'Italia",
            layout: "/monza.png",
            dates: "05-07 Sep"
        },
        {
            track: "Baku City Circuit",
            gp: "Azerbaijan Grand Prix",
            layout: "/baku.png",
            dates: "19-21 Sep"
        },
        {
            track: "Marina Bay Street Circuit",
            gp: "Singapore Grand Prix",
            layout: "/singapore.png",
            dates: "03-05 Oct"
        },
        {
            track: "Circuit of The Americas",
            gp: "United States Grand Prix",
            layout: "/cota.png",
            dates: "17-19 Oct"
        },
        {
            track: "Autódromo Hermanos Rodríguez",
            gp: "Gran Premio de la Ciudad de México",
            layout: "/mexico.png",
            dates: "24-26 Oct"
        },
        {
            track: "Autódromo José Carlos Pace",
            gp: "Grande Prêmio de São Paulo",
            layout: "/brazil.png",
            dates: "07-09 Nov"
        },
        {
            track: "Las Vegas Strip Circuit",
            gp: "Las Vegas Grand Prix",
            layout: "/vegas.png",
            dates: "20-22 Nov"
        },
        {
            track: "Lusail International Circuit",
            gp: "Qatar Grand Prix",
            layout: "/qatar.png",
            dates: "28-30 Nov"
        },
        {
            track: "Yas Marina Circuit",
            gp: "Abu Dhabi Grand Prix",
            layout: "/abudhabi.png",
            dates: "05-07 Dec"
        },
    ]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}