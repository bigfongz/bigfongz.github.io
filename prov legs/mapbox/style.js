
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "NewfoundlandandLabrador2021_0": {
            "type": "geojson",
            "data": json_NewfoundlandandLabrador2021_0
        }
                    ,
        "NovaScotia2021_1": {
            "type": "geojson",
            "data": json_NovaScotia2021_1
        }
                    ,
        "PrinceEdwardIsland2023_2": {
            "type": "geojson",
            "data": json_PrinceEdwardIsland2023_2
        }
                    ,
        "NewBrunswick2020_3": {
            "type": "geojson",
            "data": json_NewBrunswick2020_3
        }
                    ,
        "Quebec2022_4": {
            "type": "geojson",
            "data": json_Quebec2022_4
        }
                    ,
        "Ontario2022_5": {
            "type": "geojson",
            "data": json_Ontario2022_5
        }
                    ,
        "Manitoba2019_6": {
            "type": "geojson",
            "data": json_Manitoba2019_6
        }
                    ,
        "Saskatchewan2020_7": {
            "type": "geojson",
            "data": json_Saskatchewan2020_7
        }
                    ,
        "Alberta2019_8": {
            "type": "geojson",
            "data": json_Alberta2019_8
        }
                    ,
        "BritishColumbia2020_9": {
            "type": "geojson",
            "data": json_BritishColumbia2020_9
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#666666"
            }
        },
        {
            "id": "lyr_NewfoundlandandLabrador2021_0_0",
            "type": "fill",
            "source": "NewfoundlandandLabrador2021_0",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'C50'], 1.0, ['==', ['get', 'FIRST'], 'C60'], 1.0, ['==', ['get', 'FIRST'], 'C80'], 1.0, ['==', ['get', 'FIRST'], 'I40'], 1.0, ['==', ['get', 'FIRST'], 'I50'], 1.0, ['==', ['get', 'FIRST'], 'I70'], 1.0, ['==', ['get', 'FIRST'], 'L40'], 1.0, ['==', ['get', 'FIRST'], 'L50'], 1.0, ['==', ['get', 'FIRST'], 'L60'], 1.0, ['==', ['get', 'FIRST'], 'L70'], 1.0, ['==', ['get', 'FIRST'], 'L80'], 1.0, ['==', ['get', 'FIRST'], 'N50'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'C50'], '#1919a3', ['==', ['get', 'FIRST'], 'C60'], '#000099', ['==', ['get', 'FIRST'], 'C80'], '#00005c', ['==', ['get', 'FIRST'], 'I40'], '#999999', ['==', ['get', 'FIRST'], 'I50'], '#8d8d8d', ['==', ['get', 'FIRST'], 'I70'], '#737373', ['==', ['get', 'FIRST'], 'L40'], '#ff3333', ['==', ['get', 'FIRST'], 'L50'], '#ff1919', ['==', ['get', 'FIRST'], 'L60'], '#ff0000', ['==', ['get', 'FIRST'], 'L70'], '#e60000', ['==', ['get', 'FIRST'], 'L80'], '#cc0000', ['==', ['get', 'FIRST'], 'N50'], '#ff7519', '#000000']}
        }
,
        {
            "id": "lyr_NovaScotia2021_1_0",
            "type": "fill",
            "source": "NovaScotia2021_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'C30'], 1.0, ['==', ['get', 'FIRST'], 'C40'], 1.0, ['==', ['get', 'FIRST'], 'C50'], 1.0, ['==', ['get', 'FIRST'], 'C60'], 1.0, ['==', ['get', 'FIRST'], 'C70'], 1.0, ['==', ['get', 'FIRST'], 'C80'], 1.0, ['==', ['get', 'FIRST'], 'I50'], 1.0, ['==', ['get', 'FIRST'], 'L30'], 1.0, ['==', ['get', 'FIRST'], 'L40'], 1.0, ['==', ['get', 'FIRST'], 'L50'], 1.0, ['==', ['get', 'FIRST'], 'N40'], 1.0, ['==', ['get', 'FIRST'], 'N50'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'C30'], '#4d4db8', ['==', ['get', 'FIRST'], 'C40'], '#3333ad', ['==', ['get', 'FIRST'], 'C50'], '#1919a3', ['==', ['get', 'FIRST'], 'C60'], '#000099', ['==', ['get', 'FIRST'], 'C70'], '#00007a', ['==', ['get', 'FIRST'], 'C80'], '#00005c', ['==', ['get', 'FIRST'], 'I50'], '#8d8d8d', ['==', ['get', 'FIRST'], 'L30'], '#ff4d4d', ['==', ['get', 'FIRST'], 'L40'], '#ff3333', ['==', ['get', 'FIRST'], 'L50'], '#ff1919', ['==', ['get', 'FIRST'], 'N40'], '#ff8533', ['==', ['get', 'FIRST'], 'N50'], '#ff7519', '#ffffff']}
        }
,
        {
            "id": "lyr_PrinceEdwardIsland2023_2_0",
            "type": "fill",
            "source": "PrinceEdwardIsland2023_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'C40'], 1.0, ['==', ['get', 'FIRST'], 'C50'], 1.0, ['==', ['get', 'FIRST'], 'C60'], 1.0, ['==', ['get', 'FIRST'], 'C70'], 1.0, ['==', ['get', 'FIRST'], 'G40'], 1.0, ['==', ['get', 'FIRST'], 'L30'], 1.0, ['==', ['get', 'FIRST'], 'L40'], 1.0, ['==', ['get', 'FIRST'], 'L50'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'C40'], '#3333ad', ['==', ['get', 'FIRST'], 'C50'], '#1919a3', ['==', ['get', 'FIRST'], 'C60'], '#000099', ['==', ['get', 'FIRST'], 'C70'], '#00007a', ['==', ['get', 'FIRST'], 'G40'], '#85ad33', ['==', ['get', 'FIRST'], 'L30'], '#ff4d4d', ['==', ['get', 'FIRST'], 'L40'], '#ff3333', ['==', ['get', 'FIRST'], 'L50'], '#ff1919', '#ffffff']}
        }
,
        {
            "id": "lyr_NewBrunswick2020_3_0",
            "type": "fill",
            "source": "NewBrunswick2020_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'C40'], 1.0, ['==', ['get', 'FIRST'], 'C50'], 1.0, ['==', ['get', 'FIRST'], 'C60'], 1.0, ['==', ['get', 'FIRST'], 'G40'], 1.0, ['==', ['get', 'FIRST'], 'G50'], 1.0, ['==', ['get', 'FIRST'], 'L30'], 1.0, ['==', ['get', 'FIRST'], 'L40'], 1.0, ['==', ['get', 'FIRST'], 'L50'], 1.0, ['==', ['get', 'FIRST'], 'L60'], 1.0, ['==', ['get', 'FIRST'], 'L70'], 1.0, ['==', ['get', 'FIRST'], 'L80'], 1.0, ['==', ['get', 'FIRST'], 'P40'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'C40'], '#3333ad', ['==', ['get', 'FIRST'], 'C50'], '#1919a3', ['==', ['get', 'FIRST'], 'C60'], '#000099', ['==', ['get', 'FIRST'], 'G40'], '#85ad33', ['==', ['get', 'FIRST'], 'G50'], '#75a319', ['==', ['get', 'FIRST'], 'L30'], '#ff4d4d', ['==', ['get', 'FIRST'], 'L40'], '#ff3333', ['==', ['get', 'FIRST'], 'L50'], '#ff1919', ['==', ['get', 'FIRST'], 'L60'], '#ff0000', ['==', ['get', 'FIRST'], 'L70'], '#e60000', ['==', ['get', 'FIRST'], 'L80'], '#cc0000', ['==', ['get', 'FIRST'], 'P40'], '#853385', '#ffffff']}
        }
,
        {
            "id": "lyr_Quebec2022_4_0",
            "type": "fill",
            "source": "Quebec2022_4",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'CAQ30'], 1.0, ['==', ['get', 'FIRST'], 'CAQ40'], 1.0, ['==', ['get', 'FIRST'], 'CAQ50'], 1.0, ['==', ['get', 'FIRST'], 'CAQ60'], 1.0, ['==', ['get', 'FIRST'], 'L30'], 1.0, ['==', ['get', 'FIRST'], 'L40'], 1.0, ['==', ['get', 'FIRST'], 'L50'], 1.0, ['==', ['get', 'FIRST'], 'L60'], 1.0, ['==', ['get', 'FIRST'], 'PQ40'], 1.0, ['==', ['get', 'FIRST'], 'PQ60'], 1.0, ['==', ['get', 'FIRST'], 'QS30'], 1.0, ['==', ['get', 'FIRST'], 'QS40'], 1.0, ['==', ['get', 'FIRST'], 'QS50'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'CAQ30'], '#4db8b8', ['==', ['get', 'FIRST'], 'CAQ40'], '#33adad', ['==', ['get', 'FIRST'], 'CAQ50'], '#19a3a3', ['==', ['get', 'FIRST'], 'CAQ60'], '#008a8a', ['==', ['get', 'FIRST'], 'L30'], '#ff4d4d', ['==', ['get', 'FIRST'], 'L40'], '#ff3333', ['==', ['get', 'FIRST'], 'L50'], '#ff1919', ['==', ['get', 'FIRST'], 'L60'], '#ff0000', ['==', ['get', 'FIRST'], 'PQ40'], '#4040bf', ['==', ['get', 'FIRST'], 'PQ60'], '#262673', ['==', ['get', 'FIRST'], 'QS30'], '#ff944d', ['==', ['get', 'FIRST'], 'QS40'], '#ff8533', ['==', ['get', 'FIRST'], 'QS50'], '#ff7519', '#ffffff']}
        }
,
        {
            "id": "lyr_Ontario2022_5_0",
            "type": "fill",
            "source": "Ontario2022_5",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'C30'], 1.0, ['==', ['get', 'FIRST'], 'C40'], 1.0, ['==', ['get', 'FIRST'], 'C50'], 1.0, ['==', ['get', 'FIRST'], 'C60'], 1.0, ['==', ['get', 'FIRST'], 'G50'], 1.0, ['==', ['get', 'FIRST'], 'I30'], 1.0, ['==', ['get', 'FIRST'], 'L30'], 1.0, ['==', ['get', 'FIRST'], 'L40'], 1.0, ['==', ['get', 'FIRST'], 'N30'], 1.0, ['==', ['get', 'FIRST'], 'N40'], 1.0, ['==', ['get', 'FIRST'], 'N50'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'C30'], '#4d4db8', ['==', ['get', 'FIRST'], 'C40'], '#3333ad', ['==', ['get', 'FIRST'], 'C50'], '#1919a3', ['==', ['get', 'FIRST'], 'C60'], '#000099', ['==', ['get', 'FIRST'], 'G50'], '#75a319', ['==', ['get', 'FIRST'], 'I30'], '#b3b3b3', ['==', ['get', 'FIRST'], 'L30'], '#ff4d4d', ['==', ['get', 'FIRST'], 'L40'], '#ff3333', ['==', ['get', 'FIRST'], 'N30'], '#ff944d', ['==', ['get', 'FIRST'], 'N40'], '#ff8533', ['==', ['get', 'FIRST'], 'N50'], '#ff7519', '#ffffff']}
        }
,
        {
            "id": "lyr_Manitoba2019_6_0",
            "type": "fill",
            "source": "Manitoba2019_6",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'C30'], 1.0, ['==', ['get', 'FIRST'], 'C40'], 1.0, ['==', ['get', 'FIRST'], 'C50'], 1.0, ['==', ['get', 'FIRST'], 'C60'], 1.0, ['==', ['get', 'FIRST'], 'C70'], 1.0, ['==', ['get', 'FIRST'], 'C80'], 1.0, ['==', ['get', 'FIRST'], 'L40'], 1.0, ['==', ['get', 'FIRST'], 'L50'], 1.0, ['==', ['get', 'FIRST'], 'N30'], 1.0, ['==', ['get', 'FIRST'], 'N40'], 1.0, ['==', ['get', 'FIRST'], 'N50'], 1.0, ['==', ['get', 'FIRST'], 'N60'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'C30'], '#4d4db8', ['==', ['get', 'FIRST'], 'C40'], '#3333ad', ['==', ['get', 'FIRST'], 'C50'], '#1919a3', ['==', ['get', 'FIRST'], 'C60'], '#000099', ['==', ['get', 'FIRST'], 'C70'], '#00007a', ['==', ['get', 'FIRST'], 'C80'], '#00005c', ['==', ['get', 'FIRST'], 'L40'], '#ff3333', ['==', ['get', 'FIRST'], 'L50'], '#ff1919', ['==', ['get', 'FIRST'], 'N30'], '#ff944d', ['==', ['get', 'FIRST'], 'N40'], '#ff8533', ['==', ['get', 'FIRST'], 'N50'], '#ff7519', ['==', ['get', 'FIRST'], 'N60'], '#ff6600', '#ffffff']}
        }
,
        {
            "id": "lyr_Saskatchewan2020_7_0",
            "type": "fill",
            "source": "Saskatchewan2020_7",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'N40'], 1.0, ['==', ['get', 'FIRST'], 'N50'], 1.0, ['==', ['get', 'FIRST'], 'N60'], 1.0, ['==', ['get', 'FIRST'], 'S40'], 1.0, ['==', ['get', 'FIRST'], 'S50'], 1.0, ['==', ['get', 'FIRST'], 'S60'], 1.0, ['==', ['get', 'FIRST'], 'S70'], 1.0, ['==', ['get', 'FIRST'], 'S80'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'N40'], '#ff8533', ['==', ['get', 'FIRST'], 'N50'], '#ff7519', ['==', ['get', 'FIRST'], 'N60'], '#ff6600', ['==', ['get', 'FIRST'], 'S40'], '#85ad33', ['==', ['get', 'FIRST'], 'S50'], '#75a319', ['==', ['get', 'FIRST'], 'S60'], '#669900', ['==', ['get', 'FIRST'], 'S70'], '#5c8a00', ['==', ['get', 'FIRST'], 'S80'], '#527a00', '#ffffff']}
        }
,
        {
            "id": "lyr_Alberta2019_8_0",
            "type": "fill",
            "source": "Alberta2019_8",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'C40'], 1.0, ['==', ['get', 'FIRST'], 'C50'], 1.0, ['==', ['get', 'FIRST'], 'C60'], 1.0, ['==', ['get', 'FIRST'], 'C70'], 1.0, ['==', ['get', 'FIRST'], 'C80'], 1.0, ['==', ['get', 'FIRST'], 'N40'], 1.0, ['==', ['get', 'FIRST'], 'N50'], 1.0, ['==', ['get', 'FIRST'], 'N60'], 1.0, ['==', ['get', 'FIRST'], 'N70'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'C40'], '#3333ad', ['==', ['get', 'FIRST'], 'C50'], '#1919a3', ['==', ['get', 'FIRST'], 'C60'], '#000099', ['==', ['get', 'FIRST'], 'C70'], '#00007a', ['==', ['get', 'FIRST'], 'C80'], '#00005c', ['==', ['get', 'FIRST'], 'N40'], '#ff8533', ['==', ['get', 'FIRST'], 'N50'], '#ff7519', ['==', ['get', 'FIRST'], 'N60'], '#ff6600', ['==', ['get', 'FIRST'], 'N70'], '#e65c00', '#ffffff']}
        }
,
        {
            "id": "lyr_BritishColumbia2020_9_0",
            "type": "fill",
            "source": "BritishColumbia2020_9",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'FIRST'], 'G40'], 1.0, ['==', ['get', 'FIRST'], 'G50'], 1.0, ['==', ['get', 'FIRST'], 'L30'], 1.0, ['==', ['get', 'FIRST'], 'L40'], 1.0, ['==', ['get', 'FIRST'], 'L50'], 1.0, ['==', ['get', 'FIRST'], 'N30'], 1.0, ['==', ['get', 'FIRST'], 'N40'], 1.0, ['==', ['get', 'FIRST'], 'N50'], 1.0, ['==', ['get', 'FIRST'], 'N60'], 1.0, ['==', ['get', 'FIRST'], 'N70'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'FIRST'], 'G40'], '#85ad33', ['==', ['get', 'FIRST'], 'G50'], '#75a319', ['==', ['get', 'FIRST'], 'L30'], '#ff4d4d', ['==', ['get', 'FIRST'], 'L40'], '#ff3333', ['==', ['get', 'FIRST'], 'L50'], '#ff1919', ['==', ['get', 'FIRST'], 'N30'], '#ff944d', ['==', ['get', 'FIRST'], 'N40'], '#ff8533', ['==', ['get', 'FIRST'], 'N50'], '#ff7519', ['==', ['get', 'FIRST'], 'N60'], '#ff6600', ['==', ['get', 'FIRST'], 'N70'], '#e65c00', '#ffffff']}
        }
],
}
