{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "COVID-19 Active Cases (10 Oct 2020)",
    "width": 800,
    "height": 400,
    "projection": {"type": "equalEarth"},
    "data": {
        "url": "https://raw.githubusercontent.com/LordlySenpai/Vega/main/ne_110m.json",
        "format": {"type": "topojson", "feature":"ne_110m"}
        },
 "transform": [
            {
                "lookup":"properties.NAME",
                "from": {
                    "data": {
                        "url": "hhttps://raw.githubusercontent.com/LordlySenpai/Vega/main/CO2%202014.csv?token=GHSAT0AAAAAABZFQZYAHBVGHQLV6JVSRXOKYZP7G4Q"
                    },
                    "key": "Country",
                    "fields": ["Emissions"]
                }

            }
        ],
    "mark": {"type": "geoshape"},
    "encoding" {
        "color": {
            "field": "Emissions",
            "type": "quantitative",
            "scale": {
                "type": "threshold",
                "domain": [10000, 20000, 50000]
                "range": ["#ffffb2", "#fecc5c", "#fd8d3c", "#e31a1c"]
            }
        },
        "tooltip": [
            {"field": "properties.NAME", "type": "nominal", "titles": "Country"},
            {"field": "Emissions", "type": "quantitative"}
        ]
    }
}