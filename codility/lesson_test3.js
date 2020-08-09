function solution() {
  let output = "";

  let tbody = $("tbody");
  let trEles = tbody.children("tr"); // select tr elements

  // loop through tr elements
  let trL = trEles.length;
  for (let x = 0; x < trL; x++) {
    let trEle = $(trEles[x]);

    // select td in tr element
    let tdEles = trEle.children("td");

    // loop through td elements
    let tdL = tdEles.length;
    for (let y = 0; y < tdL; y++) {
      // get css values
      let tdEle = $(tdEles[y]);
      let bg = tdEle.css("background-color").replace(/[^\d,]/g, "");
      let cl = tdEle.css("color").replace(/[^\d,]/g, "");

      // if background-color != color => seen the character
      if (bg != cl) {
        let char = tdEle.html();
        output += char;
      }
    }
  }

  return output;
}

$(document).ready(function () {
  let result = solution();
  console.log(result);
});
