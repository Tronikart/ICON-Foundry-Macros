// This was applied to the token and then that token asigned to the sheet

let params =
[{
    filterType: "images",
    filterId: "seraph",
    time: 0, 
    blend: 4,
    nbImage: 4, 
    padding: 0,
    alphaImg: 0.5, 
    alphaChr: 0.0,
    ampX: 0.10, 
    ampY: 0.10,
    zOrder: 20,
    animated :
    {
      time: 
      { 
        speed: 0.0010, 
        animType: "move" 
      },
      ampX:
      {
        val1: 0, val2: 0.01,
        animType: "syncCosOscillation",
        loopDuration: 25000
      },
      ampY:
      {
        val1: 0, val2: 0.01,
        animType: "syncCosOscillation",
        loopDuration: 25000,
      },
      alphaChr:        
      {
        val1: 1, val2: 0,
        animType: "syncCosOscillation",
        loopDuration: 25000
      },
      alphaImg:        
      {
        val1: 0.2, val2: 0.9,
        animType: "syncSinOscillation",
        loopDuration: 2500
      }
    }
}];

await TokenMagic.addUpdateFiltersOnSelected(params);
