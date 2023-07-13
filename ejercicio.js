var lienzo1 = document.getElementById("lienzo");
var papel1 = lienzo1.getContext("2d");
var lienzo2 = document.getElementById("canvas2");
var papel2 = lienzo2.getContext("2d");
var imagen1 = new Image();
imagen1.src =
  "2wCEAAoHCBUVFRgVFhYZGBgaGhwYGRocGBgYHBgcGhwaHBwcGhocIS4lHB8rHxkYJjgmLC8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBISGjEhISExNDQ0NDQ0MTE0MTQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ=";
imagen1.addEventListener("load", dibujar);
function dibujar() {
  papel1.drawImage(imagen1, 200, 200, 100, 100);
  papel2.drawImage(imagen1, 600, 0, 100, 100);
}
