import ClipperLib from 'clipper-lib';

export function simplifyPath(pathStr) {
  // 1. Extrair polígonos (quadrados) do pathStr
  // Assumindo padrão: M x,y l dx,0 0,dy -dx,0 z (quadrados)
  const regex = /M\s*(-?\d+),(-?\d+)\s*l\s*([\d-]+),0\s*0,([\d-]+)\s*([\d-]+),0\s*z/g;
  let match;
  const scale = 1000; // Escalar para inteiros no Clipper
  const polygons = [];

  while ((match = regex.exec(pathStr)) !== null) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    const dx1 = parseInt(match[3], 10);
    const dy1 = parseInt(match[4], 10);
    const dx2 = parseInt(match[5], 10);

    // Calcular pontos do quadrado
    const poly = [
      { X: x * scale, Y: y * scale },
      { X: (x + dx1) * scale, Y: y * scale },
      { X: (x + dx1) * scale, Y: (y + dy1) * scale },
      { X: x * scale, Y: (y + dy1) * scale },
    ];
    polygons.push(poly);
  }

  if (polygons.length === 0) return '';

  // 2. Usar Clipper para unir todos os polígonos
  const clipper = new ClipperLib.Clipper();
  clipper.AddPaths(polygons, ClipperLib.PolyType.ptSubject, true);
  const solution = new ClipperLib.Paths();
  clipper.Execute(
    ClipperLib.ClipType.ctUnion,
    solution,
    ClipperLib.PolyFillType.pftNonZero,
    ClipperLib.PolyFillType.pftNonZero
  );

  if (solution.length === 0) return '';

  // 3. Converter solução em path SVG
  function polygonToPath(polygon) {
    return (
      'M ' +
      polygon
        .map(p => `${p.X / scale},${p.Y / scale}`)
        .join(' L ') +
      ' Z'
    );
  }

  return solution.map(polygonToPath).join(' ');
}
